"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addProduct } from "@/lib/products/product-actions";
import {
  parseProductTagsInput,
  productSubmitFormSchema,
  type ProductSubmitFormValues,
} from "@/lib/validations/product";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ProductSubmitForm() {
  const form = useForm<ProductSubmitFormValues>({
    resolver: zodResolver(productSubmitFormSchema),
    defaultValues: {
      name: "",
      slug: "",
      tagline: "",
      description: "",
      websiteUrl: "",
      tags: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  // remove "use server" and add async
  async function onSubmit(values: ProductSubmitFormValues) {
    const payload = {
      ...values,
      tags: parseProductTagsInput(values.tags),
    };
    const result = await addProduct(payload);

    if (result?.error) {
      form.setError("slug", { message: result.error });
      return;
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Product Name <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="My Awesome Product"
                  className="h-10 bg-white"
                  {...field}
                  onChange={(event) => {
                    field.onChange(event);
                    if (!form.getFieldState("slug").isDirty) {
                      form.setValue("slug", slugify(event.target.value), {
                        shouldValidate: true,
                      });
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Slug <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="my-awesome-product"
                  className="h-10 bg-white"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                URL-friendly version of your product name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tagline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tagline</FormLabel>
              <FormControl>
                <Input
                  placeholder="A brief, catchy description"
                  className="h-10 bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about your product..."
                  className="min-h-28 bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="websiteUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Website URL <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="https://yourproduct.com"
                  className="h-10 bg-white"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter your product&apos;s website or landing page
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input
                  placeholder="AI, SaaS, Productivity"
                  className="h-10 bg-white"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Comma-separated tags (e.g., AI, SaaS, Productivity)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="h-11 w-full bg-brand-pink text-base font-semibold shadow-md shadow-brand-pink/20 hover:bg-brand-pink/90"
        >
          {isSubmitting ? (
            <>
              <Spinner className="size-4 text-white" />
              Submitting...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" aria-hidden />
              Submit Product
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
