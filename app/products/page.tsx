import { Package } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { AllProductsSection } from "@/components/products/all-products-section";
import { ProductListLoading } from "@/components/products/product-list-loading";

export const metadata = {
  title: "All Products — iBuiltThis",
  description: "Browse every approved product from the iBuiltThis community.",
};

export default function ProductsPage() {
  return (
    <div className="hero-gradient min-h-screen pt-16 font-sans">
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm text-[#0a2533]/70 transition-colors hover:text-brand-pink"
        >
          ← Back to home
        </Link>

        <header className="mt-6 space-y-1">
          <h1 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-[#0a2533] sm:text-[1.75rem]">
            <Package
              className="size-6 shrink-0 stroke-brand-pink stroke-[1.75]"
              aria-hidden
            />
            All Products
          </h1>
          <p className="text-sm text-[#0a2533]/75 sm:text-base">
            Explore everything our community has built
          </p>
        </header>

        <div className="mt-10">
          <Suspense fallback={<ProductListLoading />}>
            <AllProductsSection />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
