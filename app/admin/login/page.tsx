'use client';

import { useState } from 'react';
import { Form, Input, Button, Card, message, Spin } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { authAPI } from '@/lib/api/client';
import styles from './login.module.css';

export default function AdminLoginPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await authAPI.login(values.email, values.password);
      const { access_token, admin } = response.data;

      // Store token in localStorage
      localStorage.setItem('admin_token', access_token);
      localStorage.setItem('admin_user', JSON.stringify(admin));

      message.success(`Welcome back, ${admin.name}!`);
      router.push('/admin/dashboard');
    } catch (error: any) {
      message.error(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card} title="Admin Login">
        <Spin spinning={loading}>
          <Form
            form={form}
            name="admin-login"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Invalid email format' },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="admin@example.com"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Please enter your password' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter your password"
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
                Login
              </Button>
            </Form.Item>

            <div className={styles.footer}>
              Don't have an account? <a href="/admin/register">Register here</a>
            </div>
          </Form>
        </Spin>
      </Card>
    </div>
  );
}
