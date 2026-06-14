import { Suspense } from "react";

import { CenteredSpinner } from "@/components/ui/spinner";

import { AdminContent } from "./admin-content";

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <div className="hero-gradient flex min-h-screen items-center justify-center">
          <CenteredSpinner />
        </div>
      }
    >
      <AdminContent />
    </Suspense>
  );
}
