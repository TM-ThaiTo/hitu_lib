// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

const locales = ["vi", "en"];
const defaultLocale = "vi";

const I18nMiddleware = createI18nMiddleware({ locales, defaultLocale });

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if URL is missing locale prefix
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return I18nMiddleware(request); // <- attach locale context
}

export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
