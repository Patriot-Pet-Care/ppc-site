export type NavItem = {
  label: string;
  href: string;
  /** false (default) renders as grayed-out, non-navigable text — the
   * route and page file still exist on disk, just not exposed via nav
   * until that page has had the same refinement pass as Home/Shop. */
  enabled?: boolean;
};

// Exact order ported from the shared header markup in every approved page
// prototype (PPC MARKETPLACE/7 _ HTML/*.html), with "Home" added back in
// per explicit request (2026-09-16) — reverses the earlier decision to
// omit it since the brand mark already links there.
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", enabled: true },
  { label: "Shop All", href: "/shop", enabled: true },
  { label: "Pet Parent Resources", href: "/pet-parent-resources" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Pet Gear", href: "/pet-gear" },
  { label: "Professional Resources", href: "/professional-resources" },
  { label: "Global Academy", href: "/global-academy" },
  { label: "Consulting", href: "/consulting" },
  { label: "About", href: "/about" },
];
