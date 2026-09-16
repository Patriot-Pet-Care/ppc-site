import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; About
          </p>
          <h1>About the PPC Marketplace&trade;</h1>
          <p className="lede">
            Where this shop came from, who runs it, and how it relates to
            the boarding and daycare facility you may already know.
          </p>
        </div>
      </div>

      <div className="band band-white">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">The legacy</p>
              <h2>It started with the animals</h2>
              <p>
                Patriot&rsquo;s Pet Care built its reputation the slow way:
                boarding, daycare, grooming, training, enrichment and
                transportation, done carefully, for families who were
                leaving behind something they loved.
              </p>
              <p>
                Over the years the same questions kept coming from
                customers who were not in Columbia, and from professionals
                in other facilities entirely. They wanted the checklists.
                They wanted the forms. They wanted the gear. They wanted to
                know how it was done.
              </p>
              <p>
                The Marketplace is the answer to those questions, in a form
                that can travel.
              </p>
            </div>
            <div className="artframe">
              <Icon name="paw" />
              <span>Brand photography placeholder</span>
            </div>
          </div>
        </div>
      </div>

      <div className="band band-cream">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">The mission</p>
            <h2>What the Marketplace is for</h2>
            <hr className="rule center" />
            <p className="lede center">
              To put trusted pet-care knowledge, products and professional
              material into the hands of people who cannot walk through our
              door.
            </p>
          </div>
          <div className="grid g3">
            <div className="panel">
              <Icon name="heart" width={42} height={42} style={{ color: "var(--red)" }} />
              <h3>For pet parents</h3>
              <p className="muted">
                Practical resources and dependable gear, chosen with the
                same judgement we apply to the animals in our care.
              </p>
            </div>
            <div className="panel">
              <Icon name="brief" width={42} height={42} style={{ color: "var(--red)" }} />
              <h3>For professionals</h3>
              <p className="muted">
                Documents, training and advisory work built from running a
                real facility, not from theory.
              </p>
            </div>
            <div className="panel">
              <Icon name="shield" width={42} height={42} style={{ color: "var(--red)" }} />
              <h3>For the standard</h3>
              <p className="muted">
                Raising how animals are cared for beyond the walls of any
                one building.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="band band-navy">
        <div className="wrap">
          <p className="eyebrow on-navy">Corporate relationship</p>
          <h2>Two companies, one family</h2>
          <div className="grid g2" style={{ marginTop: 28 }}>
            <div className="panel navy">
              <h3>Patriot&rsquo;s Pet Care, LLC</h3>
              <p>
                The Operations company. It provides hands-on services at
                its facility: boarding, daycare, grooming, training,
                enrichment and transportation, along with service
                memberships, reservations and operational gift cards.
              </p>
              <p>
                <strong style={{ color: "#fff" }}>
                  If your pet has to physically come to us, that is
                  Patriot&rsquo;s Pet Care.
                </strong>
              </p>
              <p>
                <a href="https://www.patriotspetcare.com" style={{ color: "var(--gold)" }}>
                  Visit patriotspetcare.com <Icon name="ext" width={14} height={14} />
                </a>
              </p>
            </div>
            <div className="panel navy">
              <h3>PPC Consulting, LLC</h3>
              <p>
                The Marketplace company. It sells and fulfils everything in
                this shop: merchandise, pet gear, digital resources,
                professional material, education and consulting, delivered
                nationally.
              </p>
              <p>
                <strong style={{ color: "#fff" }}>
                  If it can be sold and delivered without your pet entering
                  the facility, that is PPC Consulting.
                </strong>
              </p>
              <p>
                PPC Consulting, LLC is the merchant of record for every
                order placed here.
              </p>
            </div>
          </div>
          <div className="legalbox" style={{ marginTop: 28 }}>
            <strong
              style={{
                display: "block",
                fontFamily: "var(--display)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                fontSize: ".8rem",
                color: "var(--gold)",
                marginBottom: 8,
              }}
            >
              Required legal disclosure
            </strong>
            PPC Marketplace&trade; is operated by PPC Consulting, LLC, an
            affiliated company of Patriot&rsquo;s Pet Care, LLC. PPC
            Consulting, LLC and Patriot&rsquo;s Pet Care, LLC are separate
            legal entities.
          </div>
        </div>
      </div>

      <div className="band band-white">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">Where to go for what</p>
            <h2>You are in the right place if&hellip;</h2>
            <hr className="rule center" />
          </div>
          <div className="tablewrap">
            <table>
              <caption className="sr">
                Which company handles which need
              </caption>
              <thead>
                <tr>
                  <th scope="col">What you need</th>
                  <th scope="col">Where it happens</th>
                  <th scope="col">Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Boarding, daycare, grooming, training, enrichment or
                    transport
                  </td>
                  <td>At the facility in Columbia, South Carolina</td>
                  <td>Patriot&rsquo;s Pet Care, LLC</td>
                </tr>
                <tr>
                  <td>
                    Service memberships, reservations and operational gift
                    cards
                  </td>
                  <td>Operations website</td>
                  <td>Patriot&rsquo;s Pet Care, LLC</td>
                </tr>
                <tr>
                  <td>Merchandise, pet gear and digital resources</td>
                  <td>Here, shipped or downloaded nationally</td>
                  <td>PPC Consulting, LLC</td>
                </tr>
                <tr>
                  <td>Professional resources, licensing and consulting</td>
                  <td>Here</td>
                  <td>PPC Consulting, LLC</td>
                </tr>
                <tr>
                  <td>Courses and certification</td>
                  <td>PPC Global Academy platform</td>
                  <td>PPC Consulting, LLC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="note hold">
            <strong>One element deliberately left off this page</strong>
            <p>
              The Service-Disabled Veteran-Owned Business badge does not
              appear here, and it should not appear anywhere on the
              Marketplace until Dr.&nbsp;Hart confirms{" "}
              <strong>which entity actually holds the certification</strong>.
              Phase&nbsp;4 prohibits implying that PPC Consulting, LLC and
              Patriot&rsquo;s Pet Care, LLC are the same company, and an
              unattributed veteran-owned badge on a PPC Consulting
              storefront does exactly that. <em>Recommendation:</em> once
              confirmed, display it with the holding entity named beside
              it, for example &ldquo;Patriot&rsquo;s Pet Care, LLC is a
              Service-Disabled Veteran-Owned Business&rdquo;, rather than as
              a bare seal.
            </p>
          </div>
        </div>
      </div>

      <div className="band band-deep">
        <div className="wrap center">
          <h2>Questions about an order?</h2>
          <p className="lede center">
            Customer support for anything bought in the Marketplace is
            handled by PPC Consulting, LLC.
          </p>
          <p style={{ marginTop: 20 }}>
            <span
              className="btn btn-primary"
              style={{ opacity: 0.6, cursor: "default" }}
              title="Contact page: pending counsel approval"
            >
              Contact the Marketplace
            </span>
            <Link href="/shop" className="btn btn-outline" style={{ marginLeft: 10 }}>
              Start shopping
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
