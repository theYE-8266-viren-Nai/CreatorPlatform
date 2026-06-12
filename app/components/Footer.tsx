import Link from "next/link";
import {  Mail } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/40 bg-cream/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* ——— Brand section ——— */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-pink shadow-md shadow-brand-pink/30">
                <span className="text-white text-lg">✨</span>
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-800">
                iBuilt<span className="text-brand-pink">This</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-600">
              A community platform for creators to showcase their projects.
            </p>
          </div>

          {/* ——— Quick links ——— */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#home" className="hover:text-brand-pink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand-pink transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-brand-pink transition-colors">
                  Submit Project
                </Link>
              </li>
            </ul>
          </div>

          {/* ——— Resources ——— */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#" className="hover:text-brand-pink transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-pink transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-pink transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* ——— Connect ——— */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/70 text-slate-600 transition-colors hover:bg-brand-pink hover:text-white hover:shadow-md hover:shadow-brand-pink/20"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/70 text-slate-600 transition-colors hover:bg-brand-pink hover:text-white hover:shadow-md hover:shadow-brand-pink/20"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@ibuiltthis.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/70 text-slate-600 transition-colors hover:bg-brand-pink hover:text-white hover:shadow-md hover:shadow-brand-pink/20"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ——— Bottom bar ——— */}
        <div className="mt-8 border-t border-white/50 pt-6 text-center text-sm text-slate-500">
          <p>© 2026 iBuiltThis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
