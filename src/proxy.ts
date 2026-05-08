import { withAuth } from "next-auth/middleware";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default withAuth(
  function middleware(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Protect /admin routes (both /admin and /id/admin or /en/admin)
        const isApiAuthRoute = req.nextUrl.pathname.startsWith('/api/auth');
        const isAuthRoute = req.nextUrl.pathname.includes('/admin/login');
        const isAdminRoute = req.nextUrl.pathname.includes('/admin');

        if (isApiAuthRoute || isAuthRoute) {
          return true;
        }

        if (isAdminRoute) {
          return token != null;
        }

        return true;
      },
    },
    pages: {
      signIn: '/id/admin/login',
    }
  }
);

export const config = {
  // Match only internationalized pathnames and admin routes
  matcher: ['/', '/(id|en)/:path*', '/admin/:path*']
};
