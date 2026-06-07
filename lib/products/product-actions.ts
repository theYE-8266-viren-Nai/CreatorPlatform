"use server"

import { db } from "@/db";
import { products } from "@/db/schema";
import { productCreateSchema } from "@/lib/validations/product";
import { redirect } from "next/navigation";

export async function addProduct(payload: unknown) {
  const parsed = productCreateSchema.safeParse(payload);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return { error: firstIssue?.message ?? "Invalid product data." };
  }

  try {
    await db.insert(products).values({
      ...parsed.data,
      status: "pending",
      submittedBy: "anonymous",
    });
  } catch (error) {
    // duplicate slug — unique index violation
    if (error instanceof Error && error.message.includes("products_slug_idx")) {
      return { error: "A product with this slug already exists. Please choose a different slug." };
    }

    return { error: "Something went wrong. Please try again." };
  }

  redirect("/");
}