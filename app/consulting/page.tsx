import Link from "next/link";
import Icon from "@/components/Icon";
import DemoConsultForm from "@/components/DemoConsultForm";

export const metadata = { title: "PPC Consulting" };

const EXPERTISE = [
  { title: "Business", body: "Structure, operations and commercial decisions." },
  { title: "Pet industry", body: "Sector-specific practice, standards and expectations." },
  { title: "Workforce", body: "Hiring, retention and the realities of staffing animal care." },
  { title: "Training and performance", body: "Building capability that survives staff turnover." },
  { title: "Organisational development", body: "Growing without losing the standard of care." },
];

const FIT = [
  { title: "Boarding and daycare facilities", body: "Operators managing volume, safety and staffing at the same time." },
  { title: "Grooming and training businesses", body: "Practices moving from solo work to a team." },
  { title: "Shelters and rescues", body: "Organisations balancing capacity against standard of care." },
  { title: "Multi-site operators", body: "Groups that need one standard applied consistently." },
  { title: "New entrants", body: "Owners opening a first facility who would rather not learn it the expensive way." },
  { title: "Industry organisations", body: "Bodies developing curriculum, standards or workforce programmes." },
];

export default function ConsultingPage() {
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Consulting
          </p>
          <h1>PPC Consulting</h1>
          <p className="lede">
            Advisory work for pet-care businesses, organisations and teams,
            drawn from operating a real facility rather than from a
            textbook.
          </p>
          <p style={{ marginTop: 22 }}>
            <a className="btn btn-primary" href="#consult-request">
              Request a consultation
            </a>
          </p>
        </div>
      </div>

      <div className="band band-white">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">Overview</p>
              <h2>Advice from people who run the operation</h2>
              <p>
                PPC Consulting, LLC advises pet-care businesses on the
                problems that only show up once a facility is actually
                running: staffing that does not hold, processes that work
                on paper but not at 6&nbsp;a.m., training that does not
                transfer, and growth that outpaces the systems underneath
                it.
              </p>
              <p>
                Engagements are scoped individually. There is no fixed
                package sold from this page, because the right answer
                depends on the size of the operation and what is already in
                place.
              </p>
            </div>
            <div className="artframe">
              <Icon name="brief" />
              <span>Consulting key art placeholder</span>
            </div>
          </div>
        </div>
      </div>

      <div className="band band-cream">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">Phase 13</p>
            <h2>Areas of expertise</h2>
            <hr className="rule center" />
          </div>
          <div className="grid g5">
            {EXPERTISE.map((item) => (
              <div className="panel" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="band band-white">
        <div className="wrap">
          <div className="sechead">
            <p className="eyebrow">Fit</p>
            <h2>Who PPC Consulting serves</h2>
            <hr className="rule" />
          </div>
          <div className="grid g3">
            {FIT.map((item) => (
              <div className="panel" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="band band-deep">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">Related</p>
            <h2>Beyond a consultation</h2>
            <hr className="rule center" />
          </div>
          <div className="grid g3">
            <Link className="tile" href="/professional-resources">
              <Icon name="doc" className="ti" width={46} height={46} />
              <h3>Business Resources</h3>
              <p>
                Documents, forms and operational material you can put to
                work immediately.
              </p>
              <span className="go">Professional Resource Library &rarr;</span>
            </Link>
            <Link className="tile" href="/global-academy">
              <Icon name="cap-grad" className="ti" width={46} height={46} />
              <h3>Education &amp; Training</h3>
              <p>
                Structured courses and certification through PPC Global
                Academy.
              </p>
              <span className="go">Visit the Academy &rarr;</span>
            </Link>
            <a className="tile" href="#consult-request">
              <Icon name="shield" className="ti" width={46} height={46} />
              <h3>Licensing</h3>
              <p>
                Organisational, professional and commercial licensing of PPC
                content, curriculum and systems.
              </p>
              <span className="go">Enquire &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div className="band band-navy" id="consult-request">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow on-navy">Request a consultation</p>
              <h2>Tell us what you are dealing with</h2>
              <p>
                Consulting engagements are not sold from a shopping cart.
                Send the outline below and PPC Consulting will respond with
                whether it is a fit and what an engagement would involve.
              </p>
              <div
                className="note spec"
                style={{
                  background: "rgba(255,255,255,.07)",
                  borderLeftColor: "var(--gold)",
                  color: "#D7DFEA",
                }}
              >
                <strong style={{ color: "var(--gold)" }}>
                  Why there is no buy button here
                </strong>
                <p style={{ color: "#D7DFEA" }}>
                  Phase&nbsp;13 requires executive pricing approval before
                  any consulting offering is sold directly online. Until a
                  specific offering and price are approved, an enquiry
                  pathway is the only compliant option.{" "}
                  <em>Recommendation:</em> keep it as an enquiry form even
                  after pricing is approved, since scoped advisory work
                  rarely survives a fixed online price.
                </p>
              </div>
            </div>
            <div className="panel">
              <h3 style={{ color: "var(--navy)" }}>Consultation enquiry</h3>
              <DemoConsultForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
