import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pid = request.cookies.get("hpc_pid")?.value;
  const { pathname } = request.nextUrl;

  if (!pid && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pid && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
