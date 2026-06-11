export function ProductDetailLoading() {
  return (
    <div className="hero-gradient min-h-screen pt-16 font-sans">
      <main
        className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        role="status"
        aria-label="Loading product"
      >
        <div className="mx-auto flex w-full max-w-2xl animate-pulse flex-col gap-8">
          <div className="h-4 w-32 rounded-md bg-[#0a2533]/10" />

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 size-7 shrink-0 rounded-md bg-brand-pink/20" />
              <div className="flex-1 space-y-3">
                <div className="h-9 w-2/3 rounded-md bg-[#0a2533]/12" />
                <div className="h-5 w-full rounded-md bg-[#0a2533]/10" />
              </div>
            </div>
            <div className="flex gap-2 pl-10">
              <div className="h-7 w-14 rounded-full bg-brand-teal/40" />
              <div className="h-7 w-16 rounded-full bg-brand-teal/30" />
              <div className="h-7 w-14 rounded-full bg-brand-teal/20" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-5 w-16 rounded-md bg-[#0a2533]/12" />
            <div className="space-y-2">
              <div className="h-4 w-full rounded-md bg-[#0a2533]/10" />
              <div className="h-4 w-11/12 rounded-md bg-[#0a2533]/10" />
            </div>
          </div>

          <div className="rounded-xl border border-[#0a2533]/10 bg-[#fde8ef]/60 p-6">
            <div className="h-5 w-32 rounded-md bg-[#0a2533]/12" />
            <div className="mt-4 space-y-3">
              <div className="h-4 w-56 rounded-md bg-[#0a2533]/10" />
              <div className="h-4 w-72 rounded-md bg-[#0a2533]/10" />
            </div>
          </div>

          <div className="rounded-xl border border-[#0a2533]/10 bg-white/70 p-8">
            <div className="mx-auto h-4 w-36 rounded-md bg-[#0a2533]/10" />
            <div className="mx-auto mt-5 flex flex-col items-center gap-2">
              <div className="size-9 rounded-md bg-brand-pink/20" />
              <div className="h-8 w-12 rounded-md bg-brand-pink/30" />
              <div className="size-9 rounded-md bg-brand-pink/20" />
            </div>
            <div className="mx-auto mt-6 h-10 w-full rounded-full bg-brand-pink/30" />
          </div>

          <div className="h-12 w-full rounded-xl bg-[#0a2533]/10" />
        </div>
      </main>
    </div>
  );
}
