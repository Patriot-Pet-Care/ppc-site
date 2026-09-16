"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/Icon";
import { CATEGORY_LABEL, type Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart-context";

function money(n: number) {
  return `$${n.toFixed(2)}`;
}

export type EditingCartLine = {
  id: string;
  qty: number;
  selected?: Record<string, string>;
};

export default function ProductQuickView({
  product,
  open,
  onClose,
  sessionKey,
  editingLine,
}: {
  product: Product;
  open: boolean;
  onClose: () => void;
  /** Bumped by the caller each time the quick view is opened, so this
   * component remounts with fresh gallery/option state via `key` below
   * instead of resetting state inside an effect. */
  sessionKey: number;
  /** When set, the panel opens pre-filled with this cart line's quantity
   * and option choices, and "Add to cart" becomes "Update cart" — editing
   * the line in place instead of adding a new one. */
  editingLine?: EditingCartLine;
}) {
  return (
    <AnimatePresence>
      {open && (
        <QuickViewPanel
          key={sessionKey}
          product={product}
          onClose={onClose}
          editingLine={editingLine}
        />
      )}
    </AnimatePresence>
  );
}

function QuickViewPanel({
  product,
  onClose,
  editingLine,
}: {
  product: Product;
  onClose: () => void;
  editingLine?: EditingCartLine;
}) {
  const { addToCart, updateCartLine } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [selected, setSelected] = useState<Record<string, string>>(
    editingLine?.selected ?? {},
  );
  const [qty, setQty] = useState(editingLine?.qty ?? 1);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    thumbRefs.current[activeImage]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeImage]);

  const optionNames = Object.keys(product.options);
  // An option with only one possible value isn't a real choice — don't
  // force the shopper to click it before they can add to cart.
  const choosableOptionNames = optionNames.filter(
    (name) => product.options[name].length > 1,
  );
  const fixedOptionNames = optionNames.filter(
    (name) => product.options[name].length === 1,
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setActiveImage((i) => (i + 1) % product.images.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImage(
          (i) => (i - 1 + product.images.length) % product.images.length,
        );
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, product.images.length]);

  const missing = choosableOptionNames.filter((name) => !selected[name]);
  const canAdd = missing.length === 0;

  function handleAddToCart() {
    if (!canAdd) return;
    const fullSelected: Record<string, string> = {};
    optionNames.forEach((name) => {
      fullSelected[name] = selected[name] ?? product.options[name][0];
    });
    if (editingLine) {
      updateCartLine(editingLine.id, product, fullSelected, qty);
    } else {
      addToCart(product, fullSelected, qty);
    }
    onClose();
  }

  return (
    <>
      <motion.div
        className="overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <div className="modal-center">
      <motion.div
        className="modal panel split quickview"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quickViewTitle"
        initial={{ opacity: 0, scale: 0.94, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 6 }}
        transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
            <button
              type="button"
              className="icon-btn modal-close"
              onClick={onClose}
            >
              <Icon name="x" width={18} height={18} />
              <span className="sr">Close</span>
            </button>

            <div className="qv-gallery">
              <div className="qv-main">
                {product.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="qv-nav qv-nav-prev"
                      aria-label="Previous photo"
                      onClick={() =>
                        setActiveImage(
                          (i) =>
                            (i - 1 + product.images.length) %
                            product.images.length,
                        )
                      }
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="qv-nav qv-nav-next"
                      aria-label="Next photo"
                      onClick={() =>
                        setActiveImage((i) => (i + 1) % product.images.length)
                      }
                    >
                      ›
                    </button>
                  </>
                )}
                <Image
                  key={product.images[activeImage]}
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  sizes="(min-width: 900px) 45vw, 90vw"
                  style={{ objectFit: "cover" }}
                />
                {product.images.length > 1 && (
                  <span className="qv-count">
                    {activeImage + 1} / {product.images.length}
                  </span>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="qv-thumbs">
                  {product.images.map((src, i) => (
                    <button
                      type="button"
                      key={src}
                      ref={(el) => {
                        thumbRefs.current[i] = el;
                      }}
                      className={`qv-thumb${i === activeImage ? " active" : ""}`}
                      onClick={() => setActiveImage(i)}
                      aria-label={`Photo ${i + 1} of ${product.images.length}`}
                      aria-current={i === activeImage}
                    >
                      <Image src={src} alt="" fill sizes="80px" style={{ objectFit: "cover" }} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="qv-details">
              <p className="qv-breadcrumb">
                PPC Marketplace / {CATEGORY_LABEL[product.category]} / {product.sub}
              </p>
              <h3 id="quickViewTitle">{product.name}</h3>
              <p className="price">{money(product.price)}</p>
              <p className="qv-desc">{product.description}</p>

              {choosableOptionNames.length > 0 && (
                <p className="qv-option-count">
                  {choosableOptionNames
                    .map(
                      (name) =>
                        `${product.options[name].length} ${name.toLowerCase()}${
                          product.options[name].length === 1 ? "" : "s"
                        }`,
                    )
                    .join(" · ")}{" "}
                  to choose from
                </p>
              )}

              {fixedOptionNames.length > 0 && (
                <p className="qv-fixed-attrs">
                  {fixedOptionNames
                    .map((name) => `${name}: ${product.options[name][0]}`)
                    .join(" · ")}
                </p>
              )}

              {choosableOptionNames.map((name) => (
                <div className="qv-option" key={name}>
                  <p className="qv-option-label">
                    {name}
                    {selected[name] ? `: ${selected[name]}` : ""}
                  </p>
                  <div className="qv-option-values">
                    {product.options[name].map((value) => (
                      <button
                        type="button"
                        key={value}
                        className={`qv-chip${selected[name] === value ? " active" : ""}`}
                        onClick={() =>
                          setSelected((prev) => ({ ...prev, [name]: value }))
                        }
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="qv-option">
                <p className="qv-option-label">Quantity</p>
                <div className="qv-qty">
                  <button
                    type="button"
                    className="qv-qty-btn"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <span className="qv-qty-value">{qty}</span>
                  <button
                    type="button"
                    className="qv-qty-btn"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => Math.min(20, q + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-navy btn-block"
                style={{ marginTop: "18px" }}
                disabled={!canAdd}
                onClick={handleAddToCart}
              >
                {canAdd
                  ? editingLine
                    ? `Update cart — ${money(product.price * qty)}`
                    : `Add ${qty > 1 ? `${qty} to cart` : "to cart"} — ${money(product.price * qty)}`
                  : `Select ${missing.join(", ")}`}
              </button>

              <p className="qv-fulfillment">
                Sold and fulfilled by PPC Consulting, LLC. Shipping and taxes
                calculated at checkout.
              </p>
            </div>
      </motion.div>
      </div>
    </>
  );
}
