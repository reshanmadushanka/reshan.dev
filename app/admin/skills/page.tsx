'use client';

import { useState } from 'react';
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Space,
  Card,
  Popconfirm,
  Typography,
  Select
} from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useSkills } from '@/lib/hooks/useSkills';
import type { Skill } from '@/lib/types/skill.types';

const { Title } = Typography;

export default function AdminSkillsPage() {
  const { skills, isLoading, createSkill, updateSkill, deleteSkill } = useSkills();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [form] = Form.useForm();
  const router = useRouter();

  const handleAdd = () => {
    setEditingSkill(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (skill: Skill) => {
    setEditingSkill(skill);
    form.setFieldsValue(skill);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const onFinish = async (values: any) => {
    if (editingSkill) {
      const result = await updateSkill(editingSkill.id, values);
      if (result.success) setIsModalOpen(false);
    } else {
      const result = await createSkill(values);
      if (result.success) setIsModalOpen(false);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
      render: (level: number) => `${level}%`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Skill) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this skill?"
            onConfirm={() => deleteSkill(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              icon={<DeleteOutlined />}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Space>
              <Button
                icon={<ArrowLeftOutlined />}
                onClick={() => router.push('/admin/dashboard')}
              />
              <Title level={2} style={{ margin: 0 }}>Manage Skills</Title>
            </Space>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAdd}
            >
              Add Skill
            </Button>
          </div>

          <Table
            columns={columns}
            dataSource={skills}
            rowKey="id"
            loading={isLoading}
          />
        </Space>
      </Card>

      <Modal
        title={editingSkill ? 'Edit Skill' : 'Add New Skill'}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ level: 50 }}
        >
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please select category' }]}
          >
            <Select>
              <Select.Option value="frontend">Frontend</Select.Option>
              <Select.Option value="backend">Backend</Select.Option>
              <Select.Option value="database">Database</Select.Option>
              <Select.Option value="tools">Tools</Select.Option>
              <Select.Option value="design">Design</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="name"
            label="Skill Name"
            rules={[{ required: true, message: 'Please enter skill name' }]}
          >
            <Input placeholder="e.g. React, Python, Docker" />
          </Form.Item>

          <Form.Item
            name="level"
            label="Level (%)"
            rules={[
              { required: true, message: 'Please enter skill level' },
              { type: 'number', min: 1, max: 100, message: 'Level must be between 1 and 100' }
            ]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
            <Space>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                {editingSkill ? 'Update' : 'Create'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
