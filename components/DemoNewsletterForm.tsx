"use client";

import { type FormEvent } from "react";
import { useCart } from "@/lib/cart-context";

// Matches the source markup's data-demo-form="newsletter" behavior:
// prototype only, no one is actually added to a marketing list.
export default function DemoNewsletterForm() {
  const { showToast } = useCart();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showToast("Prototype only — no one is added to a marketing list");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="sr" htmlFor="ppEmail">
        Email address
      </label>
      <input id="ppEmail" type="email" placeholder="you@example.com" required />
      <button className="btn btn-primary" type="submit">
        Join the list
      </button>
    </form>
  );
}
