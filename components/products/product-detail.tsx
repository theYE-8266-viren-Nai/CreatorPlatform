import type { InferSelectModel } from "drizzle-orm";
import { Calendar, ExternalLink, Star, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { products } from "@/db/schema";
import { formatLaunchDate } from "@/lib/products/utils";

import { ProductSupportSection } from "./product-support-section";

type Product = InferSelectModel<typeof products>;

type ProductDetailProps = {
  product: Product;
  featured?: boolean;
};

export function ProductDetail({ product, featured = true }: ProductDetailProps) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
      <Link
        href="/products"
        className="inline-flex w-fit text-sm font-medium text-[#0a2533]/70 transition-colors hover:text-brand-pink"
      >
        ← Back to Explore
      </Link>

      <header className="space-y-4">
        <div className="flex items-start gap-3">
          <Star
            className="mt-1 size-7 shrink-0 fill-none stroke-brand-pink stroke-[1.75]"
            aria-hidden
          />
          <div className="min-w-0 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-[#0a2533] sm:text-4xl">
              {product.name}
            </h1>
            {product.tagline && (
              <p className="text-base text-[#0a2533]/75 sm:text-lg">
                {product.tagline}
              </p>
            )}
          </div>
        </div>

        {(product.tags ?? []).length > 0 && (
          <ul className="flex flex-wrap gap-2 pl-10">
            {(product.tags ?? []).map((tag) => (
              <li key={tag}>
                <span className="inline-block rounded-full bg-brand-teal px-3 py-1 text-xs font-bold text-[#0a2533]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        )}
      </header>

      {product.description && (
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0a2533]">About</h2>
          <p className="text-sm leading-relaxed text-[#0a2533]/80 sm:text-base">
            {product.description}
          </p>
        </section>
      )}

      <section className="rounded-xl border border-[#0a2533]/15 bg-[#fde8ef] p-5 sm:p-6">
        <h2 className="text-base font-bold text-[#0a2533]">Product Details</h2>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-3 text-sm text-[#0a2533]/85">
            <Calendar
              className="size-4 shrink-0 text-[#0a2533]/60"
              aria-hidden
            />
            <span>
              <span className="font-semibold text-[#0a2533]">Launched:</span>{" "}
              {formatLaunchDate(product.approvedAt)}
            </span>
          </li>
          <li className="flex items-center gap-3 text-sm text-[#0a2533]/85">
            <User className="size-4 shrink-0 text-[#0a2533]/60" aria-hidden />
            <span>
              <span className="font-semibold text-[#0a2533]">Submitted by:</span>{" "}
              {product.submittedBy ?? "anonymous"}
            </span>
          </li>
        </ul>
      </section>

      <ProductSupportSection
        productId={product.id}
        initialVotes={product.voteCount}
        featured={featured}
      />

      {product.websiteUrl && (
        <Button
          asChild
          variant="outline"
          className="h-12 w-full rounded-xl border-[#0a2533]/25 bg-[#faf8f2] text-sm font-medium text-[#0a2533] shadow-none hover:bg-white/80"
        >
          <a
            href={product.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
            <ExternalLink className="size-4" aria-hidden />
          </a>
        </Button>
      )}
    </div>
  );
}
