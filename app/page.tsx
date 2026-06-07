import { Suspense } from "react";

import HeroSection from "./components/HeroSection";
import ProductsDisplay from "@/components/products/products-display";
import { ProductListLoading } from "@/components/products/product-list-loading";
import RecentlyLaunched from "./components/RecentlyLaunched";

/**
 * Home page: full-viewport hero with streamed product sections.
 */
export default function Home() {
  return (
    <div className="hero-gradient min-h-screen font-sans">
      <HeroSection />
      <Suspense fallback={<ProductListLoading title="Featured Products" />}>
        <ProductsDisplay />
      </Suspense>
      <Suspense fallback={<ProductListLoading />}>
        <RecentlyLaunched />
      </Suspense>
    </div>
  );
}
