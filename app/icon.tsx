import { ImageResponse } from "next/og";

// Reuses the exact same mark as components/BrandMark.tsx (navy circle,
// translucent red underlay, white paw silhouette, gold ring) as the
// site favicon, so the brand mark in the header/footer and the browser
// tab icon are the same asset, not two different logos.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width={32} height={32} viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="30" fill="#021F42" />
        <path d="M2 32a30 30 0 0 1 60 0z" fill="#B3202E" opacity={0.18} />
        <g fill="#FFFFFF" transform="translate(11,12) scale(0.66)">
          <ellipse cx="20" cy="20" rx="7" ry="9" />
          <ellipse cx="34" cy="15" rx="6.5" ry="9" />
          <ellipse cx="47" cy="21" rx="6.5" ry="8.5" />
          <ellipse cx="54" cy="35" rx="6" ry="7.5" />
          <path d="M33 30c8 0 15 6 17 13 2 6-2 11-8 11-4 0-6-2-9-2s-5 2-9 2c-6 0-10-5-8-11 2-7 9-13 17-13z" />
        </g>
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="#C8A44D"
          strokeWidth={2}
        />
      </svg>
    ),
    { ...size },
  );
}
