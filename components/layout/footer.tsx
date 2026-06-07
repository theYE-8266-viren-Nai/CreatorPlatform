import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const PRODUCT_LINKS = [
  { label: "Explore", href: "/#services" },
  { label: "Trending", href: "/#services" },
  { label: "Submit Project", href: "/submit" },
] as const;

const COMPANY_LINKS = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-pink shadow-md shadow-brand-pink/30 transition-transform duration-300 group-hover:scale-105"
                aria-hidden
              >
                <Sparkles className="h-4 w-4 text-white" strokeWidth={2.4} />
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-800">
                iBuilt<span className="text-brand-pink">This</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A community platform where creators share what they&apos;ve built
              and discover new launches.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Product
            </h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          © 2026 iBuiltThis. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
