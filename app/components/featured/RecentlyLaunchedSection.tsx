import { Sparkles, CalendarDays } from "lucide-react";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";
import { getMostRecentProduct } from "@/lib/products/utils";
import { ProductCard } from "@/components/products/product-card";

export async function RecentlyLaunchedSection() {
  const products = await getRecentlyLaunchedProducts();
  const mostRecentId = getMostRecentProduct(products)?.id;

  if (!products.length) {
    return (
      <section className="flex flex-col gap-8 pt-2">
        <header className="space-y-1">
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-[#0a2533] sm:text-[1.75rem]">
            <Sparkles
              className="size-6 shrink-0 fill-none stroke-brand-pink stroke-[1.75]"
              aria-hidden
            />
            Recently Launched
          </h2>
          <p className="text-sm text-[#0a2533]/75 sm:text-base">
            Discover the latest products from our community
          </p>
        </header>

        <div className="rounded-md border border-[#0a2533]/20 bg-[#f5f2eb] px-6 py-14">
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <CalendarDays
              className="size-10 text-[#0a2533]/55 sm:size-11"
              strokeWidth={1.75}
              aria-hidden
            />
            <p className="max-w-xl text-sm font-medium text-[#0a2533]/90 sm:text-base">
              No products launched in the last week. Check back soon for new
              launches!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-8 pt-2">
      <header className="space-y-1">
        <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-[#0a2533] sm:text-[1.75rem]">
          <Sparkles
            className="size-6 shrink-0 fill-none stroke-brand-pink stroke-[1.75]"
            aria-hidden
          />
          Recently Launched
        </h2>
        <p className="text-sm text-[#0a2533]/75 sm:text-base">
          Discover the latest products from our community
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:drop-shadow-xl"
          >
            <ProductCard
              product={product}
              mostRecent={product.id === mostRecentId}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
