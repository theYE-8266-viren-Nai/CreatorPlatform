import { Suspense } from "react";

import { ProductListLoading } from "@/components/products/product-list-loading";

import FeaturedToday from "./components/FeaturedToday";
import HeroSection from "./components/HeroSection";
import RecentlyLaunched from "./components/RecentlyLaunched";

/**
 * Home page: full-viewport hero with streamed product sections.
 */
export default async function Home() {

  return (
    <div className="hero-gradient min-h-screen font-sans">
      <HeroSection />
      <Suspense fallback={<ProductListLoading title="Featured Today" />}>
        <FeaturedToday />
      </Suspense>
      <Suspense fallback={<ProductListLoading title="Recently Launched" />}>
        <RecentlyLaunched />
      </Suspense>
    </div>
  );
}
