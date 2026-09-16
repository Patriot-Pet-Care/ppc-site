"use client";

import { motion } from "framer-motion";
import Icon from "@/components/Icon";

// Fixed (not Math.random) so server and client render the same markup —
// "random-looking" placement without a hydration mismatch. `left` is a
// calc() anchored to the content column's edge (±half of --wrap, 1240px)
// rather than a percentage of the full section width, so the prints sit
// right up against the grid/heading regardless of viewport width instead
// of drifting out into the far page gutters. Each span is centered on
// its `left` point via translateX(-50%).
//
// Each side bows inward toward the middle of the section and back out
// near the top/bottom (an arch, not a straight edge) — offsets and sizes
// are hand-varied per point so it doesn't read as a mirrored, uniform
// pattern.
const HALF_WRAP = 620;
const left = (offset: number) => `calc(50% - ${HALF_WRAP}px + ${offset}px)`;
const right = (offset: number) => `calc(50% + ${HALF_WRAP}px - ${offset}px)`;

const PRINTS = [
  // Left side
  { left: left(-10), top: "4%", size: 58, rotate: -10, delay: 0.05 },
  { left: left(16), top: "22%", size: 70, rotate: -22, delay: 0.4 },
  { left: left(40), top: "46%", size: 46, rotate: 6, delay: 0.65 },
  { left: left(22), top: "68%", size: 62, rotate: -14, delay: 0.25 },
  { left: left(-4), top: "90%", size: 54, rotate: 18, delay: 0.55 },
  // Right side
  { left: right(-6), top: "10%", size: 76, rotate: 14, delay: 0.15 },
  { left: right(32), top: "34%", size: 44, rotate: -8, delay: 0.5 },
  { left: right(48), top: "58%", size: 66, rotate: 20, delay: 0.35 },
  { left: right(4), top: "82%", size: 56, rotate: -16, delay: 0.6 },
];

// Big, low-opacity paw prints that pop into place once on load — a quiet
// texture for a tall, otherwise flat section, not a repeat of the hero's
// walking trail.
export default function PawScatter() {
  return (
    <div className="paw-scatter" aria-hidden="true">
      {PRINTS.map((p, i) => (
        <motion.span
          key={i}
          className="paw-scatter-print"
          style={{
            left: p.left,
            top: p.top,
            transform: `translateX(-50%) rotate(${p.rotate}deg)`,
          }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 0.14, scale: 1 }}
          transition={{
            delay: p.delay,
            duration: 0.5,
            type: "spring",
            stiffness: 140,
            damping: 14,
          }}
        >
          <Icon name="paw" width={p.size} height={p.size} />
        </motion.span>
      ))}
    </div>
  );
}
