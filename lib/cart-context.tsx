"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/catalog";

const CART_KEY = "ppc-cart";

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

// Persisted to localStorage so a refresh doesn't lose the cart — still
// just a per-browser demo cart, not a real one ("Wix Stores owns the
// real cart" once the Headless connection is wired up).
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [toast, setToast] = useState<string | null>(null);
  // The restore effect below and this initial render both run before
  // localStorage has been read, so the very first commit's `cart` is
  // always the pre-restore `[]` — the persist effect must skip that one
  // write, or it clobbers whatever was actually saved before the restore
  // effect's setCart has had a chance to land.
  const skipNextPersist = useRef(true);

  // Restore the saved cart on mount. Has to be an effect: localStorage
  // doesn't exist during SSR, so reading it in the initial render (or a
  // lazy useState initializer) would mismatch between server and client
  // and break hydration.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      const parsed: unknown = saved ? JSON.parse(saved) : null;
      if (Array.isArray(parsed)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCart(parsed as CartLine[]);
      }
    } catch {
      // ignore — corrupted JSON, private browsing, or blocked storage
    }
  }, []);

  // Persist as the cart changes (skipping the initial pre-restore commit).
  useEffect(() => {
    if (skipNextPersist.current) {
      skipNextPersist.current = false;
      return;
    }
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

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
