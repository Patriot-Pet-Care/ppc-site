"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/Icon";
import { useCart } from "@/lib/cart-context";
import { VISIBLE_PRODUCTS, CATEGORY_LABEL } from "@/lib/catalog";

function money(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function SearchOverlay() {
  const { closeOverlay } = useCart();
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const hits = q
    ? VISIBLE_PRODUCTS.filter((p) =>
        `${p.name} ${p.sub} ${CATEGORY_LABEL[p.category]}`
          .toLowerCase()
          .includes(q),
      )
    : [];

  return (
    <>
      <div className="overlay" onClick={closeOverlay} />
      <div
        className="searchpanel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="searchTitle"
      >
        <div className="wrap">
          <h2 id="searchTitle" className="sr">
            Search the Marketplace
          </h2>
          <div className="row">
            <label className="sr" htmlFor="searchInput">
              Search products
            </label>
            <input
              id="searchInput"
              type="search"
              placeholder="Search the Marketplace…"
              autoComplete="off"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="icon-btn" onClick={closeOverlay}>
              <Icon name="x" width={20} height={20} />
              <span className="sr">Close search</span>
            </button>
          </div>
          <div className="sresults" aria-live="polite">
            {!q && (
              <p className="muted" style={{ padding: "14px 0" }}>
                Type to search the catalogue.
              </p>
            )}
            {q && hits.length === 0 && (
              <p className="muted" style={{ padding: "14px 0" }}>
                No products match &ldquo;{query}&rdquo;.
              </p>
            )}
            {hits.map((p) => (
              <a
                key={p.slug}
                className="sres"
                href={p.category === "apparel" ? "/merchandise" : "/pet-gear"}
                onClick={closeOverlay}
              >
                <span className="st">
                  <Image src={p.image} alt="" width={48} height={48} />
                </span>
                <span style={{ flex: 1 }}>
                  <span style={{ display: "block", fontWeight: 700, color: "var(--navy)" }}>
                    {p.name}
                  </span>
                  <span className="muted" style={{ fontSize: ".88rem" }}>
                    {p.sub} &middot; {CATEGORY_LABEL[p.category]}
                  </span>
                </span>
                <span style={{ fontFamily: "var(--display)", color: "var(--navy)" }}>
                  {money(p.price)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
