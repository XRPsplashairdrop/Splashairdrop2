"use client";

import { useState } from "react";
import ConnectWalletButton from "@/components/wallet/ConnectWalletButton";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "DeFi", href: "#defi" },
  { label: "Airdrops", href: "#airdrops" },
  { label: "Security", href: "#security" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#06080f]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden>
              <path
                d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M12 12l8-5M12 12L4 7M12 12v10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            XRP<span className="text-accent">Splash</span>airdrop
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <ConnectWalletButton className="rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-accent/20 transition-opacity hover:opacity-90" />
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <ConnectWalletButton
              onClick={() => setOpen(false)}
              className="w-full rounded-full bg-gradient-to-r from-accent to-accent-secondary py-2.5 text-sm font-bold text-white"
            />
          </div>
        </div>
      )}
    </header>
  );
}
