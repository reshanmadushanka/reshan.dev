// NextAuth v5 route handler
// Handles all GET/POST requests to /api/auth/*
// (login, logout, session, csrf, etc.)

import { handlers } from '@/auth';

export const { GET, POST } = handlers;
