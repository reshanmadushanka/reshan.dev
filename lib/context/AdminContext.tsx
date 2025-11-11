'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AdminContextType {
  admin: AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  setAdmin: (admin: AdminUser | null) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load from localStorage on mount
    const storedToken = localStorage.getItem('admin_token');
    const storedAdmin = localStorage.getItem('admin_user');

    if (storedToken && storedAdmin) {
      try {
        setToken(storedToken);
        setAdmin(JSON.parse(storedAdmin));
      } catch (error) {
        console.error('Failed to restore admin session:', error);
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
      }
    }

    setIsLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    setAdmin(null);
    setToken(null);
  };

  const value: AdminContextType = {
    admin,
    token,
    isAuthenticated: !!token && !!admin,
    setAdmin,
    setToken,
    logout,
  };

  return (
    <AdminContext.Provider value={value}>
      {!isLoading && children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}
