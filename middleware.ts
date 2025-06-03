import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Check if the path is for a static asset
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/images") ||
    url.pathname.startsWith("/fonts") ||
    url.pathname.includes(".") ||
    url.pathname.startsWith("/api")
  ) {
    return NextResponse.next()
  }

  // For all other paths, let Next.js handle it normally
  // Next.js will automatically show the not-found.tsx for non-existent routes
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
     * - api (API routes)
     */
    "/((?!_next/static|_next/image|favicon.ico|images|api).*)",
  ],
}
