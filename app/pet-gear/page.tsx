import Link from "next/link";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import { productsByCategory } from "@/lib/catalog";

export const metadata = { title: "Pet Gear" };

const CATEGORY_TILES = [
  { icon: "collar" as const, title: "Collars", body: "Everyday and adjustable." },
  { icon: "leash" as const, title: "Leashes", body: "Standard and training." },
  { icon: "shirt" as const, title: "Pet Apparel", body: "Bandanas and wearables." },
  { icon: "bag" as const, title: "Travel Gear", body: "On the road and away." },
  { icon: "paw" as const, title: "Accessories", body: "Tags, clips and extras." },
];

export default function PetGearPage() {
  const gear = productsByCategory("gear");

  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Pet Gear
          </p>
          <h1>Pet Gear</h1>
          <p className="lede">
            Collars, leashes and everyday equipment chosen with the same
            judgement Patriot&rsquo;s Pet Care applies in its own facility.
          </p>
        </div>
      </div>

      <div className="band band-white tight">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">Phase 9 classification</p>
            <h2>Shop pet gear categories</h2>
            <hr className="rule center" />
          </div>
          <div className="grid g5">
            {CATEGORY_TILES.map((tile) => (
              <div className="tile" key={tile.title}>
                <Icon name={tile.icon} className="ti" width={46} height={46} />
                <h3>{tile.title}</h3>
                <p>{tile.body}</p>
                <span className="go">View &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="band band-cream">
        <div className="wrap">
          <h2>Pet gear</h2>
          <hr className="rule" />
          <p className="resultcount" aria-live="polite">
            Showing {gear.length} catalogued product{gear.length === 1 ? "" : "s"}
          </p>
          <div className="grid g4">
            {gear.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <div className="note hold">
            <strong>Two catalogue issues on this page &mdash; recommendations included</strong>
            <p>
              <strong>Travel Gear has no stock.</strong> A category tile that
              leads to an empty grid is worse than no tile.{" "}
              <em>Recommendation:</em> either hide the Travel Gear category
              until stock exists, or keep the tile and let Wix show its
              native &ldquo;out of stock&rdquo; state, which at least
              confirms the range exists. Hiding it is the cleaner customer
              experience for launch.
            </p>
            <p>
              <strong>
                The Black Clip-on Pet Bandana shows a &ldquo;Coming
                Soon!&rdquo; ribbon while its stock status is In Stock.
              </strong>{" "}
              Customers will read that as unavailable and skip it.{" "}
              <em>Recommendation:</em> remove the ribbon, since the stock
              record is the authoritative field and the ribbon appears to be
              left over from the Operations store.
            </p>
          </div>

          <div className="note spec">
            <strong>How this becomes real in Wix</strong>
            <p>
              Native Wix Stores Product Gallery filtered to the Pet Gear
              collections, with the same five category views as the tiles
              above.
            </p>
          </div>
        </div>
      </div>

      <div className="band band-deep">
        <div className="wrap">
          <div className="split rev">
            <div className="artframe">
              <Icon name="collar" />
              <span>Product photography placeholder</span>
            </div>
            <div>
              <p className="eyebrow">Chosen, not just stocked</p>
              <h2>Gear we would put on our own dogs</h2>
              <p>
                Patriot&rsquo;s Pet Care handles hundreds of animals. That
                experience is what informs which gear earns a place in the
                Marketplace: it has to hold up, fit properly and be safe to
                leave on an active dog.
              </p>
              <ul className="ticks">
                <li>Sized and described honestly, with real measurements</li>
                <li>Photographed on real animals wherever possible</li>
                <li>Stock status kept accurate, so nothing sells that cannot ship</li>
              </ul>
              <Link href="/shop" className="btn btn-outline">
                See everything in the Marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
