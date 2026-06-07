import Link from "next/link";

/**
 * Hero section: announcement badge, gradient headline, subheadline,
 * primary/secondary CTAs, and optional stats row.
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      {/* ——— Decorative gradient orbs (subtle motion via CSS) ——— */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-pink/20 blur-3xl animate-float-slow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-brand-teal/25 blur-3xl animate-float-slower"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-300/15 blur-3xl animate-pulse-soft"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* ——— Announcement badge ——— */}
        <p
          className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-4 py-1.5 text-sm text-slate-600 shadow-sm backdrop-blur-sm"
          style={{ animationDelay: "100ms" }}
        >
          <span
            className="h-2 w-2 rounded-full bg-brand-pink animate-pulse-soft"
            aria-hidden
          />
          Join thousands of creators sharing their work
        </p>

        {/* ——— Main headline with gradient accent words ——— */}
        <h1
          className="animate-fade-up text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "200ms" }}
        >
          Share What You&apos;ve{" "}
          <span className="bg-gradient-to-r from-violet-600 via-brand-pink to-rose-500 bg-clip-text text-transparent">
            Built
          </span>
          , Discover What&apos;s{" "}
          <span className="bg-gradient-to-r from-brand-pink via-orange-400 to-amber-400 bg-clip-text text-transparent">
            Launching
          </span>
        </h1>

        {/* ——— Subheadline ——— */}
        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:mt-8"
          style={{ animationDelay: "300ms" }}
        >
          A community platform for creators to showcase their apps, AI tools,
          SaaS products, and creative projects. Authentic launches, real
          builders, genuine feedback.
        </p>

        {/* ——— Call-to-action buttons ——— */}
        <div
          className="animate-fade-up mt-10 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center"
          style={{ animationDelay: "400ms" }}
        >
          <Link
            href="/submit"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-pink px-8 text-sm font-semibold text-white shadow-lg shadow-brand-pink/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-pink/40 active:scale-[0.98]"
          >
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21 8 14 2 9.4h7.6L12 2z" />
            </svg>
            Submit Product
          </Link>
          <Link
            href="#services"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-teal px-8 text-sm font-semibold text-slate-800 shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-brand-teal/90 active:scale-[0.98]"
          >
            Explore Services
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* ——— Stats row (social proof) ——— */}
        <div
          className="animate-fade-up mt-16 grid w-full max-w-2xl grid-cols-1 divide-y divide-slate-200/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          style={{ animationDelay: "500ms" }}
        >
          {[
            { value: "2.5K+", label: "Projects Shared", icon: "rocket" },
            { value: "10K+", label: "Active Creators", icon: "users" },
            { value: "50K+", label: "Monthly Visitors", icon: "eye" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 px-6 py-6 sm:py-4"
            >
              <StatIcon name={stat.icon} />
              <span className="text-2xl font-bold text-slate-900">
                {stat.value}
              </span>
              <span className="text-sm text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Anchor sections for nav links (minimal placeholders) */}
      <div id="about" className="sr-only" />
      <div id="services" className="sr-only" />
      <div id="contact" className="sr-only" />
    </section>
  );
}

/** Small inline icons for the stats row */
function StatIcon({ name }: { name: string }) {
  const className = "h-6 w-6 text-brand-pink";
  if (name === "rocket") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.5c0 0-5 4.5-5 10.5 0 2.2 1.8 4 4 4h2v5l3-3 3 3v-5h2c2.2 0 4-1.8 4-4 0-6-5-10.5-5-10.5zm0 3c1.5 2 2.5 4.2 2.5 6.5H9.5C9.5 9.7 10.5 7.5 12 5.5z" />
      </svg>
    );
  }
  if (name === "users") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4zm8 0c-.3 0-.6 0-1 .1 1.2.9 2 2.1 2 3.9v2h6v-2c0-2.7-5.3-4-8-4z" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5zm0 12.5a5 5 0 110-10 5 5 0 010 10zm0-2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    </svg>
  );
}
