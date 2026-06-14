import { Suspense } from "react";

import { CenteredSpinner } from "@/components/ui/spinner";

import { UserProfileGate } from "./user-profile-gate";

export default function UserProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="hero-gradient flex min-h-screen items-center justify-center px-4 py-20">
          <CenteredSpinner />
        </div>
      }
    >
      <UserProfileGate />
    </Suspense>
  );
}
