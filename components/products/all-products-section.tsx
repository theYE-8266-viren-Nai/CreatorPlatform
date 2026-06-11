import { Package } from "lucide-react";

import { FeaturedProductCard } from "@/app/components/featured/FeaturedProductCard";
import { getAllProducts } from "@/lib/products/product-select";

export async function AllProductsSection() {
  const products = await getAllProducts();

  if (!products.length) {
    return (
      <div className="rounded-md border border-[#0a2533]/20 bg-[#f5f2eb] px-6 py-14">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <Package
            className="size-10 text-[#0a2533]/55 sm:size-11"
            strokeWidth={1.75}
            aria-hidden
          />
          <p className="max-w-xl text-sm font-medium text-[#0a2533]/90 sm:text-base">
            No products have been approved yet. Check back soon or submit your
            own!
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      {products.map((product) => (
        <li key={product.id}>
          <FeaturedProductCard product={product} featured={false} />
        </li>
      ))}
    </ul>
  );
}
