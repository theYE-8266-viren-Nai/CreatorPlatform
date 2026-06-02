"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/** Primary navigation items shown in desktop bar and mobile drawer */
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * Responsive site navigation.
 * - Desktop: logo left, inline links right
 * - Mobile: hamburger toggles a full-width slide-down menu
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-cream/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* ——— Logo (left) ——— */}
        <Link
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={closeMenu}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-pink shadow-md shadow-brand-pink/30 transition-transform duration-300 group-hover:scale-105"
            aria-hidden
          >
            <svg
              className="h-4 w-4 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21 8 14 2 9.4h7.6L12 2z" />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-800">
            iBuilt<span className="text-brand-pink">This</span>
          </span>
        </Link>

        {/* ——— Desktop links (right) ——— */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-pink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ——— Hamburger button (mobile only) ——— */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-white/60 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Open"} menu</span>
          {/* Animated hamburger → X icon */}
          <span className="flex w-5 flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </span>
        </button>
      </nav>

      {/* ——— Mobile slide-down menu ——— */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/30 bg-cream/95 backdrop-blur-lg transition-[max-height,opacity] duration-300 ease-out md:hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.href}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-white/70 hover:text-brand-pink"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Dim overlay behind mobile menu */}
      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 top-16 z-40 bg-slate-900/20 md:hidden"
          aria-label="Close menu overlay"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
