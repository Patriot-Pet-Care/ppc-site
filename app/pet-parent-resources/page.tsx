import Link from "next/link";
import Icon from "@/components/Icon";
import PlaceholderResourceCard from "@/components/PlaceholderResourceCard";
import DemoNewsletterForm from "@/components/DemoNewsletterForm";

export const metadata = { title: "Pet Parent Resource Library" };

const CATEGORY_TILES = [
  { icon: "paw" as const, title: "New Puppy", body: "The first weeks, planned out properly." },
  { icon: "heart" as const, title: "Welcome Home", body: "Settling an adopted or rehomed animal." },
  { icon: "shield" as const, title: "Senior Dogs", body: "Comfort, mobility and routine." },
  { icon: "check" as const, title: "Grooming & Coat Care", body: "Between-appointment upkeep." },
  { icon: "book" as const, title: "Training Support", body: "Reinforcing what your trainer started." },
  { icon: "shield" as const, title: "Safety & Wellness", body: "Everyday risks and how to plan for them." },
  { icon: "check" as const, title: "Checklists & Planners", body: "Printable, reusable, straightforward." },
];

const PLACEHOLDER_RESOURCES: {
  name: string;
  sub: string;
  icon: "paw" | "heart" | "shield" | "check" | "book";
  tone: "t-navy" | "t-gold" | "t-red";
}[] = [
  { name: "New Puppy Parent Planner™", sub: "New Puppy", icon: "paw", tone: "t-navy" },
  { name: "Welcome Home Planner™", sub: "Welcome Home", icon: "heart", tone: "t-red" },
  { name: "Senior Dog Wellness Planning Guide™", sub: "Senior Dogs", icon: "shield", tone: "t-gold" },
  { name: "Grooming and Coat Care Guide", sub: "Grooming & Coat Care", icon: "check", tone: "t-navy" },
  { name: "Training Support Workbook", sub: "Training Support", icon: "book", tone: "t-red" },
  { name: "Safety and Wellness Essentials", sub: "Safety & Wellness", icon: "shield", tone: "t-gold" },
  { name: "Pet Parent Checklist Set", sub: "Checklists & Planners", icon: "check", tone: "t-navy" },
];

export default function PetParentResourcesPage() {
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Pet Parent Resources
          </p>
          <h1>Pet Parent Resource Library&trade;</h1>
          <p className="lede">
            Planners, guides, checklists and workbooks written by the people
            who care for animals every day. Delivered as instant digital
            downloads, so you can start using them the moment you need them.
          </p>
        </div>
      </div>

      <div className="band band-cream tight">
        <div className="wrap">
          <div className="note hold">
            <strong>Read this before approving the page &mdash; recommendation included</strong>
            <p>
              The Sept&nbsp;1 catalogue export contains{" "}
              <strong>38 physical products and zero digital products</strong>.
              Every product card on this page is therefore a marked
              placeholder showing the intended shape of the page, not a real
              item. This affects three things at once: this landing page,
              the Pet Parent Resources navigation item, and Section&nbsp;4 of
              the approved home page, which features a flagship digital
              product that does not exist.
            </p>
            <p>
              <em>Recommendation:</em> build and approve this page now so the
              structure is settled, but keep it hidden from the live
              navigation until at least one real digital product is
              published. Launching a nav item that leads to an empty library
              is the single most visible way for the Marketplace to look
              unfinished. A first product would ideally be one of the four
              the Action Plan already names: New Puppy Parent Planner&trade;,
              Welcome Home Planner&trade;, Senior Dog Resource, or Grooming
              Guide.
            </p>
          </div>
        </div>
      </div>

      <div className="band band-white">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">Phase 5 categories</p>
            <h2>Find what you need right now</h2>
            <hr className="rule center" />
            <p className="lede center">
              Seven collections covering the moments pet parents most often
              ask us about.
            </p>
          </div>
          <div className="grid g4">
            {CATEGORY_TILES.map((tile) => (
              <a key={tile.title} className="tile" href="#library">
                <Icon name={tile.icon} className="ti" width={46} height={46} />
                <h3>{tile.title}</h3>
                <p>{tile.body}</p>
                <span className="go">Browse &rarr;</span>
              </a>
            ))}
            <Link className="tile" href="/shop">
              <Icon name="cart" className="ti" width={46} height={46} />
              <h3>View everything</h3>
              <p>All Marketplace products together.</p>
              <span className="go">Shop all &rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="band band-cream" id="library">
        <div className="wrap">
          <h2>The library</h2>
          <hr className="rule" />
          <div className="legend" role="note">
            <span className="k">
              <span className="sw ph" /> Every card below is a placeholder.
              No digital products exist in the catalogue yet.
            </span>
          </div>
          <p className="resultcount">Showing 7 placeholder resources</p>
          <div className="grid g4">
            {PLACEHOLDER_RESOURCES.map((item) => (
              <PlaceholderResourceCard key={item.name} {...item} />
            ))}
          </div>
          <div className="note spec">
            <strong>How this becomes real in Wix</strong>
            <p>
              Once digital products exist, this grid becomes a native Wix
              Stores Product Gallery filtered to the Pet Parent Resource
              Library collections. Each product must be created as a{" "}
              <strong>digital product</strong> in Wix Stores, not a physical
              one, so the download is delivered automatically and no
              shipping is charged.
            </p>
          </div>
        </div>
      </div>

      <div className="band band-navy">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow on-navy">Phase 11 requirements</p>
            <h2>What you get when you buy a digital resource</h2>
            <hr className="rule center" />
          </div>
          <div className="grid g4">
            <div className="panel navy">
              <h3>Instant download</h3>
              <p>
                The file is available immediately after payment and stays in
                My Orders in your account.
              </p>
            </div>
            <div className="panel navy">
              <h3>Nothing ships</h3>
              <p>
                Digital resources are files, not physical goods. No shipping
                is charged and no package arrives.
              </p>
            </div>
            <div className="panel navy">
              <h3>Customer-ready PDF</h3>
              <p>
                Finished, watermark-free documents with a version number and
                copyright statement, never an editable master.
              </p>
            </div>
            <div className="panel navy">
              <h3>Clear licence</h3>
              <p>
                Personal use is included. Professional and organisational
                licences are offered separately.
              </p>
            </div>
          </div>
          <div
            className="note hold"
            style={{
              background: "rgba(255,255,255,.07)",
              borderLeftColor: "var(--gold)",
              color: "#E6ECF4",
              marginTop: 32,
            }}
          >
            <strong style={{ color: "var(--gold)" }}>
              Two Phase 11 items cannot be stated yet
            </strong>
            <p style={{ color: "#D7DFEA" }}>
              Download link lifetime and download count limit are
              unresolved, and Wix has no native field for either. Refund
              language for digital purchases is also pending. Until
              Dr.&nbsp;Hart decides, this panel must not claim a specific
              number of downloads or a specific refund right.{" "}
              <em>Recommendation:</em> at launch, describe the platform&rsquo;s
              actual behaviour rather than inventing a limit, which is the
              option already recommended in the delivered options sheet.
            </p>
          </div>
        </div>
      </div>

      <div className="band band-deep">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">PPC Premium Pet Care Library&trade;</p>
              <h2>Go deeper than a free blog post</h2>
              <p>
                Some questions need more than an article. The Premium
                Library holds expert guides, Pet Parent Deep Dives, white
                papers and subscriber-only reporting for owners who want the
                reasoning, not just the answer.
              </p>
              <ul className="ticks">
                <li>Premium articles and expert guides</li>
                <li>Pet Parent Deep Dives</li>
                <li>White papers and premium reports</li>
                <li>Subscriber-only content</li>
              </ul>
              <p className="pending">
                Pending: whether the Premium Library becomes its own
                navigation item and its own Phase&nbsp;6 home-page section.
                Recommended, since it is a distinct commercial pillar that
                currently appears only inside dropdowns.
              </p>
            </div>
            <div className="artframe">
              <Icon name="book" width={96} height={96} />
              <span>Premium Library key art placeholder</span>
            </div>
          </div>
        </div>
      </div>

      <div className="band band-white">
        <div className="wrap">
          <div className="capture">
            <h2>Be first to know</h2>
            <p>
              New resources, pet-parent tips, product announcements and
              special offers from the PPC Marketplace&trade;.
            </p>
            <DemoNewsletterForm />
            <p className="consent">
              By joining you agree to receive marketing email from PPC
              Marketplace&trade;, operated by PPC Consulting, LLC. You can
              unsubscribe at any time. No one is added to a marketing list
              without opting in here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
