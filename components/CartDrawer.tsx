"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import { useCart, type CartLine } from "@/lib/cart-context";

function money(n: number) {
  return `$${n.toFixed(2)}`;
}

// Editing a line opens the quick view via `onEditLine`, owned by Overlays
// (the parent that stays mounted regardless of the drawer's own open
// state) — this component itself unmounts the instant the cart closes,
// which would otherwise wipe out any "now editing" state kept here.
export default function CartDrawer({
  onEditLine,
}: {
  onEditLine: (line: CartLine) => void;
}) {
  const { cart, removeFromCart, cartTotal, closeOverlay, showToast } =
    useCart();

  function openEditor(line: CartLine) {
    onEditLine(line);
    closeOverlay();
  }

  return (
    <>
      <motion.div
        className="overlay"
        onClick={closeOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cartTitle"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <header>
          <div className="drawer-title">
            <span className="drawer-title-icon">
              <Icon name="cart" width={16} height={16} />
            </span>
            <h2 id="cartTitle">Your cart</h2>
          </div>
          <button className="icon-btn" onClick={closeOverlay} autoFocus>
            <Icon name="x" width={20} height={20} />
            <span className="sr">Close cart</span>
          </button>
        </header>
        <div className="items">
          {cart.length === 0 ? (
            <div className="empty">
              <span className="empty-icon">
                <Icon name="cart" width={28} height={28} />
              </span>
              <p>Your cart is empty.</p>
              <p>
                <a href="/shop" onClick={closeOverlay}>
                  Browse the Marketplace
                </a>
              </p>
            </div>
          ) : (
            cart.map((line) => (
              <div className="ci" key={line.id}>
                <button
                  type="button"
                  className="ci-open"
                  onClick={() => openEditor(line)}
                  aria-label={`Edit ${line.name}`}
                >
                  <div className="ct">
                    <Image src={line.image} alt="" width={64} height={64} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="cn">{line.name}</div>
                    {line.variant && (
                      <div className="muted" style={{ fontSize: ".82rem" }}>
                        {line.variant}
                      </div>
                    )}
                    <div className="cp">
                      <span>{money(line.price)}</span>
                      <span className="qty-pill">×{line.qty}</span>
                    </div>
                  </div>
                </button>
                <div className="ci-actions">
                  <button
                    type="button"
                    className="ci-action ci-action-edit"
                    onClick={() => openEditor(line)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="ci-action ci-action-remove"
                    onClick={() => removeFromCart(line.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <footer>
          <div className="totalrow">
            <span>Subtotal</span>
            <span>{money(cartTotal)}</span>
          </div>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              if (!cart.length) {
                showToast("Your cart is empty");
                return;
              }
              showToast(
                "Checkout is handled by Wix Stores — not simulated in this preview",
              );
            }}
          >
            Proceed to checkout
          </button>
          <p className="muted" style={{ fontSize: ".84rem", margin: "12px 0 0" }}>
            Sold and fulfilled by PPC Consulting, LLC. Shipping and taxes
            calculated at checkout.
          </p>
        </footer>
      </motion.aside>
    </>
  );
}
