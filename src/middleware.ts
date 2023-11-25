import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

let locales = ["en", "uk"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  let headers = Object.fromEntries(request.headers.entries());
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "en";

  try {
    return match(languages, locales, defaultLocale); // -> 'en-US'
  } catch (e) {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const firstLevel = request.nextUrl.pathname.split("/").filter(Boolean)[0];
  console.log({
    pathname: request.nextUrl.pathname,
    firstLevel,
  });
  const blacklist = ["outstatic", "api"];
  if (blacklist.includes(firstLevel)) {
    return;
  }

  // Redirect if there is no locale
  const locale = getLocale(request);
  // console.log({ locale });

  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
