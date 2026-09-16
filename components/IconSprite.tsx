// The 22-icon sprite, ported verbatim from the shared <symbol> defs in the
// client's approved page prototypes (PPC MARKETPLACE/7 _ HTML/*.html) —
// hand-drawn to match the brand, not a generic icon-font substitute.
// Render this once near the root; use <Icon name="paw" /> anywhere else.
export default function IconSprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
    >
      <symbol id="i-paw" viewBox="0 0 64 64">
        <ellipse cx="20" cy="20" rx="7" ry="9" fill="currentColor" />
        <ellipse cx="34" cy="15" rx="6.5" ry="9" fill="currentColor" />
        <ellipse cx="47" cy="21" rx="6.5" ry="8.5" fill="currentColor" />
        <ellipse cx="54" cy="35" rx="6" ry="7.5" fill="currentColor" />
        <path
          d="M33 30c8 0 15 6 17 13 2 6-2 11-8 11-4 0-6-2-9-2s-5 2-9 2c-6 0-10-5-8-11 2-7 9-13 17-13z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="i-shirt" viewBox="0 0 64 64">
        <path
          d="M23 8l9 6 9-6 14 7-5 12-6-2v29H20V25l-6 2L9 15z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-cap" viewBox="0 0 64 64">
        <path
          d="M8 40c0-14 11-24 24-24s24 10 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
        <path
          d="M4 40h56v6H4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-cup" viewBox="0 0 64 64">
        <path
          d="M18 10h28l-3 44H21z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
        <path d="M20 24h24" stroke="currentColor" strokeWidth="3.4" />
      </symbol>
      <symbol id="i-collar" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="30"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
        <circle
          cx="32"
          cy="52"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
        <path d="M22 14h20" stroke="currentColor" strokeWidth="3.4" />
      </symbol>
      <symbol id="i-leash" viewBox="0 0 64 64">
        <path
          d="M12 14c14 0 14 18 0 18M12 32c22 0 26 20 40 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <circle
          cx="52"
          cy="52"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
      </symbol>
      <symbol id="i-bag" viewBox="0 0 64 64">
        <path
          d="M14 20h36l4 34H10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
        <path
          d="M23 24V15a9 9 0 0118 0v9"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
      </symbol>
      <symbol id="i-sticker" viewBox="0 0 64 64">
        <path
          d="M10 10h44v30L40 54H10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
        <path
          d="M54 40H40v14"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-candle" viewBox="0 0 64 64">
        <rect
          x="20"
          y="24"
          width="24"
          height="32"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
        <path
          d="M32 24c0-6-6-6-6-11s6-5 6-9c0 4 6 5 6 9s-6 5-6 11z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-doc" viewBox="0 0 64 64">
        <path
          d="M16 6h22l12 12v40H16z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
        <path
          d="M38 6v12h12M24 32h18M24 42h18"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
      </symbol>
      <symbol id="i-book" viewBox="0 0 64 64">
        <path
          d="M10 12h18a6 6 0 016 6v34a6 6 0 00-6-6H10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
        <path
          d="M54 12H36a6 6 0 00-6 6v34a6 6 0 016-6h18z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-check" viewBox="0 0 64 64">
        <rect
          x="12"
          y="8"
          width="40"
          height="48"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
        <path
          d="M22 26l6 6 12-14M22 42h20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-cap-grad" viewBox="0 0 64 64">
        <path
          d="M32 12L4 24l28 12 28-12z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
        <path
          d="M16 31v13c0 4 7 8 16 8s16-4 16-8V31M58 26v14"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </symbol>
      <symbol id="i-brief" viewBox="0 0 64 64">
        <rect
          x="6"
          y="18"
          width="52"
          height="34"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
        <path
          d="M24 18v-6h16v6M6 32h52"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
      </symbol>
      <symbol id="i-shield" viewBox="0 0 64 64">
        <path
          d="M32 6l22 8v18c0 14-10 22-22 26-12-4-22-12-22-26V14z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
        <path
          d="M23 32l7 7 13-14"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-heart" viewBox="0 0 64 64">
        <path
          d="M32 54S8 40 8 24a12 12 0 0124-6 12 12 0 0124 6c0 16-24 30-24 30z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-truck" viewBox="0 0 64 64">
        <path
          d="M4 16h32v26H4zM36 24h12l8 9v9H36z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
        <circle
          cx="16"
          cy="47"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
        <circle
          cx="46"
          cy="47"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
        />
      </symbol>
      <symbol id="i-cart" viewBox="0 0 24 24">
        <path
          d="M2 3h3l2.6 12.4A2 2 0 0 0 9.6 17h8.9a2 2 0 0 0 2-1.6L22 7H6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="20.5" r="1.6" fill="currentColor" />
        <circle cx="18.5" cy="20.5" r="1.6" fill="currentColor" />
      </symbol>
      <symbol id="i-search" viewBox="0 0 24 24">
        <circle
          cx="11"
          cy="11"
          r="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <path
          d="M16.5 16.5L21 21"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </symbol>
      <symbol id="i-menu" viewBox="0 0 24 24">
        <path
          d="M3 6h18M3 12h18M3 18h18"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </symbol>
      <symbol id="i-x" viewBox="0 0 24 24">
        <path
          d="M5 5l14 14M19 5L5 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </symbol>
      <symbol id="i-ext" viewBox="0 0 24 24">
        <path
          d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
    </svg>
  );
}

export const ICON_NAMES = [
  "paw",
  "shirt",
  "cap",
  "cup",
  "collar",
  "leash",
  "bag",
  "sticker",
  "candle",
  "doc",
  "book",
  "check",
  "cap-grad",
  "brief",
  "shield",
  "heart",
  "truck",
  "cart",
  "search",
  "menu",
  "x",
  "ext",
] as const;

export type IconName = (typeof ICON_NAMES)[number];
