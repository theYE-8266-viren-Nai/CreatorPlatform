import { ExternalLink, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { AdminStatusBadge } from "./admin-status-badge";
import type { AdminProduct } from "./types";

type AdminProductRowProps = {
  product: AdminProduct;
  className?: string;
};

export function AdminProductRow({ product, className }: AdminProductRowProps) {
  return (
    <article
      className={cn(
        "rounded-lg border border-[#0a2533]/15 bg-white p-4 sm:p-5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-[#0a2533] sm:text-lg">
          {product.name}
        </h3>
        <AdminStatusBadge status={product.status} />
      </div>

      <p className="mt-2 text-sm leading-relaxed text-[#0a2533]/70">
        {product.description}
      </p>

      <ul className="mt-3 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-full bg-[#dbeafe] px-2.5 py-0.5 text-[11px] font-medium text-[#1e40af]">
              {tag}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#0a2533]/60 sm:text-sm">
        <span>By: {product.submittedBy}</span>
        <span aria-hidden>•</span>
        <span>{product.submittedAt}</span>
        {product.websiteUrl && (
          <>
            <span aria-hidden>•</span>
            <a
              href={product.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#0a2533]/75 transition-colors hover:text-brand-pink"
            >
              Visit Website
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
          </>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {product.status === "pending" && (
          <>
            <Button
              type="button"
              size="sm"
              className="h-8 bg-[#1f6b3a] px-3 text-xs font-semibold text-white hover:bg-[#1f6b3a]/90"
            >
              Approve
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-8 border-[#b42318]/30 px-3 text-xs font-semibold text-[#b42318] hover:bg-[#fde8ea]"
            >
              Reject
            </Button>
          </>
        )}
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 border-[#0a2533]/20 px-3 text-xs font-medium text-[#0a2533]/80 hover:bg-[#0a2533]/5"
        >
          <Trash2 className="size-3.5" aria-hidden />
          Delete
        </Button>
      </div>
    </article>
  );
}
