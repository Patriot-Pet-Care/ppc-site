"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  VISIBLE_PRODUCTS,
  CATEGORY_LABEL,
  FACET_ATTRIBUTES,
  getFacetValues,
  priceRange as catalogPriceRange,
  type CatalogCategory,
  type FacetAttribute,
} from "@/lib/catalog";

type CategoryFilter = "all" | CatalogCategory;
type Sort = "featured" | "low" | "high" | "az";

const CATEGORIES: CatalogCategory[] = [
  "apparel",
  "gear",
  "drinkware",
  "bags",
  "candles",
  "stickers",
];

const [ABS_MIN, ABS_MAX] = catalogPriceRange(VISIBLE_PRODUCTS);
const BATCH_SIZE = 9;
const VISIBLE_COUNT_KEY = "ppc-shop-visible-count";

export default function ShopExplorer() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [sort, setSort] = useState<Sort>("featured");
  const [priceMin, setPriceMin] = useState(ABS_MIN);
  const [priceMax, setPriceMax] = useState(ABS_MAX);
  const [selectedFacets, setSelectedFacets] = useState<
    Record<string, Set<string>>
  >({});
  const [openFacets, setOpenFacets] = useState<Record<string, boolean>>({
    Color: true,
  });
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const skipNextReset = useRef(true);

  // Restore how far the visitor had paged into the last session — a
  // per-viewer convenience, not shared or authoritative, so a blocked or
  // cleared localStorage just falls back to the first batch. This has to
  // be an effect: localStorage doesn't exist during SSR, so reading it in
  // the initial render (or a lazy useState initializer) would mismatch
  // between server and client and break hydration.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(VISIBLE_COUNT_KEY);
      const n = saved ? parseInt(saved, 10) : NaN;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (Number.isFinite(n) && n > 0) setVisibleCount(n);
    } catch {
      // ignore — private browsing / blocked storage
    }
  }, []);

  // Persist page depth as it changes.
  useEffect(() => {
    try {
      localStorage.setItem(VISIBLE_COUNT_KEY, String(visibleCount));
    } catch {
      // ignore
    }
  }, [visibleCount]);

  const categoryFiltered = useMemo(
    () =>
      category === "all"
        ? VISIBLE_PRODUCTS
        : VISIBLE_PRODUCTS.filter((p) => p.category === category),
    [category],
  );

  const facetOptions = useMemo(() => {
    const out: Record<FacetAttribute, string[]> = {} as Record<FacetAttribute, string[]>;
    for (const attr of FACET_ATTRIBUTES) {
      out[attr] = getFacetValues(categoryFiltered, attr);
    }
    return out;
  }, [categoryFiltered]);

  const filtered = useMemo(() => {
    let list = categoryFiltered.filter(
      (p) => p.price >= priceMin && p.price <= priceMax,
    );
    for (const attr of FACET_ATTRIBUTES) {
      const selected = selectedFacets[attr];
      if (selected && selected.size > 0) {
        list = list.filter((p) =>
          (p.options[attr] ?? []).some((v) => selected.has(v)),
        );
      }
    }
    const sorted = [...list];
    if (sort === "az") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "low") sorted.sort((a, b) => a.price - b.price);
    if (sort === "high") sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [categoryFiltered, priceMin, priceMax, selectedFacets, sort]);

  // Changing a filter or sort invalidates the current page depth — jump
  // back to the first batch. Skipped on mount so it doesn't clobber the
  // restored value above.
  useEffect(() => {
    if (skipNextReset.current) {
      skipNextReset.current = false;
      return;
    }
    setVisibleCount(BATCH_SIZE);
  }, [category, sort, priceMin, priceMax, selectedFacets]);

  const visible = filtered.slice(0, visibleCount);

  function toggleFacetValue(attr: FacetAttribute, value: string) {
    setSelectedFacets((prev) => {
      const next = { ...prev };
      const current = new Set(next[attr] ?? []);
      if (current.has(value)) current.delete(value);
      else current.add(value);
      next[attr] = current;
      return next;
    });
  }

  const activeFacetCount = Object.values(selectedFacets).reduce(
    (n, set) => n + set.size,
    0,
  );
  const hasActiveFilters =
    category !== "all" ||
    priceMin !== ABS_MIN ||
    priceMax !== ABS_MAX ||
    activeFacetCount > 0;

  function clearAll() {
    setCategory("all");
    setPriceMin(ABS_MIN);
    setPriceMax(ABS_MAX);
    setSelectedFacets({});
  }

  return (
    <div className="shop-layout">
      <aside className="shop-sidebar">
        <h4>Browse by</h4>
        <ul className="browse-list">
          <li>
            <button
              className={category === "all" ? "active" : ""}
              onClick={() => setCategory("all")}
            >
              All Products
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                className={category === c ? "active" : ""}
                onClick={() => setCategory(c)}
              >
                {CATEGORY_LABEL[c]}
              </button>
            </li>
          ))}
        </ul>

        <h4>Filter by</h4>
        <div className="facet">
          <p
            style={{
              fontFamily: "var(--display)",
              fontSize: ".82rem",
              color: "var(--navy)",
              marginBottom: 8,
            }}
          >
            Price
          </p>
          <div className="price-inputs">
            <label className="sr" htmlFor="priceMin">
              Minimum price
            </label>
            <input
              id="priceMin"
              type="number"
              min={ABS_MIN}
              max={priceMax}
              value={priceMin}
              onChange={(e) => setPriceMin(Number(e.target.value) || ABS_MIN)}
            />
            <span className="muted">to</span>
            <label className="sr" htmlFor="priceMax">
              Maximum price
            </label>
            <input
              id="priceMax"
              type="number"
              min={priceMin}
              max={ABS_MAX}
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value) || ABS_MAX)}
            />
          </div>
        </div>

        {FACET_ATTRIBUTES.map((attr) => {
          const options = facetOptions[attr];
          if (!options || options.length === 0) return null;
          const open = !!openFacets[attr];
          const selected = selectedFacets[attr] ?? new Set<string>();
          return (
            <div className="facet" key={attr}>
              <button
                type="button"
                className="facet-header"
                aria-expanded={open}
                onClick={() =>
                  setOpenFacets((prev) => ({ ...prev, [attr]: !prev[attr] }))
                }
              >
                {attr}
                {selected.size > 0 ? ` (${selected.size})` : ""}
                <span className="sign">{open ? "−" : "+"}</span>
              </button>
              {open && (
                <div className="facet-body">
                  {options.map((value) => (
                    <label className="facet-check" key={value}>
                      <input
                        type="checkbox"
                        checked={selected.has(value)}
                        onChange={() => toggleFacetValue(attr, value)}
                      />
                      {value}
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {hasActiveFilters && (
          <button type="button" className="clear-filters" onClick={clearAll}>
            Clear all filters
          </button>
        )}
      </aside>

      <div>
        <div className="filterbar">
          <p className="resultcount" style={{ margin: 0 }} aria-live="polite">
            Showing {visible.length} of {filtered.length}{" "}
            {category === "all" ? "catalogued products" : CATEGORY_LABEL[category]}
          </p>
          <div className="sortwrap">
            <label htmlFor="sortSel">Sort</label>
            <select
              id="sortSel"
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
            >
              <option value="featured">Featured</option>
              <option value="low">Price, low to high</option>
              <option value="high">Price, high to low</option>
              <option value="az">Name, A to Z</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="note">
            <strong>Nothing to show</strong>
            <p>No products match these filters. Try clearing one or two.</p>
          </div>
        ) : (
          <>
            <div className="grid g3">
              {visible.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            {visibleCount < filtered.length && (
              <div className="center" style={{ marginTop: 32 }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() =>
                    setVisibleCount((c) => Math.min(c + BATCH_SIZE, filtered.length))
                  }
                >
                  Load More ({filtered.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
