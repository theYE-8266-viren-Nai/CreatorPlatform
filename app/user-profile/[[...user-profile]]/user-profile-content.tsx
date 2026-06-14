"use client";

import { UserProfile } from "@clerk/nextjs";
import { Shield } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, Suspense, useEffect } from "react";

import { CenteredSpinner } from "@/components/ui/spinner";

type UserProfileContentProps = {
  isAdmin: boolean;
  adminPanel: ReactNode;
};

export function UserProfileContent({ isAdmin, adminPanel }: UserProfileContentProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin && pathname.includes("product-admin")) {
      router.replace("/user-profile");
    }
  }, [isAdmin, pathname, router]);

  return (
    <div className="hero-gradient flex min-h-screen items-start justify-center px-4 py-20 sm:px-6 sm:py-24">
      <Suspense
        fallback={
          <div className="flex min-h-[28rem] w-full max-w-4xl items-center justify-center">
            <CenteredSpinner />
          </div>
        }
      >
        <UserProfile routing="path" path="/user-profile">
          {isAdmin ? (
            <UserProfile.Page
              label="Product Admin"
              url="product-admin"
              labelIcon={<Shield className="size-4" aria-hidden />}
            >
              {adminPanel}
            </UserProfile.Page>
          ) : null}
        </UserProfile>
      </Suspense>
    </div>
  );
}
