import { cn } from "@/lib/utils";

import type { AdminProductStatus } from "./types";

type AdminStatusBadgeProps = {
  status: AdminProductStatus;
  className?: string;
};

const statusStyles: Record<AdminProductStatus, string> = {
  approved: "border-[#b8dfc4] bg-[#e6f6ea] text-[#1f6b3a]",
  pending: "border-[#f0e0a8] bg-[#fdf6dc] text-[#8a6d00]",
  rejected: "border-[#f5c6cb] bg-[#fde8ea] text-[#b42318]",
};

export function AdminStatusBadge({ status, className }: AdminStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold capitalize",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}
