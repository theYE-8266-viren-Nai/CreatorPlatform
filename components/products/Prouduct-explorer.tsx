// ProductExplorer.tsx
"use client";

import type { getAllProducts } from "@/lib/products/product-select";
import { Button } from "@/components/ui/button";
import { ClockIcon, CompassIcon, TrendingUpIcon } from "lucide-react";

import { FeaturedProductCard } from "../../app/components/featured/FeaturedProductCard";
import { useMemo, useState } from "react";

type Product = Awaited<ReturnType<typeof getAllProducts>>[number];

export default function ProductExplorer({
  products,
}: {
  products: Product[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"trending" | "recent" | "newest">("trending");
  // Compute filtered products using useMemo to avoid state updates in effect
const filteredProducts = useMemo(() => {
  // 1. First filter by search query
  const lower = searchQuery.toLowerCase().trim();
  const filtered = lower
    ? products.filter((p) => p.name.toLowerCase().includes(lower))
    : [...products]; // spread to avoid mutating the original

  // 2. Then sort
  switch (sortBy) {
    case "trending":
      return filtered.sort((a, b) => b.voteCount - a.voteCount);
    case "recent":
    case "newest":
      return filtered.sort(
        (a, b) =>
          new Date(b.createdAt ?? "").getTime() -
          new Date(a.createdAt ?? "").getTime()
      );
    default:
      return filtered;
  }
}, [searchQuery, products, sortBy]);
  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mb-8">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-[#0a2533] mb-1">
          <CompassIcon className="size-6 text-[#e85d4a]" strokeWidth={2} />
          Explore All Products
        </h1>
        <p className="text-sm text-[#0a2533]/60">
          Browse and discover amazing projects from our community
        </p>
      </div>

      {/* ——— Search bar row ——— */}
      <div className="flex items-center gap-3 mb-8 rounded-2xl bg-[#f5f0e8] border border-[#e8e0d0] px-2 py-2 shadow-sm">
        {/* Search input */}
        <div className="flex flex-1 items-center gap-2 rounded-xl bg-white border border-[#e8e0d0] px-4 py-2 shadow-inner">
          <svg
            className="h-4 w-4 shrink-0 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="search"
            placeholder="Search products..."
            className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none border-none min-w-0"
            aria-label="Search products"
          />
        </div>

        {/* Trending button — outlined */}
        <Button
        onClick={() => setSortBy("trending")}
          variant="outline"
          className="shrink-0 h-10 gap-1.5 rounded-xl border border-[#d8d0c0] bg-white text-slate-700 text-sm font-medium px-4 shadow-sm hover:bg-white/80 hover:border-slate-300 transition-colors"
        >
          <TrendingUpIcon className="size-4 text-slate-500" />
          Trending
        </Button>

        {/* Recent button — filled pink */}
        <Button
        onClick={() => setSortBy("recent")}
          className="shrink-0 h-10 gap-1.5 rounded-xl bg-brand-pink text-white text-sm font-medium px-4 shadow-md shadow-brand-pink/20 hover:bg-brand-pink/90 transition-colors"
        >
          <ClockIcon className="size-4" />
          Recent
        </Button>
      </div>

      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredProducts.length} products
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <FeaturedProductCard product={product} featured={false} />
          </li>
        ))}
      </ul>
    </div>
  );
}