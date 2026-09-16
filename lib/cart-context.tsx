"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/catalog";

type CartLine = { slug: string; name: string; price: number; image: string; qty: number };
type Overlay = "cart" | "search" | null;

type CartContextValue = {
  cart: CartLine[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
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
    setTimeout(() => setToast(null), 2600);
  }

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((line) => line.slug === product.slug);
      if (existing) {
        return prev.map((line) =>
          line.slug === product.slug ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          qty: 1,
        },
      ];
    });
    showToast(`${product.name} added to cart`);
  }

  function removeFromCart(slug: string) {
    setCart((prev) => prev.filter((line) => line.slug !== slug));
  }

  const cartCount = cart.reduce((n, line) => n + line.qty, 0);
  const cartTotal = cart.reduce((n, line) => n + line.price * line.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
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
