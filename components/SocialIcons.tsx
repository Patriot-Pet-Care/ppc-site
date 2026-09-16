// No confirmed social profile URLs exist in the client's document archive,
// so these render as inert icon-only placeholders (no href) rather than
// fabricated links — swap in real profile URLs once the client provides them.
const GLYPHS: Record<string, string> = {
  instagram:
    "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM17.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  facebook:
    "M14 22v-8h2.6l.4-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8C16.6 4.7 15.6 4.6 14.5 4.6c-2.5 0-4.2 1.5-4.2 4.3V11H8v3h2.3v8h3.7z",
  x: "M4 4l16 16M20 4L4 20",
  linkedin:
    "M4 4h4v16H4zM6 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h4v2.2c.6-1.1 1.9-2.4 4-2.4 3 0 5 2 5 6.2V20h-4v-4.6c0-1.9-.7-3.1-2.3-3.1-1.3 0-2 .9-2.3 1.7-.1.3-.1.7-.1 1.1V20h-4z",
  youtube:
    "M22 12s0-3.2-.4-4.7c-.3-.9-1-1.6-1.9-1.9C18.2 5 12 5 12 5s-6.2 0-7.7.4c-.9.3-1.6 1-1.9 1.9C2 8.8 2 12 2 12s0 3.2.4 4.7c.3.9 1 1.6 1.9 1.9C5.8 19 12 19 12 19s6.2 0 7.7-.4c.9-.3 1.6-1 1.9-1.9.4-1.5.4-4.7.4-4.7zM10 15V9l5 3-5 3z",
  tiktok:
    "M14 3v10.5a3 3 0 1 1-2-2.83V9.5a5 5 0 1 0 4 4.9V8.2c.9.7 2 1.1 3 1.1V6.9c-1.9 0-3.4-1.3-3.6-3.1L14 3z",
};

const NAMES = Object.keys(GLYPHS) as (keyof typeof GLYPHS)[];

export default function SocialIcons() {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {NAMES.map((name) => (
        <span
          key={name}
          aria-hidden="true"
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(255,255,255,.08)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d={GLYPHS[name]} fill="none" stroke="#C6D2E1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      ))}
    </div>
  );
}
