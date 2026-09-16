import Icon from "@/components/Icon";

// Purely decorative — a faint paw-print pair tucked into a section's own
// empty background space. Reuses the same brand paw mark as the header
// logo and icon badges, just large and low-opacity, so it reads as
// texture rather than a fourth logo on the page.
export default function PawAccent({
  side = "left",
  tone = "navy",
}: {
  side?: "left" | "right";
  tone?: "navy" | "gold" | "red";
}) {
  const color =
    tone === "gold" ? "var(--gold)" : tone === "red" ? "var(--red)" : "var(--navy)";

  return (
    <div
      aria-hidden="true"
      className={`paw-accent paw-accent-${side}`}
      style={{ color }}
    >
      <Icon name="paw" width={150} height={150} />
      <Icon name="paw" width={46} height={46} className="paw-accent-trail" />
    </div>
  );
}
