import { ProductListLoading } from "@/components/products/product-list-loading";

export default function ProductsLoading() {
  return (
    <div className="hero-gradient min-h-screen pt-16 font-sans">
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="h-4 w-28 animate-pulse rounded-md bg-[#0a2533]/10" />
        <div className="mt-6 space-y-2">
          <div className="h-8 w-48 animate-pulse rounded-md bg-[#0a2533]/12" />
          <div className="h-4 w-72 animate-pulse rounded-md bg-[#0a2533]/10" />
        </div>
        <div className="mt-10">
          <ProductListLoading />
        </div>
      </main>
    </div>
  );
}
