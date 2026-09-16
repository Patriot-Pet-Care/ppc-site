"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/Icon";
import MailingListIntro from "@/components/MailingListIntro";
import EmailForm from "@/components/EmailForm";

export default function MailingListModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
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
              className="modal panel navy panel-accent-red split"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mailingListModalTitle"
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 6 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <button
                type="button"
                className="icon-btn modal-close"
                onClick={onClose}
                style={{ borderColor: "rgba(255,255,255,.3)", color: "#fff" }}
              >
                <Icon name="x" width={18} height={18} />
                <span className="sr">Close</span>
              </button>
              <div id="mailingListModalTitle">
                <MailingListIntro />
              </div>
              <EmailForm />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
