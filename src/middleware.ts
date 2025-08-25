import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const localeCookie = req.cookies.get('NEXT_LOCALE')?.value;

  if (localeCookie && req.nextUrl.locale !== localeCookie) {
    const url = req.nextUrl.clone();
    url.locale = localeCookie;
    return NextResponse.redirect(url);
  }

  const themeCookie = req.cookies.get('theme')?.value || 'dark';

  if (themeCookie) {
    const res = NextResponse.next();
    res.headers.set('x-theme', themeCookie);
    return res;
  }

  return NextResponse.next();
}
