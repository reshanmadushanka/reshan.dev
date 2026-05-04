// auth.ts — Auth.js v5 (next-auth@beta) root config
// Service Layer: authorize() calls authAPI, keeping page logic clean.
// The Python API access_token is stored securely in the NextAuth JWT cookie.

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authAPI } from '@/lib/api/auth.api';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      // authorize() is called server-side when signIn('credentials') is triggered
      async authorize(credentials) {
        try {
          const response = await authAPI.login(
            credentials.email as string,
            credentials.password as string
          );
          const { access_token, user } = response.data;

          if (access_token && user) {
            return {
              id: String(user.id),
              email: user.email,
              accessToken: access_token,
              adminUser: user,
            };
          }
          return null;
        } catch {
          // Return null on login failure — NextAuth handles the error
          return null;
        }
      },
    }),
  ],

  callbacks: {
    // jwt() — runs when token is created or updated
    // Store the Python API token inside the NextAuth JWT
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.adminUser = user.adminUser;
      }
      return token;
    },

    // session() — runs when session is read
    // Expose the token data to the client via useSession()
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = {
        ...session.user,
        id: token.sub ?? '',
        email: token.adminUser?.email ?? session.user.email,
      };
      return session;
    },
  },

  pages: {
    signIn: '/admin/login', // Redirect here instead of default NextAuth page
  },

  session: {
    strategy: 'jwt', // Use JWT (stateless) — no DB required
  },
});
