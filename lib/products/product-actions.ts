"use server";

import { db } from "@/db";
import { products } from "@/db/schema";
import { revalidateTag } from "next/cache";
import { productInsertSchema } from "@/lib/validations/product";
import { auth, currentUser } from "@clerk/nextjs/server"; // Import Clerk server helpers

export async function addProduct(payload: unknown) {
  try {
    // 1. Grab authentication details securely from Clerk on the server
    const { userId, orgId, sessionClaims } = await auth();
    console.log({ userId, orgId, sessionClaims }); // ← check your terminal

    const user = await currentUser();

    if (!userId) {
      return { success: false, error: "You must be logged in to submit a product." };
    }
    if (!orgId) {
      return { success: false, error: "You must be a member of a organization to submit a product." };
    }

    // 2. Build out the complete metadata payload matching your schema definitions
    const fullPayload = {
      ...(payload as Record<string, any>),
      userId,
      submittedBy: user?.username || user?.firstName || "anonymous",
      organizationId: orgId, // ← add this

    };

    // 3. Validate against productInsertSchema (handles status defaults, metadata, etc.)
    const result = productInsertSchema.safeParse(fullPayload);

    if (!result.success) {
      return { success: false, error: "Invalid data structure." };
    }

    // 4. Insert the clean, verified data into Neon DB via Drizzle
    await db.insert(products).values({
      name: result.data.name,
      slug: result.data.slug,
      tagline: result.data.tagline ?? null,
      description: result.data.description ?? null,
      websiteUrl: result.data.websiteUrl,
      tags: result.data.tags,
      userId: result.data.userId ?? null,
      organizationId: result.data.organizationId ?? null ,  // ← now safely populated
      submittedBy: result.data.submittedBy,
      status: "pending", // Hardcoding default state for new entries
    });

    // 5. Instantly bust the tag cache so the application pulls fresh data from Neon
    revalidateTag("products", {});

    return {
      success: true,
      message: "Product submitted! It will be reviewed shortly.",
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("products_slug_idx")) {
      return { success: false, error: "A product with this slug already exists." };
    }
    console.error("Database Insertion Error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}