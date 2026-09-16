import type { IconName } from "@/components/IconSprite";

export type CatalogCategory = "apparel" | "gear" | "drinkware" | "bags" | "candles" | "stickers";

export type Product = {
  n: number;
  slug: string;
  name: string;
  price: number;
  category: CatalogCategory;
  sub: string;
  icon: IconName;
  tone: "t-navy" | "t-gold" | "t-red";
  visible: boolean;
  note?: string;
  image: string;
  /** Real Wix product description (from catalog_products.csv), first
   * sentence only. Some are reused boilerplate across variants — that's
   * the actual live catalog data, including its known quirks (e.g. #8's
   * description is a mismatched leftover from a different product). */
  description: string;
  /** Real Wix product option data (productOptionName/Description columns
   * in catalog_products.csv) — the same Color/Size/Material/Finish/Scent
   * facets a Wix Stores Product Gallery would filter on. */
  options: Record<string, string[]>;
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[''""]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Ground truth: the real 38-row Wix Stores export
// (PPC MARKETPLACE/8 _ CHANGES LOG/catalog_products (3).csv), which is the
// same order as the "Patriots Pet Care - All Product Images (345)" folder
// (image 01 in each numbered subfolder is products.n's photo, copied to
// /public/products/{n}.jpg). This supersedes the 5-item demo catalog in the
// page prototypes (7 _ HTML/*.html) and the 4-item fallback that used to
// live in lib/products.ts.
const RAW: Omit<Product, "slug" | "image">[] = [
  { n: 1, name: "Lighting This Candle Because… Scented Soy Candle", price: 12.43, category: "candles", sub: "Candles", icon: "candle", tone: "t-gold", visible: true, description: "Create a Cozy, Pet-Friendly Atmosphere for You and Your Pup!", options: { Size: ["4oz"], Color: ["Amber"], Scent: ["Atlantis Whisper", "Christmas Warmth", "Peppered Passionfruit", "Unscented", "White Sage and Lavender"] } },
  { n: 2, name: "Unisex Pawsitive Vibes Tee", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-red", visible: true, description: "Celebrate American values and your love for pets with this unisex heavy cotton tee—a true staple of any proud patriot’s wardrobe.", options: { Color: ["White", "Ash", "Black", "Mint Green", "Gravel", "Light Blue", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 3, name: "Unisex Fur Dad Tee", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-red", visible: true, description: "Celebrate American values and your love for pets with this unisex heavy cotton tee—a true staple of any proud patriot’s wardrobe.", options: { Color: ["White", "Ash", "Black", "Mint Green", "Gravel", "Light Blue", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 4, name: "Unisex Fur Mom Tee", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-red", visible: true, description: "Celebrate American values and your love for pets with this unisex heavy cotton tee—a true staple of any proud patriot’s wardrobe.", options: { Color: ["White", "Ash", "Black", "Mint Green", "Gravel", "Light Blue", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 5, name: "Unisex Better Life Tee", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-red", visible: true, description: "Celebrate American values and your love for pets with this unisex heavy cotton tee—a true staple of any proud patriot’s wardrobe.", options: { Color: ["White", "Ash", "Black", "Mint Green", "Gravel", "Light Blue", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 6, name: "Unisex Dog Hair, Don’t Care Tee", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-red", visible: true, description: "Celebrate American values and your love for pets with this unisex heavy cotton tee—a true staple of any proud patriot’s wardrobe.", options: { Color: ["White", "Ash", "Black", "Mint Green", "Gravel", "Light Blue", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 7, name: "Unisex Like My Dog More Tee", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-red", visible: true, description: "Celebrate American values and your love for pets with this unisex heavy cotton tee—a true staple of any proud patriot’s wardrobe.", options: { Color: ["White", "Ash", "Black", "Mint Green", "Gravel", "Light Blue", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 8, name: "PPC STAFF — Training Program Make Sit Happen", price: 60.55, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-navy", visible: false, description: "Few items are as iconic as the polo shirt and these ones come to add style when peak performance is part of the day.", options: { Color: ["Iron Grey", "Grey Concrete"], Size: ["S", "M", "L", "XL", "2XL", "3XL"] } },
  { n: 9, name: "PPC Doggie Bag Cotton Canvas Tote Bag", price: 15.0, category: "bags", sub: "Bags", icon: "bag", tone: "t-gold", visible: true, description: "Made from 100% ethically sourced cotton canvas, this durable tote bag is perfect for pet lovers and proud patriots alike.", options: { Color: ["Natural"], Size: ["15\" x 16\""] } },
  { n: 10, name: "Unisex Patriot’s Pet Care a Little Dog Hair Tee", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-red", visible: false, description: "Celebrate American values and your love for pets with this unisex heavy cotton tee—a true staple of any proud patriot’s wardrobe.", options: { Color: ["White", "Ash", "Black", "Mint Green", "Gravel", "Light Blue", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 11, name: "Unisex Patriot’s Pet Care Pets and Country Tee", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-red", visible: true, description: "Celebrate American values and your love for pets with this unisex heavy cotton tee—a true staple of any proud patriot’s wardrobe.", options: { Color: ["White", "Ash", "Black", "Mint Green", "Gravel", "Light Blue", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 12, name: "Unisex PPC Pets and Country Crewneck Sweatshirt", price: 39.9, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-navy", visible: true, description: "Wrap yourself in comfort with this unisex heavy blend crewneck sweatshirt—perfect for cozy moments with your four-legged best friend.", options: { Color: ["White", "Black", "Sport Grey", "Light Blue", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 13, name: "PPC Classic Baseball Cap", price: 25.0, category: "apparel", sub: "Hats", icon: "cap", tone: "t-navy", visible: true, description: "Whether you're out for a morning walk with your pup or cheering on your favorite team, this classic baseball cap has you covered.", options: { Color: ["Green Camo", "Spruce", "Navy", "Black", "Dark Grey"], Size: ["One size"] } },
  { n: 14, name: "Unisex Patriot’s Pet Care Heavy Cotton Tee", price: 12.06, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-red", visible: true, description: "Celebrate American values and your love for pets with this unisex heavy cotton tee—a true staple of any proud patriot’s wardrobe.", options: { Color: ["White", "Ash", "Black", "Gravel", "Light Blue", "Violet", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 15, name: "Unisex PPC Crewneck Sweatshirt", price: 39.9, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-navy", visible: true, description: "Wrap yourself in comfort with this unisex heavy blend crewneck sweatshirt—perfect for cozy moments with your four-legged best friend.", options: { Color: ["White", "Black", "Sport Grey", "Military Green", "Light Blue"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 16, name: "Patriot’s Pet Care Pet Hoodie", price: 33.85, category: "gear", sub: "Pet Apparel", icon: "shirt", tone: "t-gold", visible: true, description: "This time around, it’s pet parents who get a treat – meet the PPC pet hoodie!", options: { Size: ["XS", "S", "M", "L", "XL"], Color: ["White Rib", "Black Rib"] } },
  { n: 17, name: "Unisex PPC A Little Dog Hair Crewneck Sweatshirt", price: 39.9, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-navy", visible: true, description: "Wrap yourself in comfort with this unisex heavy blend crewneck sweatshirt—perfect for cozy moments with your four-legged best friend.", options: { Color: ["White", "Black", "Sand", "Sport Grey", "Military Green", "Light Blue", "Light Pink"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 18, name: "PPC Dog Collar (Light Blue)", price: 29.2, category: "gear", sub: "Collars", icon: "collar", tone: "t-navy", visible: true, description: "Give your furry companion a collar that’s as strong, proud, and full of personality as the American spirit!", options: { Size: ["S", "M", "L", "XL"], Finish: ["Black Onyx", "Gun Metal", "Rose Gold", "Vintage Brass"], Material: ["TPU"] } },
  { n: 19, name: "PPC Dog Collar (Raspberry)", price: 29.2, category: "gear", sub: "Collars", icon: "collar", tone: "t-red", visible: true, description: "Give your furry companion a collar that’s as strong, proud, and full of personality as the American spirit!", options: { Size: ["S", "M", "L", "XL"], Finish: ["Black Onyx", "Gun Metal", "Rose Gold", "Vintage Brass"], Material: ["TPU"] } },
  { n: 20, name: "PPC Dog Collar (Black)", price: 29.2, category: "gear", sub: "Collars", icon: "collar", tone: "t-navy", visible: true, description: "Give your furry companion a collar that’s as strong, proud, and full of personality as the American spirit!", options: { Size: ["S", "M", "L", "XL"], Finish: ["Black Onyx", "Gun Metal", "Rose Gold", "Vintage Brass"], Material: ["TPU"] } },
  { n: 21, name: "PPC Dog Collar (Brown)", price: 29.2, category: "gear", sub: "Collars", icon: "collar", tone: "t-gold", visible: true, description: "Give your furry companion a collar that’s as strong, proud, and full of personality as the American spirit!", options: { Size: ["S", "M", "L", "XL"], Finish: ["Black Onyx", "Gun Metal", "Rose Gold", "Vintage Brass"], Material: ["TPU"] } },
  { n: 22, name: "PPC Dog Collar (Gray)", price: 29.2, category: "gear", sub: "Collars", icon: "collar", tone: "t-navy", visible: true, description: "Give your furry companion a collar that’s as strong, proud, and full of personality as the American spirit!", options: { Size: ["S", "M", "L", "XL"], Finish: ["Black Onyx", "Gun Metal", "Rose Gold", "Vintage Brass"], Material: ["TPU"] } },
  { n: 23, name: "PPC Kiss-Cut Stickers", price: 2.42, category: "stickers", sub: "Stickers", icon: "sticker", tone: "t-gold", visible: true, description: "Show your love for Patriot's Pet Care with our new ultra-strong stickers!", options: { Size: ["2\" × 2\"", "3\" × 3\"", "4\" × 4\"", "6\" × 6\""], Surface: ["Transparent", "White"] } },
  { n: 24, name: "PPC Lookin’ Good Clip-on Pet Bandana", price: 12.11, category: "gear", sub: "Pet Apparel", icon: "shirt", tone: "t-red", visible: true, description: "Show off your pet's PPC pride with our new bandanas!", options: { Size: ["S", "M", "L", "XL"] } },
  { n: 25, name: "PPC Cotton Canvas Tote Bag", price: 15.0, category: "bags", sub: "Bags", icon: "bag", tone: "t-navy", visible: true, description: "Made from 100% ethically sourced cotton canvas, this durable tote bag is perfect for pet lovers and proud patriots alike.", options: { Color: ["Natural"], Size: ["15\" x 16\""] } },
  { n: 26, name: "Patriot’s Pet Care 20oz Tumbler", price: 25.0, category: "drinkware", sub: "Drinkware", icon: "cup", tone: "t-gold", visible: true, description: "Sip with American Pride & Pet-Loving Spirit – The Perfect Tumbler for Every Adventure!", options: { Size: ["20oz"], Color: ["Silver"] } },
  { n: 27, name: "PPC Leash (Raspberry)", price: 38.18, category: "gear", sub: "Leashes", icon: "leash", tone: "t-red", visible: true, description: "Take every walk with pride and confidence using this durable, adventure-ready dog leash —crafted for pet lovers who embrace the great outdoors.", options: { Size: ["One size"], Material: ["TPU"] } },
  { n: 28, name: "PPC Leash (Brown)", price: 38.18, category: "gear", sub: "Leashes", icon: "leash", tone: "t-gold", visible: true, description: "Take every walk with pride and confidence using this durable, adventure-ready dog leash —crafted for pet lovers who embrace the great outdoors.", options: { Size: ["One size"], Material: ["TPU"] } },
  { n: 29, name: "PPC Leash (Light Blue)", price: 38.18, category: "gear", sub: "Leashes", icon: "leash", tone: "t-navy", visible: true, description: "Take every walk with pride and confidence using this durable, adventure-ready dog leash —crafted for pet lovers who embrace the great outdoors.", options: { Size: ["One size"], Material: ["TPU"] } },
  { n: 30, name: "PPC Leash (Black)", price: 38.18, category: "gear", sub: "Leashes", icon: "leash", tone: "t-navy", visible: true, description: "Take every walk with pride and confidence using this durable, adventure-ready dog leash —crafted for pet lovers who embrace the great outdoors.", options: { Size: ["One size"], Material: ["TPU"] } },
  { n: 31, name: "PPC Leash (Gray)", price: 38.18, category: "gear", sub: "Leashes", icon: "leash", tone: "t-navy", visible: true, description: "Take every walk with pride and confidence using this durable, adventure-ready dog leash —crafted for pet lovers who embrace the great outdoors.", options: { Size: ["One size"], Material: ["TPU"] } },
  { n: 32, name: "PPC Pink Clip-on Pet Bandana", price: 12.11, category: "gear", sub: "Pet Apparel", icon: "shirt", tone: "t-red", visible: true, description: "Show off your pet's PPC pride with our new bandanas!", options: { Size: ["S", "M", "L", "XL"] } },
  { n: 33, name: "PPC Blue Clip-on Pet Bandana", price: 12.11, category: "gear", sub: "Pet Apparel", icon: "shirt", tone: "t-navy", visible: true, description: "Show off your pet's PPC pride with our new bandanas!", options: { Size: ["S", "M", "L", "XL"] } },
  { n: 34, name: "PPC Black Clip-on Pet Bandana", price: 12.11, category: "gear", sub: "Pet Apparel", icon: "shirt", tone: "t-navy", visible: true, description: "Show off your pet's PPC pride with our new bandanas!", options: { Size: ["S", "M", "L", "XL"] }, note: "Flagged — shows a “Coming Soon” ribbon in Wix despite in-stock inventory." },
  { n: 35, name: "PPC STAFF — Pets and Country", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-navy", visible: false, description: "PPC STAFF ONLY!", options: { Color: ["White", "Sport Grey"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 36, name: "PPC STAFF — Your PPC Needs", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-navy", visible: false, description: "PPC STAFF ONLY!", options: { Color: ["Sport Grey"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 37, name: "PPC STAFF — Your Dog’s Best Life", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-navy", visible: false, description: "PPC STAFF ONLY!", options: { Color: ["Sport Grey"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
  { n: 38, name: "PPC STAFF — A Little Dog Hair", price: 25.8, category: "apparel", sub: "Shirts", icon: "shirt", tone: "t-navy", visible: false, description: "PPC STAFF ONLY!", options: { Color: ["Sport Grey"], Size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"] } },
];

export const PRODUCTS: Product[] = RAW.map((p) => ({
  ...p,
  slug: slugify(p.name),
  image: `/products/${p.n}.jpg`,
}));

export const VISIBLE_PRODUCTS = PRODUCTS.filter((p) => p.visible);

export const CATEGORY_LABEL: Record<CatalogCategory, string> = {
  apparel: "Apparel",
  gear: "Pet Gear",
  drinkware: "Drinkware",
  bags: "Bags",
  candles: "Candles",
  stickers: "Stickers",
};

export function productsByCategory(category: CatalogCategory) {
  return VISIBLE_PRODUCTS.filter((p) => p.category === category);
}

const MERCH_CATEGORIES: CatalogCategory[] = [
  "apparel",
  "drinkware",
  "bags",
  "candles",
  "stickers",
];

// Everything sold on the Merchandise page (human-facing goods) vs. the Pet
// Gear page (category === "gear", for the animal).
export function merchandiseProducts() {
  return VISIBLE_PRODUCTS.filter((p) => MERCH_CATEGORIES.includes(p.category));
}

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

// The facet attributes worth surfacing as filters, in display order.
// "Surface" (stickers only, 2 values) isn't included — too narrow to be
// worth a whole filter section.
export const FACET_ATTRIBUTES = ["Color", "Size", "Material", "Finish", "Scent"] as const;
export type FacetAttribute = (typeof FACET_ATTRIBUTES)[number];

// Real distinct values per attribute, computed from the catalog rather
// than hardcoded, scoped to whichever products are passed in (so the
// sidebar can recompute facets as the category selection narrows).
export function getFacetValues(
  products: Product[],
  attribute: FacetAttribute,
): string[] {
  const values = new Set<string>();
  for (const p of products) {
    for (const v of p.options[attribute] ?? []) values.add(v);
  }
  return Array.from(values).sort();
}

export function priceRange(products: Product[]): [number, number] {
  if (!products.length) return [0, 0];
  const prices = products.map((p) => p.price);
  return [Math.min(...prices), Math.max(...prices)];
}

const MERCH_SUB_ICON: Record<string, IconName> = {
  Shirts: "shirt",
  Hats: "cap",
  Drinkware: "cup",
  Bags: "bag",
  Candles: "candle",
  Stickers: "sticker",
};

const MERCH_SUB_NOTE: Record<string, string> = {
  Shirts: "Tees, crewnecks and sweatshirts carrying the motto",
  Hats: "PPC Classic Baseball Cap",
  Drinkware: "Patriot’s Pet Care 20oz Tumbler",
  Bags: "Cotton canvas totes",
  Candles: "Lighting This Candle Because… Scented Soy Candle",
  Stickers: "PPC Kiss-Cut Stickers",
};

// Real, visible-only counts computed from the catalog rather than
// hardcoded, so this stays accurate if the catalog changes.
export const MERCHANDISE_TILES = Object.entries(MERCH_SUB_ICON).map(
  ([sub, icon]) => {
    const items = VISIBLE_PRODUCTS.filter((p) => p.sub === sub && p.category !== "gear");
    return {
      label: sub,
      count: `${items.length} product${items.length === 1 ? "" : "s"}`,
      note: MERCH_SUB_NOTE[sub],
      icon,
      // Representative real photo for this category, for tiles that want
      // to show an actual product instead of just the line-art icon.
      image: items[0]?.image,
    };
  },
);
