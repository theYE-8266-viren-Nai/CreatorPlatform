"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { approveProductAction, rejectProjectAction, deleteProductAction } from "@/lib/products/adminActions";

export default function AdminProductActions({
  status,
  productId,
}: {
  status: string;
  productId: string;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleApprove = () => {
    startTransition(async () => {
      await approveProductAction(productId);
      router.refresh(); // ← re-fetches server data, updates UI instantly
    });
  };

  const handleReject = () => {
    startTransition(async () => {
      await rejectProjectAction(productId);
      router.refresh();
    });
  };

  const handleDelete = () => {
    startTransition(async () => {
      await deleteProductAction(productId);
      router.refresh();
    });
  };

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {status === "pending" && (
        <>
          <Button
            onClick={handleApprove}
            type="button"
            size="sm"
            disabled={isPending}
            className="h-8 bg-[#1f6b3a] px-3 text-xs font-semibold text-white hover:bg-[#1f6b3a]/90"
          >
            {isPending ? "Approving..." : "Approve"}
          </Button>
          <Button
            onClick={handleReject}
            type="button"
            variant="outline"
            size="sm"
            disabled={isPending}
            className="h-8 border-[#b42318]/30 px-3 text-xs font-semibold text-[#b42318] hover:bg-[#fde8ea]"
          >
            {isPending ? "Rejecting..." : "Reject"}
          </Button>
        </>
      )}
      <Button
        onClick={handleDelete}
        type="button"
        variant="outline"
        size="sm"
        disabled={isPending}
        className="h-8 border-[#0a2533]/20 px-3 text-xs font-medium text-[#0a2533]/80 hover:bg-[#0a2533]/5"
      >
        <Trash2 className="size-3.5" aria-hidden />
        {isPending ? "Deleting..." : "Delete"}
      </Button>
    </div>
  );
}