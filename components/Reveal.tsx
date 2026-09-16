"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

// Subtle, one-time scroll reveal — fades and rises into place the first
// time it enters the viewport, then stays put. Used to give sections and
// grid items a bit of life without anything flashy or looping.
export default function Reveal({
  children,
  delay = 0,
  className,
  y = 22,
  fill = false,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  /** Set true inside a stretch-aligned grid (e.g. a row of equal-height
   * cards) so this wrapper doesn't collapse to its content's height. */
  fill?: boolean;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={fill ? { height: "100%", ...style } : style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
