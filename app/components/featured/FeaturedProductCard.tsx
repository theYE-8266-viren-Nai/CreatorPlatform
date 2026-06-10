import { Star } from "lucide-react";
import Link from "next/link";
import type { InferSelectModel } from "drizzle-orm";

import { products } from "@/db/schema";
import { cn } from "@/lib/utils";

import { VoteWidget } from "./VoteWidget";

type Product = InferSelectModel<typeof products>;

type FeaturedProductCardProps = {
  product: Product;
  className?: string;
  featured?: boolean;
  isNew?: boolean;
};

export function FeaturedProductCard({
  product,
  className,
  featured = true,
  isNew = false,
}: FeaturedProductCardProps) {
  return (
    <article
      className={cn(
        "group flex gap-4 rounded-2xl border border-[#0a2533]/15 bg-white/60 p-5 shadow-sm transition-shadow hover:shadow-md sm:gap-6 sm:p-6",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold leading-snug text-[#0a2533]">
            <Link
              href={`/products/${product.slug}`}
              className="transition-colors hover:text-brand-pink"
            >
              {product.name}
            </Link>
          </h3>
          {featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-pink px-2.5 py-0.5 text-[11px] font-semibold text-white">
              <Star className="size-3 fill-white stroke-white" aria-hidden />
              Featured
            </span>
          )}
          {isNew && (
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[11px] font-medium text-green-700">
              New
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-[#0a2533]/70">
          {product.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-1">
          {(product.tags ?? []).map((tag) => (
            <li key={tag}>
              <span className="inline-block rounded-full bg-brand-teal px-2.5 py-0.5 text-[10px] font-bold text-[#0a2533]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <VoteWidget initialVotes={product.voteCount} className="pt-0.5" />
    </article>
  );
}
