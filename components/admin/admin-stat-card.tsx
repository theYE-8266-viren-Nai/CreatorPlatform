import { cn } from "@/lib/utils";

type AdminStatCardProps = {
  label: string;
  value: number;
  tone: "total" | "pending" | "approved" | "rejected";
};

const toneStyles = {
  total: "border-[#f5c6cb] bg-[#fde8ea]",
  pending: "border-[#f0e0a8] bg-[#fdf6dc]",
  approved: "border-[#b8dfc4] bg-[#e6f6ea]",
  rejected: "border-[#f5c6cb] bg-[#fde8ea]",
} as const;

export function AdminStatCard({ label, value, tone }: AdminStatCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border px-4 py-3 sm:px-5 sm:py-4",
        toneStyles[tone]
      )}
    >
      <p className="text-xs font-medium text-[#0a2533]/65 sm:text-sm">{label}</p>
      <p className="mt-1 text-2xl font-bold text-[#0a2533] sm:text-3xl">
        {value}
      </p>
    </div>
  );
}
