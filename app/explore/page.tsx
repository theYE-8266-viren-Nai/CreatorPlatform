// page.tsx
import ProductExplorer from "../../components/products/Prouduct-explorer";
import { getAllProducts } from "@/lib/products/product-select";

export default async function Page() {
  const products = await getAllProducts();
  return <ProductExplorer products={products} />;
}