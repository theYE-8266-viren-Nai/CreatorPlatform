"use server"

import { db } from '@/db';
import { products } from '@/db/schema';
import { eq } from 'drizzle-orm';
import React from 'react'
export const approveProductAction = async (productId: string) => {
  try {
    console.log("Approve product", productId);
    await db
      .update(products)
      .set({ status: "approved" })
      .where(eq(products.id, parseInt(productId)))
    return {
      success: true,
      message: "Product approved successfully"
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to approve a product"
    }
  }
}
export const rejectProjectAction = async (productId: string) => {
  try {
    console.log("Reject Product", productId);
    await db
      .update(products)
      .set({ status: "rejected" })
      .where(eq(products.id, parseInt(productId)))
    return {
      success: true,
      message: "Product rejected successfully"
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to reject a product"
    }
  }

}
export const deleteProductAction = async (productId: string) => {
  try {
    console.log("deleted Product", productId)
    await db
      .delete(products)
      .where(eq(products.id, Number(productId)));
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to delete a product"
    }
  }
}