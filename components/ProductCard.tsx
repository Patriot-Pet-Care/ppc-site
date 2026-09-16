"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/Icon";
import type { Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart-context";
import ProductQuickView from "@/components/ProductQuickView";

function money(n: number) {
  return `$${n.toFixed(2)}`;
}

const BURST_DOTS = 6;
const BURST_DURATION_MS = 550;

// Deliberately minimal: photo, name, price. Everything else (full photo
// set, description, variant selection, quantity) lives in the quick-view
// modal — except the add-to-cart shortcut below, which skips all of that
// and adds the product with its first listed option values (the same
// default a shopper would land on by opening the modal and not touching
// anything), so it's a genuinely faster path, not a detour to the modal.
export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quickView, setQuickView] = useState(false);
  const [session, setSession] = useState(0);
  const [burstId, setBurstId] = useState<number | null>(null);
  const burstTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const optionNames = Object.keys(product.options);

  useEffect(() => {
    return () => {
      if (burstTimeout.current) clearTimeout(burstTimeout.current);
    };
  }, []);

  function openQuickView() {
    setSession((s) => s + 1);
    setQuickView(true);
  }

  function handleCartShortcut() {
    const selected: Record<string, string> = {};
    optionNames.forEach((name) => {
      selected[name] = product.options[name][0];
    });
    addToCart(product, selected);

    if (burstTimeout.current) clearTimeout(burstTimeout.current);
    const id = Date.now();
    setBurstId(id);
    burstTimeout.current = setTimeout(() => setBurstId(null), BURST_DURATION_MS);
  }

  return (
    <>
      <article className={`card ${product.tone}`}>
        <button
          type="button"
          className="card-open"
          onClick={openQuickView}
          aria-label={`View ${product.name}`}
        >
          <div className="thumb">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1080px) 25vw, (min-width: 620px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
            <span className={`card-icon-badge ${product.tone}`}>
              <Icon name={product.icon} width={18} height={18} />
            </span>
            {product.images.length > 1 && (
              <span className="thumb-count">1/{product.images.length}</span>
            )}
          </div>
          <div className="card-name">
            <h3>{product.name}</h3>
          </div>
        </button>
        <div className="product-footer">
          <p className="price">{money(product.price)}</p>
          <button
            type="button"
            className={`cart-shortcut${burstId ? " pulsing" : ""}`}
            onClick={handleCartShortcut}
            aria-label={`Add ${product.name} to cart`}
          >
            <motion.span
              key={burstId ?? "idle"}
              className="cart-shortcut-icon"
              initial={{ scale: 1 }}
              animate={burstId ? { scale: [1, 1.45, 0.85, 1.1, 1] } : { scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Icon name="cart" width={16} height={16} />
            </motion.span>
            <AnimatePresence>
              {burstId !== null && (
                <span className="cart-burst" key={burstId}>
                  {Array.from({ length: BURST_DOTS }).map((_, i) => {
                    const angle = (i / BURST_DOTS) * 2 * Math.PI;
                    return (
                      <motion.span
                        key={i}
                        className="cart-burst-dot"
                        initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        animate={{
                          opacity: 0,
                          scale: 0.3,
                          x: Math.cos(angle) * 22,
                          y: Math.sin(angle) * 22,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: BURST_DURATION_MS / 1000, ease: "easeOut" }}
                      />
                    );
                  })}
                </span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </article>
      <ProductQuickView
        product={product}
        open={quickView}
        sessionKey={session}
        onClose={() => setQuickView(false)}
      />
    </>
  );
}
