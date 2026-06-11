"use client";

import { VoteWidget } from "@/app/components/featured/VoteWidget";

type ProductSupportSectionProps = {
  productId: number;
  initialVotes: number;
  featured?: boolean;
};

export function ProductSupportSection({
  productId,
  initialVotes,
  featured = true,
}: ProductSupportSectionProps) {
  return (
    <section className="rounded-xl border border-[#0a2533]/20 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-center text-sm font-medium text-[#0a2533]/80">
        Support this product
      </p>

      <div className="mt-5 flex justify-center">
        <VoteWidget
          key={initialVotes}
          productId={productId}
          initialVotes={initialVotes}
          variant="detail"
        />
      </div>

      {featured && (
        <>
          <hr className="my-6 border-[#0a2533]/10" />
          <div className="flex justify-center">
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-pink px-6 py-2.5 text-sm font-semibold text-white">
              🔥 Featured Product
            </span>
          </div>
        </>
      )}
    </section>
  );
}
