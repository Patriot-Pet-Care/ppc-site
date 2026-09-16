"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/catalog";

export type CartLine = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  variant?: string;
  /** Structured option choices behind `variant`'s display string — kept
   * around so a cart line can be reopened in the quick view and edited,
   * not just removed. */
  selected?: Record<string, string>;
  qty: number;
};
type Overlay = "cart" | "search" | null;

type CartContextValue = {
  cart: CartLine[];
  addToCart: (
    product: Product,
    selected?: Record<string, string>,
    qty?: number,
  ) => void;
  updateCartLine: (
    id: string,
    product: Product,
    selected: Record<string, string>,
    qty: number,
  ) => void;
  removeFromCart: (id: string) => void;
  cartCount: number;
  cartTotal: number;
  overlay: Overlay;
  openCart: () => void;
  openSearch: () => void;
  closeOverlay: () => void;
  toast: string | null;
  showToast: (message: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

// In-memory only — resets on reload, same as the page prototype's own demo
// cart ("Wix Stores owns the real cart" once the Headless connection is
// wired up; this exists purely to make the storefront feel real for now).
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [toast, setToast] = useState<string | null>(null);

  function showToast(message: string) {
    setToast(message);
    setTimeout(() => setToast(null), 4200);
  }

  function variantLabel(selected?: Record<string, string>) {
    const entries = Object.entries(selected ?? {});
    if (!entries.length) return undefined;
    return entries.map(([name, value]) => `${name}: ${value}`).join(", ");
  }

  function addToCart(
    product: Product,
    selected?: Record<string, string>,
    qty = 1,
  ) {
    const variant = variantLabel(selected);
    const id = variant ? `${product.slug}::${variant}` : product.slug;
    setCart((prev) => {
      const existing = prev.find((line) => line.id === id);
      if (existing) {
        return prev.map((line) =>
          line.id === id ? { ...line, qty: line.qty + qty } : line,
        );
      }
      return [
        ...prev,
        {
          id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          variant,
          selected,
          qty,
        },
      ];
    });
    showToast(`${product.name}${variant ? ` (${variant})` : ""} added to cart`);
  }

  function updateCartLine(
    id: string,
    product: Product,
    selected: Record<string, string>,
    qty: number,
  ) {
    const variant = variantLabel(selected);
    const newId = variant ? `${product.slug}::${variant}` : product.slug;
    setCart((prev) => {
      const withoutOld = prev.filter((line) => line.id !== id);
      const dupIndex = withoutOld.findIndex((line) => line.id === newId);
      if (dupIndex >= 0) {
        return withoutOld.map((line, i) =>
          i === dupIndex ? { ...line, qty: line.qty + qty } : line,
        );
      }
      return [
        ...withoutOld,
        {
          id: newId,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          variant,
          selected,
          qty,
        },
      ];
    });
    showToast(`${product.name} updated`);
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((line) => line.id !== id));
  }

  const cartCount = cart.reduce((n, line) => n + line.qty, 0);
  const cartTotal = cart.reduce((n, line) => n + line.price * line.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartLine,
        removeFromCart,
        cartCount,
        cartTotal,
        overlay,
        openCart: () => setOverlay((o) => (o === "cart" ? null : "cart")),
        openSearch: () => setOverlay((o) => (o === "search" ? null : "search")),
        closeOverlay: () => setOverlay(null),
        toast,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
