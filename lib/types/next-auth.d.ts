// Extends NextAuth's built-in types to include our custom fields
// (accessToken from Python API, typed user object)

import { DefaultSession } from 'next-auth';
import { AdminUser } from '@/lib/types/auth.types';

declare module 'next-auth' {
  interface Session {
    // The Python API access_token stored in the session
    accessToken: string;
    user: {
      id: string;
      email: string;
    } & DefaultSession['user'];
  }

  interface User {
    accessToken: string;
    adminUser: AdminUser;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    adminUser: AdminUser;
  }
}
