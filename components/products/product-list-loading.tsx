type ProductListLoadingProps = {
  title?: string;
};

export function ProductListLoading({ title }: ProductListLoadingProps) {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8"
      role="status"
      aria-label="Loading products"
    >
      {title && (
        <div className="mb-8 flex justify-center">
          <div className="h-9 w-56 rounded-md bg-[#0a2533]/10 animate-pulse" />
        </div>
      )}
      <ul className="grid gap-6 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <li
            key={index}
            className="h-56 rounded-lg border border-[#0a2533]/10 bg-white/70 p-6 shadow-sm"
          >
            <div className="flex h-full flex-col gap-5 animate-pulse">
              <div className="space-y-3">
                <div className="h-6 w-2/3 rounded-md bg-[#0a2533]/12" />
                <div className="h-4 w-full rounded-md bg-[#0a2533]/10" />
                <div className="h-4 w-5/6 rounded-md bg-[#0a2533]/10" />
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="h-6 w-16 rounded-full bg-brand-teal/50" />
                <div className="h-6 w-24 rounded-full bg-brand-teal/40" />
                <div className="h-6 w-20 rounded-full bg-brand-teal/30" />
              </div>
              <div className="mt-auto h-4 w-20 rounded-md bg-[#0a2533]/10" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
