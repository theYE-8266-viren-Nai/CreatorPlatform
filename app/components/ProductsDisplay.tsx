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
import { featuredProducts } from "@/constants";

export default function ProductsDisplay() {
    const products = featuredProducts.filter((product) => product.isFeatured);

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
                    <li key={product.id}>
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="hover:text-brand-pink"
                                    >
                                        {product.name}
                                    </Link>
                                </CardTitle>
                                <CardDescription>{product.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {product.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <span className="text-sm font-medium text-slate-700">
                                    {product.votes} votes
                                </span>
                            </CardFooter>
                        </Card>
                    </li>
                ))}
            </ul>
        </section>
    );
}
