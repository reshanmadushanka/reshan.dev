// middleware.ts — Edge Middleware (runs before every request)
// AuthGuard at the network level: no unauthenticated user can reach /admin/dashboard
// This replaces the manual localStorage checks that were in each page.

import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  const isProtectedRoute = pathname.startsWith('/admin') && pathname !== '/admin/login';
  const isLoginPage = pathname === '/admin/login';

  // Block unauthenticated users from protected pages
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/login', req.nextUrl));
  }

  // Redirect already logged-in users away from login page
  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  // Run middleware only on admin routes (skip public pages, static files, API)
  matcher: ['/admin/:path*'],
};
