import { featuredProducts } from "@/constants";

import { FeaturedProductCard } from "./FeaturedProductCard";
import { FeaturedTodayHeader } from "./FeaturedTodayHeader";

export function FeaturedTodaySection() {
  const products = featuredProducts;

  if (!products.length) {
    return (
      <p className="text-center text-sm text-[#0a2533]/70">No products found.</p>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <FeaturedTodayHeader />
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {products.map((product) => (
          <li key={product.id}>
            <FeaturedProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
