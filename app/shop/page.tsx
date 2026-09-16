import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ShopExplorer from "@/components/ShopExplorer";

export const metadata = { title: "Shop All" };

export default function ShopAllPage() {
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Shop All
          </p>
          <h1>Shop All</h1>
          <p className="lede">
            Every physical product in the PPC Marketplace&trade; catalog, in
            one place, with real category, price, color, size, material
            and finish filters &mdash; sold and fulfilled by PPC Consulting,
            LLC. Digital resources for pet parents and professionals are
            still in development; visit those libraries directly.
          </p>
        </div>
      </div>

      <div className="band band-cream tight">
        <div className="wrap">
          <div className="legend" role="note">
            <span className="k">
              <span className="sw real" /> Verified against the product
              register (Sept 1 Wix export)
            </span>
            <span className="k">
              <span className="sw oos" /> Data issue flagged for correction
            </span>
          </div>

          <Reveal y={16}>
            <ShopExplorer />
          </Reveal>
        </div>
      </div>

      <div className="band band-white">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">Browse by department</p>
            <h2>Beyond this catalog</h2>
            <hr className="rule center" />
          </div>
          <div className="grid g4">
            {[
              { icon: "book" as const, title: "Pet Parent Resource Library™", body: "Planners, guides, checklists, workbooks and digital downloads.", href: "/pet-parent-resources", cta: "Explore resources" },
              { icon: "brief" as const, title: "Professional Resource Library™", body: "Business resources, forms, training material and licensed content.", href: "/professional-resources", cta: "For professionals" },
              { icon: "cap-grad" as const, title: "PPC Global Academy", body: "Structured courses and certification, hosted on the Academy platform.", href: "/global-academy", cta: "Visit the Academy" },
              { icon: "brief" as const, title: "PPC Consulting", body: "Advisory work for pet-care businesses, organisations and teams.", href: "/consulting", cta: "Enquire" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} fill>
                <Link className="tile" href={item.href}>
                  <Icon name={item.icon} className="ti" width={46} height={46} />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span className="go">{item.cta} &rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="band band-deep">
        <div className="wrap grid g3">
          {[
            { icon: "truck" as const, title: "Shipping", body: "Processing and delivery windows are pending Dr. Hart’s selection from the options sheet already delivered. Wix supports one free-text estimate field only.", pending: true },
            { icon: "shield" as const, title: "Secure checkout", body: "Payments are processed by PPC Consulting, LLC. Policy acceptance is presented at checkout before any order is placed." },
            { icon: "doc" as const, title: "Returns and downloads", body: "Return window, restocking terms and digital download rules are all pending executive decision. No policy text should be published before then.", pending: true },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} fill>
              <div className="panel">
                <Icon name={item.icon} width={42} height={42} style={{ color: "var(--red)" }} />
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
                {item.pending && <p className="pending">Copy pending approval.</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
