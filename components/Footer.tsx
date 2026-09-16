import Link from "next/link";
import Icon from "@/components/Icon";
import SocialIcons from "@/components/SocialIcons";

// Structure matches the client's reference build (confirmed 2026-09-16):
// brand block with icon badge, three link columns (Customer / Ecosystem /
// Shop), a social row, and a clean single-line copyright bar. Legal-page
// links point at "#" for now — those pages are still in review with
// counsel (see [[project-ppc-overview]]) — but render as normal links
// rather than a distracting "pending" treatment.
export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 6 }}>
              <span
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "0 0 auto",
                  boxShadow: "0 4px 14px rgba(0,0,0,.25)",
                }}
              >
                <Icon name="paw" width={30} height={30} style={{ color: "var(--navy-deep)" }} />
              </span>
              <div>
                <div className="bt" style={{ marginBottom: 0 }}>
                  PPC MARKETPLACE&trade;
                </div>
                <div className="bs" style={{ marginBottom: 0 }}>
                  For Love of Pets and Country
                </div>
              </div>
            </div>
            <p style={{ marginTop: 20, fontWeight: 500 }}>
              PPC Marketplace&trade;
              <br />
              shop.patriotspetcare.com
              <br />
              Operated by PPC Consulting, LLC
              <br />
              An affiliated company of Patriot&rsquo;s Pet Care, LLC
            </p>
            <div className="legalbox">
              PPC Marketplace&trade; is operated by{" "}
              <strong style={{ color: "#fff" }}>PPC Consulting, LLC</strong>,
              an affiliated company of Patriot&rsquo;s Pet Care, LLC.
            </div>
          </div>

          <div>
            <h4>Customer</h4>
            <ul>
              {[
                "Contact",
                "FAQs",
                "Shipping",
                "Returns",
                "Digital Product Policy",
                "Licensing",
                "Privacy",
                "Terms",
                "Accessibility",
              ].map((label) => (
                <li key={label}>
                  <a href="#" title={`${label} — page pending counsel approval`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Ecosystem</h4>
            <ul>
              <li>
                <a href="https://www.patriotspetcare.com">
                  Patriot&rsquo;s Pet Care
                </a>
              </li>
              <li>
                <Link href="/global-academy">PPC Global Academy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Shop</h4>
            <ul>
              <li>
                <Link href="/pet-parent-resources">Pet Parent Resources</Link>
              </li>
              <li>
                <Link href="/pet-parent-resources">
                  Premium Pet Care Library&trade;
                </Link>
              </li>
              <li>
                <Link href="/merchandise">Merchandise</Link>
              </li>
              <li>
                <Link href="/pet-gear">Pet Gear</Link>
              </li>
              <li>
                <Link href="/professional-resources">
                  Professional Resources
                </Link>
              </li>
              <li>
                <Link href="/consulting">Licensing &amp; Consulting</Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: 22,
          }}
        >
          <SocialIcons />
        </div>

        <div className="fbase" style={{ justifyContent: "flex-start" }}>
          <div>
            &copy; 2026 PPC Consulting, LLC. All rights reserved. PPC
            Marketplace&trade; and For Love of Pets and Country&trade; are
            trademarks used under license within the Patriot&rsquo;s Pet
            Care family of companies.
          </div>
        </div>
      </div>
    </footer>
  );
}
