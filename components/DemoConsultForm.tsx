"use client";

import { type FormEvent } from "react";
import { useCart } from "@/lib/cart-context";

// Matches the source markup's data-demo-form="consult" behavior: this is
// an enquiry form, not a checkout — Phase 13 requires executive pricing
// approval before any consulting offering can be sold directly online.
export default function DemoConsultForm() {
  const { showToast } = useCart();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showToast("Prototype only — enquiry not sent");
    event.currentTarget.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="f2">
        <div className="field">
          <label htmlFor="cName">Name</label>
          <input id="cName" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="cOrg">Organisation</label>
          <input id="cOrg" type="text" />
        </div>
      </div>
      <div className="f2">
        <div className="field">
          <label htmlFor="cEmail">Email</label>
          <input id="cEmail" type="email" required />
        </div>
        <div className="field">
          <label htmlFor="cType">Enquiry type</label>
          <select id="cType">
            <option>Business consulting</option>
            <option>Pet-industry consulting</option>
            <option>Workforce</option>
            <option>Training and performance</option>
            <option>Organisational development</option>
            <option>Licensing</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cMsg">What are you trying to solve?</label>
        <textarea id="cMsg" rows={5} />
        <span className="hint">
          A short outline is enough. No confidential detail is needed at
          this stage.
        </span>
      </div>
      <button className="btn btn-primary btn-block" type="submit">
        Send enquiry
      </button>
      <p className="hint" style={{ margin: 0 }}>
        Submitted to PPC Consulting, LLC.
      </p>
    </form>
  );
}
