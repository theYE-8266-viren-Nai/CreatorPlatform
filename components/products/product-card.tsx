import type { InferSelectModel } from "drizzle-orm";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from "@/db/schema";
import { FeaturedBadge } from "./featured-badge";

type Product = InferSelectModel<typeof products>;
type ProductCardProps = {
  product: Product;
  featured?: boolean;
  mostRecent?: boolean;
};

export function ProductCard({ product, featured = false, mostRecent = false }: ProductCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle>
            <Link
              href={`/products/${product.slug}`}
              className="hover:text-brand-pink"
            >
              {product.name}
            </Link>
          </CardTitle>
          {featured && <FeaturedBadge />}
          {mostRecent && ( // ← swapped from isNew
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              New
            </span>
          )}
        </div>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {(product.tags ?? []).map((tag) => (
            <Badge key={tag} variant="tag">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <span className="text-sm font-medium text-slate-700">
          {product.voteCount} votes
        </span>
      </CardFooter>
    </Card>
  );
}