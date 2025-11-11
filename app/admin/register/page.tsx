'use client';

import { useState } from 'react';
import { Form, Input, Button, Card, message, Spin } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { authAPI } from '@/lib/api/client';
import styles from './register.module.css';

export default function AdminRegisterPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: {
    email: string;
    name: string;
    password: string;
    confirm: string;
  }) => {
    if (values.password !== values.confirm) {
      message.error('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await authAPI.register(values.email, values.password, values.name);
      message.success('Admin registered successfully! Redirecting to login...');
      setTimeout(() => router.push('/admin/login'), 1500);
    } catch (error: any) {
      message.error(
        error.response?.data?.message || 'Registration failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card} title="Admin Registration">
        <Spin spinning={loading}>
          <Form
            form={form}
            name="admin-register"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[
                { required: true, message: 'Please enter your name' },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="John Doe"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Invalid email format' },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="admin@example.com"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Please enter a password' },
                { min: 6, message: 'Password must be at least 6 characters' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter a strong password"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              rules={[
                { required: true, message: 'Please confirm your password' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm your password"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
              >
                Register
              </Button>
            </Form.Item>

            <div className={styles.footer}>
              Already have an account?{' '}
              <a href="/admin/login">Login here</a>
            </div>
          </Form>
        </Spin>
      </Card>
    </div>
  );
}
