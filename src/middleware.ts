import { NextResponse, type NextRequest } from 'next/server';
import { i18n } from './i18n-config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { locales } = i18n;
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || locales[0];

    return NextResponse.redirect(new URL(`/${locale + pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!_next|robots.txt|sitemap.xml|images).*)'],
};
