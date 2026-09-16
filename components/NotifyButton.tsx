"use client";

import { useCart } from "@/lib/cart-context";

export default function NotifyButton({ productName }: { productName: string }) {
  const { showToast } = useCart();
  return (
    <button
      className="btn btn-outline btn-sm btn-block"
      onClick={() =>
        showToast(`Placeholder — ${productName} does not exist in the catalogue yet`)
      }
    >
      Notify me
    </button>
  );
}
