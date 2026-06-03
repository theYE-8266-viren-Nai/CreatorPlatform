"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import {
  Briefcase,
  House,
  Info,
  LogIn,
  Mail,
  Menu,
  Sparkles,
  UserPlus,
  X,
  type LucideIcon,
} from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

/** Primary navigation items shown in desktop bar and mobile drawer */
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home", icon: House },
  { label: "About", href: "#about", icon: Info },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

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
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.4} />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-800">
            iBuilt<span className="text-brand-pink">This</span>
          </span>
        </Link>

        {/* ——— Desktop links (right) ——— */}
        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium text-slate-600 transition-colors hover:bg-white/60 hover:text-brand-pink"
                >
                  <link.icon
                    className="h-4 w-4 text-slate-400 transition-colors group-hover:text-brand-pink"
                    aria-hidden
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-1 flex items-center gap-2 border-l border-slate-200/80 pl-3">
            <Show when="signed-out">
              <SignInButton>
                <button
                  type="button"
                  className="flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium text-slate-600 transition-colors hover:bg-white/60 hover:text-brand-pink"
                >
                  <LogIn className="h-4 w-4" aria-hidden />
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                  type="button"
                  className="flex h-9 items-center gap-2 rounded-lg bg-brand-pink px-3 text-sm font-semibold text-white shadow-md shadow-brand-pink/20 transition-colors hover:bg-brand-pink/90"
                >
                  <UserPlus className="h-4 w-4" aria-hidden />
                  Sign up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>

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
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
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
                className="group flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-white/70 hover:text-brand-pink"
                onClick={closeMenu}
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-slate-500 transition-colors group-hover:text-brand-pink"
                  aria-hidden
                >
                  <link.icon className="h-4 w-4" />
                </span>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 border-t border-white/50 pt-3">
            <Show when="signed-out">
              <div className="grid grid-cols-2 gap-2">
                <SignInButton>
                  <button
                    type="button"
                    className="flex h-11 items-center justify-center gap-2 rounded-lg bg-white/70 px-3 text-sm font-semibold text-slate-700 transition-colors hover:text-brand-pink"
                    onClick={closeMenu}
                  >
                    <LogIn className="h-4 w-4" aria-hidden />
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button
                    type="button"
                    className="flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-pink px-3 text-sm font-semibold text-white shadow-md shadow-brand-pink/20 transition-colors hover:bg-brand-pink/90"
                    onClick={closeMenu}
                  >
                    <UserPlus className="h-4 w-4" aria-hidden />
                    Sign up
                  </button>
                </SignUpButton>
              </div>
            </Show>
            <Show when="signed-in">
              <div className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2">
                <span className="text-sm font-semibold text-slate-700">
                  Account
                </span>
                <UserButton />
              </div>
            </Show>
          </li>
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
