import { db } from "@/db";
import { products } from "@/db/schema";
import { eq, and, gte, desc } from "drizzle-orm";
import { cacheLife, cacheTag } from "next/cache";

export async function getFeaturedProducts() {
  "use cache";
  cacheLife("hours");
  cacheTag("products", "featured-products");

  const productsData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved")); // only show approved products
      console.log(productsData);

  return productsData;
}

export async function getRecentlyLaunchedProducts(daysAgo: number = 7) {
  "use cache";
  cacheLife("minutes");
  cacheTag("products", "recently-launched-products");

  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysAgo);

  const productsData = await db
    .select()
    .from(products)
    .where(
      and(
        eq(products.status, "approved"),
        gte(products.approvedAt, cutoffDate)
      )
    )
    .orderBy(desc(products.approvedAt));
    
  return productsData;
}

export async function getProductBySlug(slug: string) {
  "use cache";
  cacheLife("hours");
  cacheTag("products", `product-${slug}`);

  const [product] = await db
    .select()
    .from(products)
    .where(and(eq(products.status, "approved"), eq(products.slug, slug)))
    .limit(1);

  return product ?? null;
}
