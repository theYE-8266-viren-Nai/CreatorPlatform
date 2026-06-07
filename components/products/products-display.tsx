import { getFeaturedProducts } from "@/lib/products/product-select";
import { getMostRecentProduct } from "@/lib/products/utils";
import { ProductCard } from "./product-card";

export default async function ProductsDisplay() {
  const products = await getFeaturedProducts();
  const mostRecentId = getMostRecentProduct(products)?.id; // ← inside component

  if (!products.length) {
    return <p className="px-4 text-center text-slate-600">No products found.</p>;
  }

  return (
    <section
      id="products"
      className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
        Featured Products
      </h2>
      <ul className="grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:drop-shadow-xl"
          >
            <ProductCard
              product={product}
              featured
              mostRecent={product.id === mostRecentId}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}