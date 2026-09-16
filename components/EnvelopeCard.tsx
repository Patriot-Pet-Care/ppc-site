"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import MailingListModal from "@/components/MailingListModal";

// The hero motto card, reimagined as an actual envelope: closed by default
// showing the motto like an address label, tilts and wiggles on hover to
// invite the click, and opening it launches the real mailing-list modal
// (the same signup as the Section 9 panel) rather than a decorative-only
// animation.
export default function EnvelopeCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label="Open to join the mailing list"
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        style={{ perspective: 1200, cursor: "pointer" }}
        className="envelope"
      >
        <motion.div
          className="panel panel-accent-red envelope-body"
          animate={{ rotate: open ? 0 : -2.5 }}
          whileHover={
            !open
              ? {
                  rotate: [-2.5, -7, 4, -5, 3, -2.5],
                  y: -4,
                  boxShadow: "0 16px 32px rgba(2,31,66,.18)",
                }
              : undefined
          }
          transition={{ rotate: { duration: 0.5, ease: "easeInOut" }, default: { duration: 0.2 } }}
          style={{
            textAlign: "center",
            height: "auto",
            position: "relative",
            overflow: "hidden",
            padding: "30px 28px",
          }}
        >
          {/* Flap */}
          <motion.div
            aria-hidden="true"
            initial={false}
            animate={{ rotateX: open ? 165 : 0 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 56,
              background: "linear-gradient(135deg, var(--navy-soft), var(--navy))",
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
              zIndex: 3,
            }}
          />
          {/* Wax seal */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 30,
              left: "50%",
              transform: "translateX(-50%)",
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "var(--red)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,.25)",
              zIndex: 4,
            }}
          >
            <Icon name="paw" width={16} height={16} style={{ color: "#fff" }} />
          </span>

          <div style={{ paddingTop: 44 }}>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "1.4rem",
                lineHeight: 1.3,
                color: "var(--navy)",
                margin: 0,
              }}
            >
              For Love of Pets and Country
            </p>
            <p
              className="muted"
              style={{
                fontFamily: "var(--display)",
                fontSize: ".72rem",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                marginTop: 10,
                marginBottom: 0,
              }}
            >
              Click to open &middot; Join the list
            </p>
          </div>
        </motion.div>
      </div>

      <MailingListModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
