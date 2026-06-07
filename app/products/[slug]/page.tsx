import {
  getFeaturedProducts,
  getProductBySlug,
} from "@/lib/products/product-select";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getFeaturedProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
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
    <main className="hero-gradient min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm text-slate-600 hover:text-brand-pink">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-slate-900">{product.name}</h1>
        <p className="mt-4 text-slate-600">{product.description}</p>
        <p className="mt-6 text-sm font-medium text-slate-700">
          {product.voteCount} votes
        </p>
      </div>
    </main>
  );
}
