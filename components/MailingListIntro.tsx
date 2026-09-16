import Icon from "@/components/Icon";

const ITEMS = [
  "Product announcements",
  "Pet-parent tips",
  "New resource releases",
  "Special offers",
];

// Shared copy for the mailing-list signup, used both in the full Section 9
// panel on the home page and inside the envelope's modal — one source of
// truth so the pitch never drifts between the two.
export default function MailingListIntro() {
  return (
    <div>
      <h2>Join the Marketplace mailing list</h2>
      <p>
        One email when there is something worth sending, and nothing in
        between.
      </p>
      <ul className="plain" style={{ display: "grid", gap: 10, marginTop: 18 }}>
        {ITEMS.map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: ".95rem" }}>
            <Icon name="check" width={16} height={16} style={{ color: "var(--gold)" }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
