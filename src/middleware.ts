import { type NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/blog/') {
    return NextResponse.redirect(new URL('/blog', request.url))
  }
}
