// Matches the exact response from: POST /api/v1/auth/admin/login
// Single Responsibility: only type definitions live here

export interface AdminUser {
  id: number;
  email: string;
  created_at: string;
}

export interface LoginResponse {
  message: string;
  access_token: string;
  token_type: 'bearer';
  expires_in: number;
  user: AdminUser;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}
