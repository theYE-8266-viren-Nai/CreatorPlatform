import type { InferSelectModel } from "drizzle-orm";

import { products } from "@/db/schema";
import { formatLaunchDate } from "@/lib/products/utils";
import { PRODUCT_STATUSES } from "@/lib/validations/product";

export type AdminProductStatus = (typeof PRODUCT_STATUSES)[number];

export type AdminProduct = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  submittedBy: string;
  submittedAt: string;
  websiteUrl?: string;
  status: AdminProductStatus;
};

export type AdminProductStats = {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
};

type DbProduct = InferSelectModel<typeof products>;

function toAdminProductStatus(status: string | null): AdminProductStatus {
  if (status === "approved" || status === "rejected" || status === "pending") {
    return status;
  }

  return "pending";
}

export function toAdminProduct(product: DbProduct): AdminProduct {
  return {
    id: product.id,
    name: product.name,
    description: product.description ?? "",
    tags: product.tags ?? [],
    submittedBy: product.submittedBy ?? "anonymous",
    submittedAt: formatLaunchDate(product.createdAt),
    websiteUrl: product.websiteUrl ?? undefined,
    status: toAdminProductStatus(product.status),
  };
}

export function getAdminProductStats(products: AdminProduct[]): AdminProductStats {
  return {
    total: products.length,
    pending: products.filter((product) => product.status === "pending").length,
    approved: products.filter((product) => product.status === "approved").length,
    rejected: products.filter((product) => product.status === "rejected").length,
  };
}

export function getPendingProducts(products: AdminProduct[]) {
  return products.filter((product) => product.status === "pending");
}
