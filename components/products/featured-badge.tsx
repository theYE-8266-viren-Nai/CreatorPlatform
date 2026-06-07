import { Star } from "lucide-react";

export function FeaturedBadge() {
  return (
    <span className="inline-flex items-center justify-center gap-1 rounded-full bg-brand-pink px-3 py-1 text-xs font-semibold text-white">
      <Star className="size-3 shrink-0 fill-white stroke-white" aria-hidden />
      Featured
    </span>
  );
}
