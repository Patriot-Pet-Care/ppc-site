import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/IconSprite";
import ProductCard from "@/components/ProductCard";
import EmailForm from "@/components/EmailForm";
import Reveal from "@/components/Reveal";
import HeroReveal from "@/components/HeroReveal";
import HeroTextReveal from "@/components/HeroTextReveal";
import EnvelopeCard from "@/components/EnvelopeCard";
import MailingListIntro from "@/components/MailingListIntro";
import { PRODUCTS, MERCHANDISE_TILES } from "@/lib/catalog";

const FEATURED_NUMBERS = [20, 11, 13, 26]; // Collar, Tee, Cap, Tumbler — Phase 6 build guide §3

export default function Home() {
  const featured = FEATURED_NUMBERS.map((n) => PRODUCTS.find((p) => p.n === n)!);

  return (
    <>
      {/* Section 1 — Hero */}
      <section
        className="band band-cream"
        style={{
          position: "relative",
          overflow: "visible",
          paddingTop: 18,
          paddingBottom: 0,
        }}
      >
        {/* Decorative depth — soft brand-colored glow, purely cosmetic */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-12%",
              left: "8%",
              width: 420,
              height: 420,
              borderRadius: "50%",
              background: "var(--gold)",
              opacity: 0.16,
              filter: "blur(90px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-6%",
              right: "10%",
              width: 380,
              height: 380,
              borderRadius: "50%",
              background: "var(--red)",
              opacity: 0.1,
              filter: "blur(100px)",
            }}
          />
        </div>

        <div
          className="wrap"
          style={{
            maxWidth: 1180,
            position: "relative",
            zIndex: 1,
            minHeight: "min(560px, calc(100vh - 160px))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <HeroTextReveal>
            <div className="split" style={{ alignItems: "center" }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: 10 }}>
                  PPC Marketplace&trade;
                </p>
                <h1 style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.2rem)" }}>
                  Trusted Finds for Pets &amp; Their People
                </h1>
                <p className="lede" style={{ marginTop: 10 }}>
                  Shop trusted resources, merchandise, pet-parent tools,
                  professional education, and more from the
                  Patriot&rsquo;s Pet Care family.
                </p>
                <div style={{ display: "flex", gap: 16, marginTop: 22, flexWrap: "wrap" }}>
                  <Link href="/shop" className="btn btn-primary">
                    Shop Now
                  </Link>
                  <Link href="/pet-parent-resources" className="btn btn-outline">
                    Explore Pet Parent Resources
                  </Link>
                </div>
              </div>

              <EnvelopeCard />
            </div>
          </HeroTextReveal>
          <div
            style={{
              marginTop: 12,
              marginBottom: -130,
              maxWidth: 980,
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
              zIndex: 5,
            }}
          >
            {/* Ground-contact shadows where the paws rest on the cards
                below — grounds the "hop" instead of leaving the dogs
                looking like they're floating over the trust strip. */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 6,
                height: 26,
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              {[18, 50, 82].map((leftPct) => (
                <span
                  key={leftPct}
                  style={{
                    position: "absolute",
                    left: `${leftPct}%`,
                    bottom: 0,
                    width: 130,
                    height: 26,
                    transform: "translateX(-50%)",
                    background: "rgba(2,31,66,.32)",
                    borderRadius: "50%",
                    filter: "blur(9px)",
                  }}
                />
              ))}
            </div>
            <HeroReveal>
              <Image
                src="/hero.png"
                alt="Happy dogs from the Patriot's Pet Care family"
                width={2000}
                height={744}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  position: "relative",
                  zIndex: 2,
                  filter: "drop-shadow(0 24px 28px rgba(2,31,66,.22))",
                }}
              />
            </HeroReveal>
          </div>
        </div>
      </section>

      {/* Compact trust strip, directly under the hero — the hero image's
          paw cutout overlaps down onto the top edge of the cards below
          (negative margin + z-index above). The cards' own internal
          padding (34px) keeps the overlap clear of any text. */}
      <section className="band band-white tight">
        <div className="wrap tstrip">
          <Reveal delay={0.05} fill>
            <div className="tcard" style={{ height: "100%" }}>
              <span className="icon-circle">
                <Icon name="heart" width={26} height={26} />
              </span>
              <h4>Happy Pet Parents</h4>
              <p>Resources and products designed for people who care deeply about pets.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15} fill>
            <div className="tcard cta" style={{ height: "100%" }}>
              <span className="icon-circle">
                <Icon name="check" width={26} height={26} />
              </span>
              <h4>Curated with Care</h4>
              <p>High-quality products and resources handpicked for pets and the people who love them.</p>
              <Link href="/shop" className="btn btn-onnavy btn-sm">
                Explore Best Sellers
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.25} fill>
            <div className="tcard" style={{ height: "100%" }}>
              <span className="icon-circle">
                <Icon name="shield" width={26} height={26} />
              </span>
              <h4>Trusted</h4>
              <p>Clear policies and support, built for a confident, transparent Marketplace experience.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — Shop by Category */}
      <section className="band band-cream">
        <div className="wrap sechead center">
          <p className="eyebrow center">Shop by Category</p>
          <h2>Six ways into the Marketplace</h2>
          <p className="lede center" style={{ margin: "0 auto" }}>
            Whichever brought you here today, the rest of the family is
            worth a look.
          </p>
        </div>
        <div className="wrap grid g3">
          {[
            { icon: "book" as const, title: "Pet Parent Resources", description: "Planners, checklists and guides for every stage of life together.", href: "/pet-parent-resources" },
            { icon: "shirt" as const, title: "Official PPC Merchandise", description: "Apparel, hats, drinkware and gifts that carry the motto.", href: "/merchandise" },
            { icon: "collar" as const, title: "Pet Gear", description: "Collars, leashes, pet apparel, travel gear and accessories.", href: "/pet-gear" },
            { icon: "brief" as const, title: "Professional Resources", description: "Tools built for trainers, groomers, shelters and rescues.", href: "/professional-resources" },
            { icon: "check" as const, title: "New Arrivals", description: "The newest additions to the Marketplace catalog.", href: "/shop" },
            { icon: "cap-grad" as const, title: "Best Sellers", description: "What pet parents and professionals reach for most.", href: "/shop" },
          ].map((tile, i) => (
            <Reveal key={tile.title} delay={i * 0.06} fill>
              <CategoryTile {...tile} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 3 — Featured Products */}
      <section className="band band-white">
        <div className="wrap sechead center">
          <p className="eyebrow center">Featured Products</p>
          <h2>Four from the catalog, not all thirty-eight</h2>
        </div>
        <div className="wrap grid g4">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} fill>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <div className="wrap center" style={{ marginTop: 34 }}>
          <Link href="/shop" className="btn btn-outline">
            Shop All Products
          </Link>
        </div>
      </section>

      {/* Section 4 — Digital Resource Feature */}
      <section className="band band-cream">
        <Reveal className="wrap split">
          <div className="panel navy panel-accent-red">
            <p className="eyebrow on-navy" style={{ marginBottom: 8 }}>
              Digital Download
            </p>
            <hr className="rule" style={{ margin: "0 0 18px" }} />
            <h3>New Puppy Parent Planner&trade;</h3>
            <p>
              The New Puppy Parent Planner&trade; is the Marketplace&rsquo;s
              flagship digital resource, written from the day-to-day
              experience of the Patriot&rsquo;s Pet Care team. Buy it once,
              download it, print what you need.
            </p>
            <div className="wordmark">
              <span className="badge">
                <Icon name="paw" width={14} height={14} style={{ color: "#fff" }} />
              </span>
              <span className="label">Patriot&rsquo;s Pet Care Family</span>
            </div>
          </div>
          <div>
            <p className="eyebrow">Flagship Resource</p>
            <h2>Bring a puppy home with a plan, not a panic</h2>
            <p>
              A twelve-week plan for the twelve weeks that matter most: vet
              schedule, feeding, crate and house training, socialization and
              a first-year record you actually keep.
            </p>
            <ul className="ticks-red">
              <li>
                <Icon name="check" width={16} height={16} style={{ color: "var(--red)", marginTop: 3 }} />
                Companion titles: Welcome Home Planner&trade;, Senior Dog
                Resource and the Grooming Guide.
              </li>
              <li>
                <Icon name="check" width={16} height={16} style={{ color: "var(--red)", marginTop: 3 }} />
                Delivered as a download link immediately after checkout.
              </li>
              <li>
                <Icon name="check" width={16} height={16} style={{ color: "var(--red)", marginTop: 3 }} />
                Licensed for personal household use. Professional licensing
                available separately.
              </li>
            </ul>
            <Link href="/pet-parent-resources" className="btn btn-primary">
              Explore Digital Resources
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Section 4b — PPC Premium Pet Care Library */}
      <section className="band band-white">
        <div className="wrap sechead center">
          <p className="eyebrow center">Premium Content</p>
          <h2>The PPC Premium Pet Care Library&trade;</h2>
          <p className="lede center" style={{ margin: "0 auto" }}>
            Paid articles, expert guides, Pet Parent Deep Dives,
            research-based resources, white papers and subscriber-only
            material, gathered into one library under PPC Consulting, LLC.
          </p>
        </div>
        <div className="wrap grid g3">
          <Reveal delay={0} fill>
            <LibraryTile icon="doc" title="Premium Articles & Guides" body="Paid pet-care writing that goes past what the free blog can cover." />
          </Reveal>
          <Reveal delay={0.08} fill>
            <LibraryTile icon="heart" title="Pet Parent Deep Dives" body="Long-form, research-based resources on one subject at a time." highlight />
          </Reveal>
          <Reveal delay={0.16} fill>
            <LibraryTile icon="shield" title="White Papers & Reports" body="Premium reports and reference material for serious pet parents." />
          </Reveal>
        </div>
        <Reveal className="wrap split" style={{ marginTop: 40 }}>
          <div>
            <p className="eyebrow">Worked Example</p>
            <h2>Senior Dog Wellness Planning Guide&trade;</h2>
            <p>
              A premium resource rather than a free blog post, because it is
              a working set of tools you keep using rather than something
              you read once.
            </p>
            <ul className="ticks-red">
              <li>
                <Icon name="check" width={16} height={16} style={{ color: "var(--red)", marginTop: 3 }} />
                The free article introduces the subject. The guide does the
                work.
              </li>
              <li>
                <Icon name="check" width={16} height={16} style={{ color: "var(--red)", marginTop: 3 }} />
                Delivered as a download after checkout, under a personal
                household licence.
              </li>
              <li>
                <Icon name="check" width={16} height={16} style={{ color: "var(--red)", marginTop: 3 }} />
                Sits alongside the Deep Dives and white papers in the
                Library.
              </li>
            </ul>
            <Link href="/pet-parent-resources" className="btn btn-primary">
              Browse the Library
            </Link>
          </div>
          <div className="panel navy panel-accent-red">
            <p className="eyebrow on-navy" style={{ marginBottom: 8 }}>
              Included in the Guide
            </p>
            <hr className="rule" style={{ margin: "0 0 18px" }} />
            <h3>Five working tools, not an article</h3>
            <p>
              Symptom tracker &middot; Veterinary appointment worksheet
              &middot; Medication organizer &middot; Quality-of-life
              assessment &middot; Senior-care planner
            </p>
            <div className="wordmark">
              <span className="badge">
                <Icon name="paw" width={14} height={14} style={{ color: "#fff" }} />
              </span>
              <span className="label">PPC Premium Pet Care Library&trade;</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Section 5 — Official PPC Merchandise */}
      <section className="band band-deep">
        <div className="wrap sechead center">
          <p className="eyebrow center">Official Merchandise</p>
          <h2>Wear the motto</h2>
          <p className="lede center" style={{ margin: "0 auto" }}>
            Official Patriot&rsquo;s Pet Care merchandise, sold and fulfilled
            by PPC Consulting, LLC. Shirts, sweatshirts, hats, drinkware,
            bags, candles and stickers, all shipped nationally without the
            pet setting foot in a facility.
          </p>
        </div>
        <div className="wrap bento">
          {MERCHANDISE_TILES.map((tile, i) => {
            const isFeature = tile.label === "Shirts";
            return isFeature && tile.image ? (
              <Reveal key={tile.label} delay={i * 0.06} className="bento-feature">
                <Image src={tile.image} alt="" fill sizes="60vw" style={{ position: "absolute" }} />
                <div className="bento-overlay">
                  <p className="kicker">{tile.count}</p>
                  <h3>{tile.label}</h3>
                  <p>{tile.note}</p>
                </div>
                <Link
                  href="/merchandise"
                  style={{ position: "absolute", inset: 0, zIndex: 3 }}
                >
                  <span className="sr">Shop {tile.label}</span>
                </Link>
              </Reveal>
            ) : (
              <Reveal key={tile.label} delay={i * 0.06} fill>
                <div className="tile" style={{ cursor: "default" }}>
                  <Icon name={tile.icon} className="ti" width={46} height={46} />
                  <h3>{tile.label}</h3>
                  <p style={{ color: "var(--red)", fontFamily: "var(--display)" }}>
                    {tile.count}
                  </p>
                  <p className="muted">{tile.note}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="wrap center" style={{ marginTop: 34 }}>
          <Link href="/merchandise" className="btn btn-outline">
            Shop PPC Gear
          </Link>
        </div>
      </section>

      {/* Section 6 — PPC Global Academy */}
      <section className="band band-navy">
        <Reveal className="wrap split">
          <div>
            <p className="eyebrow on-navy">Education</p>
            <h2>Keep learning, on the platform built for it</h2>
            <p>
              PPC Global Academy delivers structured professional education
              and certification for trainers, groomers, boarding and
              daycare staff, and rescue teams. The Marketplace carries the
              overview, course promotions, certification and
              professional-development information, and Academy resource
              bundles.
            </p>
            <p>
              The learning environment itself is not duplicated here.
              Enrollment, progress and certificates stay on the approved
              Academy platform, and commercial Academy revenue sits with
              PPC Consulting, LLC.
            </p>
            <Link href="/global-academy" className="btn btn-ghost-navy">
              Visit PPC Global Academy
            </Link>
          </div>
          <div className="panel navy panel-accent-red">
            <p className="eyebrow on-navy" style={{ marginBottom: 8 }}>
              PPC Global Academy
            </p>
            <hr className="rule" style={{ margin: "0 0 18px" }} />
            <h3>Professional education for the people who work with animals</h3>
            <div className="wordmark">
              <span className="badge">
                <Icon name="paw" width={14} height={14} style={{ color: "#fff" }} />
              </span>
              <span className="label">Hosted on the PPCGA Platform</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Section 7 — Professional Resources */}
      <section className="band band-cream">
        <Reveal className="wrap split">
          <div>
            <p className="eyebrow">For the Trade</p>
            <h2>PPC Marketplace serves professionals too</h2>
            <p>
              Alongside pet parents, the Marketplace supplies the people who
              care for animals for a living, with resources, gear and
              licensing written for commercial and organizational use rather
              than a single household.
            </p>
            <div className="chips" style={{ margin: "18px 0" }}>
              {["Pet Professionals", "Trainers", "Groomers", "Shelters", "Rescues", "Organizations"].map(
                (chip) => (
                  <span key={chip} className="chip" style={{ cursor: "default" }}>
                    {chip}
                  </span>
                ),
              )}
            </div>
            <Link href="/professional-resources" className="btn btn-primary">
              Explore Professional Resources
            </Link>
          </div>
          <div className="panel">
            <h3>What the professional catalog covers</h3>
            <ul className="ticks-red" style={{ marginTop: 16 }}>
              <li>
                <Icon name="brief" width={20} height={20} style={{ color: "var(--navy)", marginTop: 1 }} />
                Trainer, groomer, boarding and daycare, and shelter and
                rescue resources
              </li>
              <li>
                <Icon name="doc" width={20} height={20} style={{ color: "var(--navy)", marginTop: 1 }} />
                Business templates, professional forms and SOP packages
              </li>
              <li>
                <Icon name="shield" width={20} height={20} style={{ color: "var(--navy)", marginTop: 1 }} />
                Licensed professional materials, with organizational,
                professional and commercial-use licences
              </li>
              <li>
                <Icon name="heart" width={20} height={20} style={{ color: "var(--navy)", marginTop: 1 }} />
                A direct line to PPC Consulting for larger engagements
              </li>
            </ul>
            <Link href="/professional-resources" className="btn btn-outline btn-sm" style={{ marginTop: 8 }}>
              See the full library
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Section 8 — Brand Trust */}
      <section className="band band-deep">
        <div className="wrap sechead center">
          <p className="eyebrow center">Why Buy Here</p>
          <h2>The Patriot&rsquo;s Pet Care family behind every order</h2>
        </div>
        <div className="wrap grid g3">
          {[
            { icon: "paw" as const, title: "Patriot's Pet Care Legacy", body: "The Marketplace grows out of a working pet-care operation, not a catalog. Products are chosen by people who use them daily." },
            { icon: "truck" as const, title: "Ships Nationwide", body: "Every order ships nationally, no facility visit required — merchandise and resources reach pet parents and professionals anywhere." },
            { icon: "check" as const, title: "Secure Checkout", body: "Payments are processed over an encrypted connection. Card details are never stored on the Marketplace." },
            { icon: "shield" as const, title: "Customer Support", body: "A real support address staffed by the Marketplace team, separate from Operations booking and facility enquiries." },
            { icon: "doc" as const, title: "Licensing Protections", body: "Every digital product ships with a written licence setting out exactly what personal and professional use is permitted." },
            { icon: "book" as const, title: "Clear Return & Download Policies", body: "Return windows for physical goods and download terms for digital products are stated in plain language before you buy." },
          ].map((tile, i) => (
            <Reveal key={tile.title} delay={(i % 3) * 0.08} fill>
              <TrustTile {...tile} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 8b — Where to go for what */}
      <section className="band band-white tight">
        <Reveal className="wrap split" y={16}>
          <div>
            <p className="eyebrow">Two Companies, One Family</p>
            <h2>Where to go for what</h2>
            <p className="lede">
              If the pet has to come to us it is Operations; if it can be
              sold or delivered nationally it is the Marketplace.
            </p>
          </div>
          <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
            {[
              {
                icon: "paw" as const,
                desc: "Boarding, daycare, grooming, training, bookings",
                title: "Patriot’s Pet Care, LLC — patriotspetcare.com",
                href: "https://www.patriotspetcare.com",
                external: true,
              },
              {
                icon: "bag" as const,
                desc: "Merchandise, resources, licensing, consulting",
                title: "PPC Consulting, LLC — shop.patriotspetcare.com",
                href: "/consulting",
                linkLabel: "Enquire About Consulting",
              },
              {
                icon: "cap-grad" as const,
                desc: "Professional courses and certification",
                title: "PPC Global Academy",
                href: "/global-academy",
                linkLabel: "Visit PPC Global Academy",
              },
            ].map((row, i) => (
              <div
                key={row.title}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "22px 26px",
                  borderBottom: i < 2 ? "1px solid var(--line)" : "none",
                }}
              >
                <span className="icon-circle" style={{ width: 44, height: 44 }}>
                  <Icon name={row.icon} width={20} height={20} />
                </span>
                <div>
                  <p className="muted" style={{ margin: 0, fontSize: ".88rem" }}>
                    {row.desc}
                  </p>
                  {row.external ? (
                    <a href={row.href} style={{ fontWeight: 700, color: "var(--navy)" }}>
                      {row.title}
                    </a>
                  ) : (
                    <>
                      <p style={{ fontWeight: 700, color: "var(--navy)", margin: "2px 0 0" }}>
                        {row.title}
                      </p>
                      <Link href={row.href} style={{ color: "var(--red)", fontSize: ".9rem" }}>
                        {row.linkLabel}
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Section 9 — Email Capture */}
      <section className="band band-cream">
        <div className="wrap">
          <Reveal className="panel navy split" style={{ padding: 44 }}>
            <MailingListIntro />
            <EmailForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CategoryTile({
  icon,
  title,
  description,
  href,
}: {
  icon: IconName;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="tile">
      <Icon name={icon} className="ti" width={46} height={46} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="go">Explore &rarr;</span>
    </Link>
  );
}

function LibraryTile({
  icon,
  title,
  body,
  highlight,
}: {
  icon: IconName;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div className={highlight ? "panel navy" : "panel"}>
      <Icon
        name={icon}
        width={42}
        height={42}
        style={{ color: highlight ? "#fff" : "var(--red)" }}
      />
      <h3 style={{ marginTop: 14 }}>{title}</h3>
      <p className="muted" style={highlight ? { color: "#D7DFEA" } : undefined}>
        {body}
      </p>
    </div>
  );
}

function TrustTile({
  icon,
  title,
  body,
}: {
  icon: IconName;
  title: string;
  body: string;
}) {
  return (
    <div className="panel">
      <Icon name={icon} width={40} height={40} style={{ color: "var(--navy)" }} />
      <h3 style={{ marginTop: 14 }}>{title}</h3>
      <p className="muted">{body}</p>
    </div>
  );
}
