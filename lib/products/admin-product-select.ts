import { db } from "@/db";
import { products } from "@/db/schema";
import { desc } from "drizzle-orm";

import {
  toAdminProduct,
  type AdminProduct,
} from "@/components/admin/types";

export async function getAdminProducts(): Promise<AdminProduct[]> {
  const rows = await db.select().from(products).orderBy(desc(products.createdAt));

  return rows.map(toAdminProduct);
}
