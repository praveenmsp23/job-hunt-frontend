import type { NextRequest } from 'next/server';
import { authMiddleware } from './middleware/auth-middleware';

export function middleware(request: NextRequest) {
  return authMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
