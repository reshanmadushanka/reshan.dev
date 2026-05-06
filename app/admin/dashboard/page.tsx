'use client';

// Dashboard page — reads session from NextAuth (not localStorage)
// Middleware already blocks unauthenticated users — no manual redirect needed here

import { useState } from 'react';
import { Layout, Menu, Button, Drawer, Space, Badge, Avatar, message } from 'antd';
import {
  LogoutOutlined,
  DashboardOutlined,
  MenuOutlined,
  CloseOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import styles from './dashboard.module.css';

const { Header, Sider, Content } = Layout;

export default function AdminDashboard() {
  const { user, logout, isLoading } = useAuth();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
  };

  // Middleware handles redirect — this is just a loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const email = user?.email ?? '';

  const menuItems = [
    {
      key: '/admin/dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/admin/skills',
      icon: <BulbOutlined />,
      label: 'Skills',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
    setDrawerVisible(false);
  };

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.headerContent}>
          <Space>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              className={styles.mobileMenuBtn}
            />
            <h1 className={styles.logo}>Admin Panel</h1>
          </Space>

          <Space>
            <Badge status="success" text={`${email} (Admin)`} />
            <Avatar>{email.charAt(0).toUpperCase()}</Avatar>
            <Button
              type="primary"
              danger
              icon={<LogoutOutlined />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Space>
        </div>
      </Header>

      <Layout className={styles.contentLayout}>
        <Sider
          theme="light"
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className={styles.sider}
          breakpoint="md"
          collapsedWidth={0}
        >
          <Menu 
            mode="inline" 
            items={menuItems} 
            onClick={handleMenuClick}
            selectedKeys={[typeof window !== 'undefined' ? window.location.pathname : '/admin/dashboard']}
          />
        </Sider>

        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          closeIcon={<CloseOutlined />}
        >
          <Menu 
            mode="vertical" 
            items={menuItems} 
            onClick={handleMenuClick}
            selectedKeys={[typeof window !== 'undefined' ? window.location.pathname : '/admin/dashboard']}
          />
        </Drawer>

        <Content className={styles.content}>
          <div className={styles.welcome}>
            <h2>Welcome, {email}!</h2>
            <p>You are successfully logged in to the admin panel.</p>
            <div className={styles.infoBox}>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Role:</strong> Admin
              </p>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
