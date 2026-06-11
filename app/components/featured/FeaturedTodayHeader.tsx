import { Star } from "lucide-react";

import { ViewAllProductsLink } from "@/components/products/view-all-products-link";

export function FeaturedTodayHeader() {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-1">
        <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-[#0a2533] sm:text-[1.75rem]">
          <Star
            className="size-6 shrink-0 fill-none stroke-brand-pink stroke-[1.75]"
            aria-hidden
          />
          Featured Today
        </h2>
        <p className="text-sm text-[#0a2533]/75 sm:text-base">
          Top picks from our community this week
        </p>
      </div>

      <ViewAllProductsLink />
    </header>
  );
}
