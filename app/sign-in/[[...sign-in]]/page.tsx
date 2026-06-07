import { SignIn } from "@clerk/nextjs";
import { CenteredSpinner } from "@/components/ui/spinner";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Suspense fallback={<CenteredSpinner />}>
        <SignIn />
      </Suspense>
    </div>
  );
}
