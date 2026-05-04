'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { message } from 'antd';

/**
 * Custom hook for Authentication
 * Wraps NextAuth functionality to provide a clean interface for components.
 * Follows the "Custom Hooks" pattern from the architecture plan.
 */
export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isLoading = status === 'loading';
  const isAuthenticated = status === 'authenticated';
  const user = session?.user;

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        message.error('Invalid email or password. Please try again.');
        return { success: false, error: result.error };
      }

      message.success('Welcome back!');
      router.push('/admin/dashboard');
      return { success: true };
    } catch (error) {
      message.error('An unexpected error occurred. Please try again.');
      return { success: false, error };
    }
  };

  const logout = async () => {
    try {
      await signOut({ redirect: false });
      message.success('Logged out successfully');
      router.push('/admin/login');
    } catch (error) {
      message.error('Failed to logout. Please try again.');
    }
  };

  return {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    session,
  };
}
