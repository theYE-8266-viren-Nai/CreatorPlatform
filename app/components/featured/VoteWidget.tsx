"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type VoteWidgetProps = {
  initialVotes: number;
  className?: string;
};

export function VoteWidget({ initialVotes, className }: VoteWidgetProps) {
  const [votes, setVotes] = useState(initialVotes);

  return (
    <div
      className={cn(
        "flex shrink-0 flex-col items-center justify-center gap-0.5",
        className
      )}
      aria-label={`${votes} votes`}
    >
      <button
        type="button"
        onClick={() => setVotes((v) => v + 1)}
        className="rounded p-0.5 text-brand-pink transition-colors hover:bg-brand-pink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/40"
        aria-label="Upvote"
      >
        <ChevronUp className="size-5 stroke-[2.5]" />
      </button>
      <span className="min-w-[1.25rem] text-center text-base font-bold text-[#0a2533] tabular-nums">
        {votes}
      </span>
      <button
        type="button"
        onClick={() => setVotes((v) => Math.max(0, v - 1))}
        className="rounded p-0.5 text-brand-pink transition-colors hover:bg-brand-pink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/40"
        aria-label="Downvote"
      >
        <ChevronDown className="size-5 stroke-[2.5]" />
      </button>
    </div>
  );
}
