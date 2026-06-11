"use client";

import { useOptimistic, useState, useTransition } from "react";
import { useAuth } from "@clerk/nextjs";
import { ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";

import {
  downvoteProductAction,
  upvoteProductAction,
} from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";

type VoteWidgetProps = {
  productId: number;
  initialVotes: number;
  className?: string;
  variant?: "compact" | "detail";
};

export function VoteWidget({
  productId,
  initialVotes,
  className,
  variant = "compact",
}: VoteWidgetProps) {
  const [committedVotes, setCommittedVotes] = useState(initialVotes);
  const [isPending, startTransition] = useTransition();
  const [optimisticVotes, applyOptimisticVote] = useOptimistic(
    committedVotes,
    (currentVotes, delta: number) => Math.max(0, currentVotes + delta)
  );
  const { isLoaded, isSignedIn } = useAuth();

  function handleVote(delta: 1 | -1) {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      toast.error("You must be logged in to vote.");
      return;
    }

    startTransition(async () => {
      applyOptimisticVote(delta);

      const result =
        delta === 1
          ? await upvoteProductAction(String(productId))
          : await downvoteProductAction(String(productId));

      if (result.success) {
        setCommittedVotes(result.voteCount);
        return;
      }

      toast.error(result.message);
    });
  }

  const isDetail = variant === "detail";

  return (
    <div
      className={cn(
        "flex shrink-0 flex-col items-center justify-center",
        isDetail ? "gap-1" : "gap-0.5",
        className
      )}
      aria-label={`${optimisticVotes} votes`}
    >
      <button
        type="button"
        onClick={() => handleVote(1)}
        disabled={isPending || !isLoaded}
        className={cn(
          "text-brand-pink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/40 disabled:cursor-not-allowed disabled:opacity-50",
          isDetail
            ? "rounded-md bg-brand-pink/10 p-1.5 hover:bg-brand-pink/20"
            : "rounded p-0.5 hover:bg-brand-pink/10"
        )}
        aria-label="Upvote"
      >
        <ChevronUp
          className={cn("stroke-[2.5]", isDetail ? "size-6" : "size-5")}
        />
      </button>
      <span
        className={cn(
          "min-w-[1.25rem] text-center font-bold tabular-nums",
          isDetail
            ? "text-2xl text-brand-pink"
            : "text-base text-[#0a2533]"
        )}
      >
        {optimisticVotes}
      </span>
      <button
        type="button"
        onClick={() => handleVote(-1)}
        disabled={isPending || !isLoaded || optimisticVotes === 0}
        className={cn(
          "text-brand-pink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/40 disabled:cursor-not-allowed disabled:opacity-50",
          isDetail
            ? "rounded-md bg-brand-pink/10 p-1.5 hover:bg-brand-pink/20"
            : "rounded p-0.5 hover:bg-brand-pink/10"
        )}
        aria-label="Downvote"
      >
        <ChevronDown
          className={cn("stroke-[2.5]", isDetail ? "size-6" : "size-5")}
        />
      </button>
    </div>
  );
}
