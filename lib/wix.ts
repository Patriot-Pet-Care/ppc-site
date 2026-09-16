import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import { PRODUCTS, type Product } from "@/lib/catalog";

// Wix Headless visitor client. WIX_CLIENT_ID comes from the site's
// "Headless Settings" / Go Headless OAuth app in the Wix dashboard — not
// generated yet (see project notes). Until it's set, every helper below
// falls back to the real static catalog in lib/catalog.ts, so the site
// renders real content either way.
const clientId = process.env.WIX_CLIENT_ID;

export const wixClient = clientId
  ? createClient({
      modules: { products },
      auth: OAuthStrategy({ clientId }),
    })
  : null;

export async function getFeaturedProducts(
  numbers: number[],
): Promise<Product[]> {
  const fallback = numbers.map((n) => PRODUCTS.find((p) => p.n === n)!);
  if (!wixClient) return fallback;

  try {
    const { items } = await wixClient.products
      .queryProducts()
      .in(
        "slug",
        numbers.map((n) => PRODUCTS.find((p) => p.n === n)!.slug),
      )
      .find();

    if (!items.length) return fallback;

    return items.map((item, i) => ({
      ...fallback[i],
      name: item.name ?? fallback[i].name,
      price: item.priceData?.price ?? fallback[i].price,
    }));
  } catch (error) {
    console.error("Wix product fetch failed, using fallback catalog", error);
    return fallback;
  }
}
