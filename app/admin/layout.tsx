'use client';

// Admin layout — wraps all /admin/* pages
// 1. SessionProvider  → makes NextAuth session available via useSession()
// 2. ConfigProvider   → Ant Design theme

import { SessionProvider } from 'next-auth/react';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1890ff',
            borderRadius: 6,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </SessionProvider>
  );
}
