import { SignUp } from "@clerk/nextjs";
import { CenteredSpinner } from "@/components/ui/spinner";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Suspense fallback={<CenteredSpinner />}>
        <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
      </Suspense>
    </div>
  );
}
