import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // If the request is for a non-existent page, redirect to the 404 page
  const url = request.nextUrl.clone()

  // Check if the path is for a static asset
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/images") ||
    url.pathname.startsWith("/fonts") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // For all other paths, let Next.js handle it
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    "/((?!_next/static|_next/image|favicon.ico|images).*)",
  ],
}
