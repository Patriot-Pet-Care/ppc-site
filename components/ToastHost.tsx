"use client";

import { useCart } from "@/lib/cart-context";

export default function ToastHost() {
  const { toast } = useCart();
  if (!toast) return null;
  return <div className="toast">{toast}</div>;
}
