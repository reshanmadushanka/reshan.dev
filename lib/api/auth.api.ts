// Service Layer — Auth
// Single Responsibility: only auth-related API calls live here.
// Pages/hooks must import from here, NOT from client.ts

import apiClient from './client';
import type { LoginResponse } from '@/lib/types/auth.types';

export const authAPI = {
  login: (email: string, password: string) =>
    apiClient.post<LoginResponse>('/api/v1/auth/admin/login', { email, password }),

  register: (email: string, password: string, name: string) =>
    apiClient.post('/api/v1/auth/admin/register', { email, password, name }),
};
