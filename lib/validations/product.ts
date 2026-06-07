import { z } from "zod";

/** Matches varchar("status", { length: 20 }).default("pending") */
export const PRODUCT_STATUSES = ["pending", "approved", "rejected"] as const;

export const productStatusSchema = z.enum(PRODUCT_STATUSES);

/** varchar("name", { length: 120 }).notNull() */
export const productNameSchema = z
  .string()
  .min(1, "Product name is required")
  .max(120, "Product name must be 120 characters or less");

/** varchar("slug", { length: 140 }).notNull() + uniqueIndex */
export const productSlugSchema = z
  .string()
  .min(1, "Slug is required")
  .max(140, "Slug must be 140 characters or less")
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Use lowercase letters, numbers, and hyphens only"
  );

/** varchar("tagline", { length: 200 }) */
export const productTaglineSchema = z
  .string()
  .max(200, "Tagline must be 200 characters or less");

/** text("description") */
export const productDescriptionSchema = z.string();

/** text("website_url") */
export const productWebsiteUrlSchema = z
  .string()
  .min(1, "Website URL is required")
  .url("Enter a valid URL (include https://)");

/** json("tags").$type<string[]>() */
export const productTagsSchema = z.array(z.string().min(1).max(50));

/** varchar("submitted_by", { length: 120 }).default("anonymous") */
export const productSubmittedBySchema = z.string().max(120);

/** varchar("user_id", { length: 255 }) */
export const productUserIdSchema = z.string().max(255);

/** varchar("organization_id", { length: 255 }) */
export const productOrganizationIdSchema = z.string().max(255);

/** integer("vote_count").notNull().default(0) */
export const productVoteCountSchema = z.number().int().min(0);

/** User-submitted payload — validated before db.insert() */
export const productCreateSchema = z.object({
  name: productNameSchema,
  slug: productSlugSchema,
  tagline: productTaglineSchema.optional(),
  description: productDescriptionSchema.optional(),
  websiteUrl: productWebsiteUrlSchema,
  tags: productTagsSchema.default([]),
});

/** All insertable columns, including server-set metadata */
export const productInsertSchema = productCreateSchema.extend({
  status: productStatusSchema.default("pending"),
  submittedBy: productSubmittedBySchema.default("anonymous"),
  userId: productUserIdSchema.optional(),
  organizationId: productOrganizationIdSchema.optional(),
});

/** Partial fields for updates */
export const productUpdateSchema = productInsertSchema.partial();

/** Full row shape returned from db.select() */
export const productSelectSchema = z.object({
  id: z.number().int().positive(),
  name: productNameSchema,
  slug: productSlugSchema,
  tagline: productTaglineSchema.nullable(),
  description: productDescriptionSchema.nullable(),
  websiteUrl: z.string().nullable(),
  tags: productTagsSchema.nullable(),
  voteCount: productVoteCountSchema,
  createdAt: z.date().nullable(),
  approvedAt: z.date().nullable(),
  status: productStatusSchema.nullable(),
  submittedBy: productSubmittedBySchema.nullable(),
  userId: productUserIdSchema.nullable(),
  organizationId: productOrganizationIdSchema.nullable(),
});

/** Client form — tags entered as a comma-separated string */
export const productSubmitFormSchema = productCreateSchema
  .omit({ tags: true })
  .extend({
    tags: z.string().optional(),
  });

export function parseProductTagsInput(tags?: string): string[] {
  if (!tags) return [];
  return tags.split(",").map((tag) => tag.trim()).filter(Boolean);
}

export type ProductCreateInput = z.infer<typeof productCreateSchema>;
export type ProductInsertInput = z.infer<typeof productInsertSchema>;
export type ProductUpdateInput = z.infer<typeof productUpdateSchema>;
export type ProductSelect = z.infer<typeof productSelectSchema>;
export type ProductSubmitFormValues = z.infer<typeof productSubmitFormSchema>;
