import axios, { AxiosError, AxiosResponse } from 'axios';
import { getSession } from 'next-auth/react';

// ─── Base Configuration ────────────────────────────────────────────────────────
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10_000,
});

// ─── Request Interceptor: Attach Python API token from NextAuth session ────────
// getSession() reads from the NextAuth JWT cookie — no localStorage needed
apiClient.interceptors.request.use(async (config) => {
  if (typeof window !== 'undefined') {
    const session = await getSession();
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
  }
  return config;
});

// ─── Response Interceptor: Handle global 401 errors ───────────────────────────
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
