"use server"

import { db } from "@/db";
import { products } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { productServerSchema } from "@/lib/validations/product";

export async function addProduct(payload: unknown) {
  const result = productServerSchema.safeParse(payload);

  if (!result.success) {
    return { success: false, error: "Invalid data." };
  }

  try {
    await db.insert(products).values({
      ...result.data,
      status: "pending",
      submittedBy: "anonymous",
    });

    revalidatePath("/");

    return {
      success: true,
      message: "Product submitted! It will be reviewed shortly.",
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("products_slug_idx")) {
      return { success: false, error: "A product with this slug already exists." };
    }
    return { success: false, error: "Something went wrong. Please try again." };
  }
}