export type NavItem = {
  label: string;
  href: string;
};

// Exact order ported from the shared header markup in every approved page
// prototype (PPC MARKETPLACE/7 _ HTML/*.html).
// "Home" is deliberately omitted — the brand mark already links there,
// and a duplicate "Home" tab is redundant per the client's own reference
// build (confirmed 2026-09-16).
export const NAV_ITEMS: NavItem[] = [
  { label: "Shop All", href: "/shop" },
  { label: "Pet Parent Resources", href: "/pet-parent-resources" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Pet Gear", href: "/pet-gear" },
  { label: "Professional Resources", href: "/professional-resources" },
  { label: "Global Academy", href: "/global-academy" },
  { label: "Consulting", href: "/consulting" },
  { label: "About", href: "/about" },
];
