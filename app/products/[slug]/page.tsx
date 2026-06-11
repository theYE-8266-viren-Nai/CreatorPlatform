import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/products/product-detail";
import {
  getFeaturedProducts,
  getProductBySlug,
} from "@/lib/products/product-select";

export async function generateStaticParams() {
  const products = await getFeaturedProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found — iBuiltThis" };
  }

  return {
    title: `${product.name} — iBuiltThis`,
    description: product.tagline ?? product.description ?? undefined,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="hero-gradient min-h-screen pt-16 font-sans">
      <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ProductDetail product={product} />
      </main>
    </div>
  );
}
