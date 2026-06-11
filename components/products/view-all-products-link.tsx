import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ViewAllProductsLinkProps = {
  className?: string;
};

export function ViewAllProductsLink({ className }: ViewAllProductsLinkProps) {
  return (
    <Button
      variant="outline"
      asChild
      className={cn(
        "h-10 shrink-0 self-start rounded-lg border-[#0a2533]/25 bg-[#faf8f2] px-4 text-sm font-medium text-[#0a2533] shadow-none hover:bg-white/80",
        className
      )}
    >
      <Link href="/products">
        View All
        <ArrowUpRight className="size-4" aria-hidden />
      </Link>
    </Button>
  );
}
