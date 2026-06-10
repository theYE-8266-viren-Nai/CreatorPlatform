// components/products/product-page-skeleton.tsx
export function ProductPageSkeleton() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 animate-pulse">
        {/* title */}
        <div className="h-9 w-2/3 rounded-md bg-muted" />
        {/* tagline */}
        <div className="h-5 w-1/2 rounded-md bg-muted" />
        {/* tags */}
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-full bg-muted" />
          <div className="h-6 w-20 rounded-full bg-muted" />
          <div className="h-6 w-14 rounded-full bg-muted" />
        </div>
        {/* description */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded-md bg-muted" />
          <div className="h-4 w-5/6 rounded-md bg-muted" />
          <div className="h-4 w-4/6 rounded-md bg-muted" />
        </div>
        {/* button */}
        <div className="h-11 w-36 rounded-md bg-muted" />
      </div>
    </div>
  );
}