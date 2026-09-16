"use client";

import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import { useCart } from "@/lib/cart-context";

export default function Overlays() {
  const { overlay } = useCart();
  if (overlay === "cart") return <CartDrawer />;
  if (overlay === "search") return <SearchOverlay />;
  return null;
}
