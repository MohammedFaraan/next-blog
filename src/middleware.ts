import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/profile", "/post/create", "/post/edit", "/post/"];

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const session = getSessionCookie(request);

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathName.startsWith(route)
  );

  if (isProtectedRoute && !session) {
    // Redirect the user to /auth page
    // Because user is not logged in
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  // If user is already logged in and trying to access login page
  // Then redirect the user to home page
  if (pathName === "/auth" && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/post/create", "/post/edit/:path*", "/auth"],
};