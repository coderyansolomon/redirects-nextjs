import { NextResponse } from 'next/server';

export function middleware(request) {
  const isAuthenticated = true; 

  // If the user 4is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ['/', '/settings/:path*'], // Protect both home and settings pages
};
