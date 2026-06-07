import { CenteredSpinner } from "@/components/ui/spinner";

export function ProductDetailLoading() {
  return (
    <main
      className="hero-gradient min-h-screen px-4 py-24 sm:px-6 lg:px-8"
      role="status"
      aria-label="Loading product"
    >
      <div className="mx-auto max-w-2xl">
        <div className="h-5 w-24 rounded-md bg-slate-300/60 animate-pulse" />
        <div className="mt-6 h-10 w-3/4 rounded-md bg-slate-300/70 animate-pulse" />
        <div className="mt-5 space-y-3">
          <div className="h-4 w-full rounded-md bg-slate-300/60 animate-pulse" />
          <div className="h-4 w-11/12 rounded-md bg-slate-300/60 animate-pulse" />
          <div className="h-4 w-2/3 rounded-md bg-slate-300/60 animate-pulse" />
        </div>
        <div className="mt-8 flex items-center gap-3">
          <CenteredSpinner className="min-h-0 justify-start" />
          <div className="h-4 w-20 rounded-md bg-slate-300/50 animate-pulse" />
        </div>
      </div>
    </main>
  );
}
