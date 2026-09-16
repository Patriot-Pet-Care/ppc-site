import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NAV_ITEMS } from "@/lib/nav";

// Single source of truth: a nav item marked `enabled: false` in
// lib/nav.ts is grayed out in the header AND genuinely unreachable by
// direct URL — not deleted, not just hidden from the menu.
const DISABLED_PATHS = new Set(
  NAV_ITEMS.filter((item) => !item.enabled).map((item) => item.href),
);

export function proxy(request: NextRequest) {
  if (DISABLED_PATHS.has(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  // Runs on real page requests only — skips Next's own internals so
  // static assets and image optimization aren't needlessly proxied.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
