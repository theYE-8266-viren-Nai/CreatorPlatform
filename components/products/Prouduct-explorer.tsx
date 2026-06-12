// ProductExplorer.tsx
"use client";

import type { getAllProducts } from "@/lib/products/product-select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ClockIcon, TrendingUpIcon } from "lucide-react";
import { FeaturedProductCard } from "../../app/components/featured/FeaturedProductCard";

type Product = Awaited<ReturnType<typeof getAllProducts>>[number];

export default function ProductExplorer({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Input />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <TrendingUpIcon className="size-4" />
            Trending
          </Button>
          <Button>
            <ClockIcon className="size-4" />
            Recent
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {products.length} products
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {products.map((product) => (
          <li key={product.id}>
            <FeaturedProductCard product={product} featured={false} />
          </li>
        ))}
      </ul>
    </div>
  );
}