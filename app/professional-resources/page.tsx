import Link from "next/link";
import Icon from "@/components/Icon";
import NotifyButton from "@/components/NotifyButton";

export const metadata = { title: "Professional Resource Library" };

const PLACEHOLDERS: { name: string; sub: string; icon: Parameters<typeof Icon>[0]["name"] }[] = [
  { name: "Business Resource Pack", sub: "Business resources", icon: "brief" },
  { name: "Professional Forms Library", sub: "Professional forms", icon: "doc" },
  { name: "Training Resource Set", sub: "Training resources", icon: "book" },
  { name: "Shelter and Rescue Toolkit", sub: "Shelter/rescue resources", icon: "heart" },
  { name: "Licensed Materials Catalogue", sub: "Licensed materials", icon: "shield" },
];

const AUDIENCES = [
  { title: "Trainers", body: "Client-facing forms, programme structures and progress documentation." },
  { title: "Groomers", body: "Intake, consent, condition records and handling protocols." },
  { title: "Boarding and daycare professionals", body: "Operational documents drawn from an active facility." },
  { title: "Shelters", body: "Intake and placement material suited to volume operations." },
  { title: "Rescues", body: "Foster, adoption and volunteer documentation." },
  { title: "Pet businesses", body: "Business, workforce and organisational resources." },
];

export default function ProfessionalResourcesPage() {
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Professional Resources
          </p>
          <h1>Professional Resource Library&trade;</h1>
          <p className="lede">
            Business documents, operational forms and training material for
            the people who do this work for a living. Built from real
            facility practice, not theory.
          </p>
        </div>
      </div>

      <div className="band band-cream tight">
        <div className="wrap">
          <div className="note hold">
            <strong>Same inventory gap as the pet-parent library</strong>
            <p>
              No digital products exist in the catalogue, so every card on
              this page is a marked placeholder. <em>Recommendation:</em>{" "}
              approve the structure now, hold the navigation item until real
              material is published, and treat the professional library as
              the second wave after the pet-parent library, since
              professional buyers are a smaller audience and the licensing
              terms are still unresolved.
            </p>
          </div>
        </div>
      </div>

      <div className="band band-white">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">Who this is for</p>
            <h2>Built for working professionals</h2>
            <hr className="rule center" />
          </div>
          <div className="grid g3">
            {AUDIENCES.map((a) => (
              <div className="panel" key={a.title}>
                <h3>{a.title}</h3>
                <p className="muted">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="band band-cream">
        <div className="wrap">
          <div className="sechead">
            <p className="eyebrow">Phase 9 classification</p>
            <h2>The library</h2>
            <hr className="rule" />
          </div>
          <div className="legend" role="note">
            <span className="k">
              <span className="sw ph" /> Every card below is a placeholder.
              No digital products exist in the catalogue yet.
            </span>
          </div>
          <p className="resultcount">Showing 5 placeholder resources</p>
          <div className="grid g5">
            {PLACEHOLDERS.map((p) => (
              <article className="card" key={p.name}>
                <div className="thumb t-gold">
                  <span className="ribbon ph">Placeholder</span>
                  <Icon name={p.icon} style={{ color: "var(--navy)" }} />
                </div>
                <div className="body">
                  <p className="cat">{p.sub}</p>
                  <h3>{p.name}</h3>
                  <p className="price">
                    <span className="from">Not yet created</span>
                  </p>
                  <div className="foot">
                    <NotifyButton productName={p.name} />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="note spec">
            <strong>How this becomes real in Wix</strong>
            <p>
              Native Wix Stores Product Gallery filtered to the Professional
              Resource Library collections, with the same five categories:
              business resources, professional forms, training resources,
              shelter and rescue resources, and licensed materials.
            </p>
          </div>
        </div>
      </div>

      <div className="band band-navy">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow on-navy">Licensing</p>
              <h2>Using PPC material inside your organisation</h2>
              <p>
                Professional resources are licensed, not simply sold. A
                personal purchase covers one practitioner. Using PPC
                documents, curriculum or systems across a team, a facility
                or a client base requires an organisational or commercial
                licence from PPC Consulting, LLC.
              </p>
              <ul className="ticks-red">
                <li>
                  <Icon name="check" width={16} height={16} style={{ color: "var(--gold)", marginTop: 3 }} />
                  Organisational and professional use
                </li>
                <li>
                  <Icon name="check" width={16} height={16} style={{ color: "var(--gold)", marginTop: 3 }} />
                  Commercial use
                </li>
                <li>
                  <Icon name="check" width={16} height={16} style={{ color: "var(--gold)", marginTop: 3 }} />
                  Content and curriculum licensing
                </li>
                <li>
                  <Icon name="check" width={16} height={16} style={{ color: "var(--gold)", marginTop: 3 }} />
                  Proprietary PPC systems
                </li>
              </ul>
              <Link className="btn btn-onnavy" href="/consulting">
                Enquire about licensing
              </Link>
            </div>
            <div className="panel navy">
              <h3>Licence tiers pending</h3>
              <p>
                Tier names, scope and pricing have not been approved. Until
                they are, no licence tier may be named or priced on this
                page, and the Digital Product Licence Agreement cannot be
                published.
              </p>
              <p className="pending">Awaiting executive decision.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="band band-white">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">Next step</p>
            <h2>Take it further</h2>
            <hr className="rule center" />
          </div>
          <div className="grid g2">
            <Link className="tile" href="/global-academy">
              <Icon name="cap-grad" className="ti" width={46} height={46} />
              <h3>PPC Global Academy</h3>
              <p>
                Structured courses and certification for pet-care
                professionals, delivered on the Academy platform.
              </p>
              <span className="go">Visit the Academy &rarr;</span>
            </Link>
            <Link className="tile" href="/consulting">
              <Icon name="brief" className="ti" width={46} height={46} />
              <h3>PPC Consulting</h3>
              <p>
                Direct advisory work for facilities and organisations that
                need more than documents.
              </p>
              <span className="go">Request a consultation &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
