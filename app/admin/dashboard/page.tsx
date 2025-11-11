'use client';

import { useEffect, useState } from 'react';
import { Layout, Menu, Button, Drawer, Space, Badge, Avatar, message } from 'antd';
import {
  LogoutOutlined,
  DashboardOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css';

const { Header, Sider, Content } = Layout;

export default function AdminDashboard() {
  const [admin, setAdmin] = useState<any>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const adminData = localStorage.getItem('admin_user');
    const token = localStorage.getItem('admin_token');

    if (!token || !adminData) {
      router.push('/admin/login');
      return;
    }

    try {
      setAdmin(JSON.parse(adminData));
    } catch (error) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    message.success('Logged out successfully');
    router.push('/admin/login');
  };

  if (!admin) {
    return <div>Loading...</div>;
  }

  const menuItems = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
  ];

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.headerContent}>
          <Space>
            {window.innerWidth <= 768 && (
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setDrawerVisible(true)}
              />
            )}
            <h1 className={styles.logo}>Admin Panel</h1>
          </Space>

          <Space>
            <Badge status="success" text={`${admin.name} (${admin.role})`} />
            <Avatar>{admin.name.charAt(0).toUpperCase()}</Avatar>
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
        {window.innerWidth > 768 ? (
          <Sider
            theme="light"
            collapsed={collapsed}
            onCollapse={setCollapsed}
            className={styles.sider}
          >
            <Menu mode="inline" items={menuItems} />
          </Sider>
        ) : (
          <Drawer
            title="Menu"
            placement="left"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            closeIcon={<CloseOutlined />}
          >
            <Menu mode="vertical" items={menuItems} />
          </Drawer>
        )}

        <Content className={styles.content}>
          <div className={styles.welcome}>
            <h2>Welcome, {admin.name}!</h2>
            <p>You are successfully logged in to the admin panel.</p>
            <div className={styles.infoBox}>
              <p>
                <strong>Email:</strong> {admin.email}
              </p>
              <p>
                <strong>Role:</strong> {admin.role}
              </p>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
