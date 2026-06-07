import { Sparkles } from "lucide-react";

import Footer from "@/components/layout/footer";
import ProductSubmitForm from "@/components/products/product-submit-form";

export default function SubmitPage() {
    return (
        <div className="hero-gradient flex min-h-screen flex-col pt-16 font-sans">
            <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8 space-y-2">
                    <div className="flex items-center gap-2">
                        <Sparkles
                            className="h-5 w-5 text-brand-pink"
                            strokeWidth={2.4}
                            aria-hidden
                        />
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Submit Your Product
                        </h1>
                    </div>
                    <p className="text-muted-foreground">
                        Share your creation with the community. Your submission will be
                        reviewed before going live.
                    </p>
                </div>

                <ProductSubmitForm />
            </main>

            <Footer />
        </div>
    );
}
