import type { CSSProperties } from "react";
import type { IconName } from "@/components/IconSprite";

export default function Icon({
  name,
  className,
  width = 24,
  height = 24,
  style,
}: {
  name: IconName;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={style}
      aria-hidden="true"
    >
      <use href={`#i-${name}`} />
    </svg>
  );
}
