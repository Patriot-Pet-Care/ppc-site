"use client";

import Image from "next/image";
import type { Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart-context";

function money(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="card">
      <div className="thumb">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1080px) 25vw, (min-width: 620px) 50vw, 100vw"
          style={{ objectFit: "cover" }}
        />
        {product.note && <span className="ribbon oos">Data issue</span>}
      </div>
      <div className="body">
        <p className="cat">{product.sub}</p>
        <h3>{product.name}</h3>
        <p className="muted" style={{ fontSize: ".9rem" }}>
          {product.description}
        </p>
        {product.note && (
          <p className="muted" style={{ fontSize: ".85rem" }}>
            {product.note}
          </p>
        )}
        <p className="price">{money(product.price)}</p>
        <div className="foot">
          <button
            className="btn btn-navy btn-sm btn-block"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
