"use client";

import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/Icon";
import { useCart } from "@/lib/cart-context";

export default function ToastHost() {
  const { toast } = useCart();

  return (
    <AnimatePresence>
      {toast && (
        // Plain (non-animated) centering wrapper — Framer writes its own
        // inline transform for the enter/exit motion, which would clobber
        // a CSS `transform: translateX(-50%)` used for centering (same
        // issue as the product quick-view modal).
        <div className="toast-center">
          <motion.div
            key={toast}
            className="toast"
            role="status"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="toast-icon">
              <Icon name="check" width={14} height={14} />
            </span>
            <span>{toast}</span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
