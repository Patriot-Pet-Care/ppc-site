"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/Icon";
import { NAV_ITEMS } from "@/lib/nav";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, overlay, openCart, openSearch } = useCart();

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>Free U.S. shipping over $75</span>
          <span aria-hidden="true">&middot;</span>
          <span>Secure checkout</span>
          <span aria-hidden="true">&middot;</span>
          <span>Operated by PPC Consulting, LLC</span>
        </div>
      </div>

      <header className="site">
        <div className="wrap">
          <div className="headrow">
            <Link className="brand" href="/">
              <BrandMark className="mark" />
              <span>
                <span className="bt">
                  PPC MARKETPLACE<sup>&trade;</sup>
                </span>
                <br />
                <span className="bs">A Patriot&rsquo;s Pet Care Company</span>
              </span>
            </Link>
            <div className="headtools">
              <button
                className="icon-btn menu-toggle"
                aria-expanded={menuOpen}
                aria-controls="mainnav"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <Icon name="menu" width={22} height={22} />
                <span className="sr">Menu</span>
              </button>
              <button
                className="icon-btn"
                aria-expanded={overlay === "search"}
                aria-controls="searchPanel"
                onClick={openSearch}
              >
                <Icon name="search" width={22} height={22} />
                <span className="sr">Search products</span>
              </button>
              <button
                className="icon-btn"
                aria-expanded={overlay === "cart"}
                aria-controls="cartDrawer"
                onClick={openCart}
              >
                <Icon name="cart" width={22} height={22} />
                <span className="cart-count">{cartCount}</span>
                <span className="sr">Open cart</span>
              </button>
            </div>
          </div>
        </div>
        <div className="navwrap">
          <div className="wrap">
            <nav
              className={`main${menuOpen ? " open" : ""}`}
              id="mainnav"
              aria-label="Primary"
            >
              <ul>
                {NAV_ITEMS.map((item) =>
                  item.enabled ? (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={item.href}>
                      <span
                        className="nav-disabled"
                        aria-disabled="true"
                        title={`${item.label} — coming soon`}
                      >
                        {item.label}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
