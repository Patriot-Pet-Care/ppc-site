"use client";

import Icon from "@/components/Icon";
import { useCart } from "@/lib/cart-context";

// The Academy's public URL is explicitly unconfirmed by the client (Phase
// 12 requires it in writing before this goes live) — this button is
// deliberately inert rather than linking anywhere, real or placeholder.
export default function AcademyLinkButton({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const { showToast } = useCart();
  return (
    <button
      type="button"
      className={className}
      onClick={() => showToast("Academy URL not yet approved — link deliberately inert")}
    >
      {children} <Icon name="ext" width={16} height={16} />
    </button>
  );
}
