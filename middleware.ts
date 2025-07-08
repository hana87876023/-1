import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  pathnames: {
    '/': '/',
    '/cheerleaders': '/cheerleaders',
    '/teams': '/teams',
  }
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};