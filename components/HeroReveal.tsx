"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// One-time entrance on page load (not scroll-triggered — this sits above
// the fold). A spring with overshoot reads as the dogs "hopping" up into
// place rather than a flat fade. Deliberately settles to a fixed resting
// position (no idle loop) — the image's paw cutout is composited to touch
// the cards below, and a persistent bob would fight that alignment.
export default function HeroReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90, scale: 0.9, rotate: -1.5 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 170,
        damping: 14,
        mass: 0.9,
        delay: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
