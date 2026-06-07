import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type SpinnerProps = {
  className?: string;
};

export function Spinner({ className }: SpinnerProps) {
  return (
    <LoaderCircle
      className={cn("size-5 animate-spin text-brand-pink", className)}
      aria-hidden
    />
  );
}

export function CenteredSpinner({ className }: SpinnerProps) {
  return (
    <div
      className={cn("flex min-h-48 items-center justify-center", className)}
      role="status"
      aria-label="Loading"
    >
      <Spinner className="size-7" />
    </div>
  );
}
