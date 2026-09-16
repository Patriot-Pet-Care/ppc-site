"use client";

import { useState, type FormEvent } from "react";
import { useCart } from "@/lib/cart-context";

// Consent checkbox required + unchecked by default — see the Hold List
// note in PPC_Marketplace_Phase6_Wix_Build_Guide.docx: this is a real SMS
// /marketing-consent requirement, not a styling choice.
export default function EmailForm() {
  const { showToast } = useCart();
  const [consent, setConsent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showToast("You’re on the list — watch your inbox.");
    event.currentTarget.reset();
    setConsent(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="firstName">First name</label>
        <input id="firstName" name="firstName" type="text" placeholder="Kate" />
      </div>
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: ".88rem" }}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          style={{ marginTop: 3, width: 16, height: 16, flex: "0 0 auto" }}
        />
        <span className="consent" style={{ textAlign: "left" }}>
          Yes, sign me up for PPC Marketplace&trade; emails from PPC
          Consulting, LLC. I can unsubscribe at any time. See the{" "}
          <a href="#">Privacy Policy</a>.
        </span>
      </label>
      <button type="submit" className="btn btn-primary btn-block">
        Join the List
      </button>
      <p className="consent" style={{ textAlign: "left" }}>
        Signing up adds you to Marketplace email only. It does not sign you
        up for SMS, and it does not change anything about your
        Patriot&rsquo;s Pet Care operations account.
      </p>
    </form>
  );
}
