import { Sparkles, CalendarDays } from "lucide-react";

import { recentlyLaunchedProducts } from "@/constants";

import { FeaturedProductCard } from "./FeaturedProductCard";

export function RecentlyLaunchedSection() {
  if (!recentlyLaunchedProducts.length) {
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

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {recentlyLaunchedProducts.map((product) => (
          <li key={product.id}>
            <FeaturedProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
