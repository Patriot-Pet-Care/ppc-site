import Link from "next/link";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import { merchandiseProducts } from "@/lib/catalog";

export const metadata = { title: "PPC Official Merchandise" };

const CATEGORY_TILES: { label: string; icon: Parameters<typeof Icon>[0]["name"]; body: string }[] = [
  { label: "Shirts", icon: "shirt", body: "Tees and long sleeves." },
  { label: "Sweatshirts", icon: "shirt", body: "Hoodies and crewnecks." },
  { label: "Hats", icon: "cap", body: "Caps and beanies." },
  { label: "Drinkware", icon: "cup", body: "Tumblers and mugs." },
  { label: "Bags", icon: "bag", body: "Totes and carriers." },
  { label: "Candles", icon: "candle", body: "Home fragrance." },
  { label: "Stickers", icon: "sticker", body: "Decals and vinyl." },
];

export default function MerchandisePage() {
  const products = merchandiseProducts();

  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Merchandise
          </p>
          <h1>PPC Official Merchandise&trade;</h1>
          <p className="lede">
            Apparel and everyday goods for people who care deeply about
            pets. Designed for the Patriot&rsquo;s Pet Care family, sold by
            PPC Consulting, LLC.
          </p>
        </div>
      </div>

      <div className="band band-white tight">
        <div className="wrap">
          <div className="sechead center">
            <p className="eyebrow">Phase 9 classification</p>
            <h2>Shop merchandise categories</h2>
            <hr className="rule center" />
            <p className="lede center">
              Seven categories, matching the Product Classification
              standard.
            </p>
          </div>
          <div className="grid g4">
            {CATEGORY_TILES.map((tile) => (
              <a key={tile.label} className="tile" href="#merch-grid-band">
                <Icon name={tile.icon} className="ti" width={46} height={46} />
                <h3>{tile.label}</h3>
                <p>{tile.body}</p>
                <span className="go">View &rarr;</span>
              </a>
            ))}
            <Link className="tile" href="/shop">
              <Icon name="cart" className="ti" width={46} height={46} />
              <h3>View everything</h3>
              <p>All Marketplace products together.</p>
              <span className="go">Shop all &rarr;</span>
            </Link>
          </div>

          <div className="note">
            <strong>
              Category conflict inside the Action Plan &mdash; recommendation
              included
            </strong>
            <p>
              Phase&nbsp;5 lists Merchandise sub-categories as Apparel, Hats,
              Drinkware, Home &amp; Lifestyle, Stickers and Gifts.
              Phase&nbsp;9 lists them as Shirts, Sweatshirts, Hats,
              Drinkware, Bags, Candles and Stickers. The two lists do not
              match, and &ldquo;Home &amp; Lifestyle&rdquo; and
              &ldquo;Gifts&rdquo; do not correspond to anything in the real
              catalogue. <em>Recommendation:</em> adopt the Phase&nbsp;9
              list, used above, because it is the later and more specific of
              the two and it maps cleanly onto products that actually exist.
              Confirmation requested before the collections are created in
              Wix, since collection names become part of the public URL.
            </p>
          </div>
        </div>
      </div>

      <div className="band band-cream" id="merch-grid-band">
        <div className="wrap">
          <h2>Merchandise</h2>
          <hr className="rule" />
          <p className="resultcount" aria-live="polite">
            Showing {products.length} catalogued products
          </p>
          <div className="grid g4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="note spec">
            <strong>How this becomes real in Wix</strong>
            <p>
              Replace this grid with a native Wix Stores Product Gallery
              filtered to the Merchandise collections. Ten of the seventeen
              apparel products currently sit in no collection, so they will
              not appear here until they are assigned. The category tiles
              above become links to the gallery&rsquo;s category views, not
              separate hand-built pages.
            </p>
          </div>
        </div>
      </div>

      <div className="band band-navy">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow on-navy">Why it matters</p>
              <h2>Wear it because you mean it</h2>
              <p>
                Every piece of PPC Official Merchandise&trade; carries the
                Patriot&rsquo;s Pet Care mark. It is the same brand that pet
                parents know from the facility, offered here as something
                you can take home.
              </p>
              <p>
                Merchandise is sold through the Marketplace so that the
                Operations company stays focused on caring for animals, and
                the storefront stays focused on serving customers
                nationally.
              </p>
              <Link className="btn btn-onnavy" href="/shop">
                Shop all products
              </Link>
            </div>
            <div
              className="artframe"
              style={{ background: "rgba(255,255,255,.06)", borderColor: "rgba(255,255,255,.2)" }}
            >
              <Icon name="paw" style={{ color: "#fff", opacity: 0.5 }} />
              <span style={{ color: "#B9C7D9" }}>
                Brand photography placeholder &mdash; Wix Media library
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
