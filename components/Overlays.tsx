"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import ProductQuickView from "@/components/ProductQuickView";
import { useCart, type CartLine } from "@/lib/cart-context";
import { getProduct } from "@/lib/catalog";

export default function Overlays() {
  const { overlay } = useCart();
  const [editingLine, setEditingLine] = useState<CartLine | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [session, setSession] = useState(0);
  const editingProduct = editingLine ? getProduct(editingLine.slug) : undefined;

  function openEditor(line: CartLine) {
    setSession((s) => s + 1);
    setEditingLine(line);
    setEditorOpen(true);
  }

  return (
    <>
      <AnimatePresence>
        {overlay === "cart" && (
          <CartDrawer key="cart-drawer" onEditLine={openEditor} />
        )}
      </AnimatePresence>
      {overlay === "search" && <SearchOverlay />}
      {editingProduct && editingLine && (
        <ProductQuickView
          product={editingProduct}
          open={editorOpen}
          sessionKey={session}
          editingLine={{
            id: editingLine.id,
            qty: editingLine.qty,
            selected: editingLine.selected,
          }}
          onClose={() => setEditorOpen(false)}
        />
      )}
    </>
  );
}
