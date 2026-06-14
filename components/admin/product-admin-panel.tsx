import { Inbox, Shield } from "lucide-react";

import { AdminProductRow } from "./admin-product-row";
import { AdminStatCard } from "./admin-stat-card";
import {
  getAdminProductStats,
  getPendingProducts,
} from "./types";
import { getAdminProducts } from "@/lib/products/admin-product-select";

export async function ProductAdminPanel() {
  const allProducts = await getAdminProducts();
  const stats = getAdminProductStats(allProducts);
  const pendingProducts = getPendingProducts(allProducts);

  return (
    <div className="flex w-full flex-col gap-8 px-1 py-2 sm:px-2">
      <header className="space-y-1">
        <h1 className="flex items-center gap-2 text-xl font-bold text-[#0a2533] sm:text-2xl">
          <Shield
            className="size-5 shrink-0 stroke-brand-pink stroke-[1.75]"
            aria-hidden
          />
          Product Admin
        </h1>
        <p className="text-sm text-[#0a2533]/65">
          Review and manage submitted products
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <AdminStatCard label="Total" value={stats.total} tone="total" />
        <AdminStatCard label="Pending" value={stats.pending} tone="pending" />
        <AdminStatCard label="Approved" value={stats.approved} tone="approved" />
        <AdminStatCard label="Rejected" value={stats.rejected} tone="rejected" />
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-[#0a2533]">
          Pending Approval ({pendingProducts.length})
        </h2>

        {pendingProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-[#0a2533]/15 bg-[#faf8f2] px-6 py-12 text-center">
            <Inbox
              className="size-10 text-[#0a2533]/35 sm:size-11"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="mt-4 text-sm font-medium text-[#0a2533]/60">
              No pending products to review
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {pendingProducts.map((product) => (
              <li key={product.id}>
                <AdminProductRow product={product} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-[#0a2533]">All Products</h2>
        {allProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-[#0a2533]/15 bg-[#faf8f2] px-6 py-12 text-center">
            <Inbox
              className="size-10 text-[#0a2533]/35 sm:size-11"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="mt-4 text-sm font-medium text-[#0a2533]/60">
              No products submitted yet
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {allProducts.map((product) => (
              <li key={product.id}>
                <AdminProductRow product={product} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
