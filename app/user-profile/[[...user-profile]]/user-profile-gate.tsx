import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { getIsAdmin } from "@/lib/auth/is-admin";
import { ProductAdminPanel } from "@/components/admin/product-admin-panel";

import { UserProfileContent } from "./user-profile-content";

export async function UserProfileGate() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const isAdmin = await getIsAdmin();

  return <UserProfileContent isAdmin={isAdmin} adminPanel={<ProductAdminPanel />} />;
}
