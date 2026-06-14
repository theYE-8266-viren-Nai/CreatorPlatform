import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { ProductAdminPanel } from "@/components/admin/product-admin-panel";
import { getIsAdmin } from "@/lib/auth/is-admin";

export async function AdminContent() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <div className="hero-gradient flex min-h-screen flex-col pt-16 font-sans">
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <ProductAdminPanel />
      </main>
    </div>
  );
}
