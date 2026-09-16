"use client";

import Image from "next/image";
import Icon from "@/components/Icon";
import { useCart } from "@/lib/cart-context";

function money(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function CartDrawer() {
  const { cart, removeFromCart, cartTotal, closeOverlay, showToast } =
    useCart();

  return (
    <>
      <div className="overlay" onClick={closeOverlay} />
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cartTitle"
      >
        <header>
          <h2 id="cartTitle">Your cart</h2>
          <button className="icon-btn" onClick={closeOverlay} autoFocus>
            <Icon name="x" width={20} height={20} />
            <span className="sr">Close cart</span>
          </button>
        </header>
        <div className="items">
          {cart.length === 0 ? (
            <div className="empty">
              <p>Your cart is empty.</p>
              <p>
                <a href="/shop" onClick={closeOverlay}>
                  Browse the Marketplace
                </a>
              </p>
            </div>
          ) : (
            cart.map((line) => (
              <div className="ci" key={line.slug}>
                <div className="ct">
                  <Image src={line.image} alt="" width={64} height={64} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="cn">{line.name}</div>
                  <div className="cp">
                    {money(line.price)} &nbsp;&times;&nbsp; {line.qty}
                  </div>
                  <button
                    className="rm"
                    onClick={() => removeFromCart(line.slug)}
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
      </aside>
    </>
  );
}
