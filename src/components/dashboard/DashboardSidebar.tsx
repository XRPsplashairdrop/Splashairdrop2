"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: "grid" },
  { label: "Airdrops", href: "/dashboard", icon: "gift" },
  { label: "Swap", href: "/dashboard", icon: "swap" },
  { label: "Stake", href: "/dashboard", icon: "stake" },
  { label: "Activity", href: "/dashboard", icon: "activity" },
];

function NavIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    grid: (
      <path d="M4 4h7v7H4V4zM13 4h7v7h-7V4zM4 13h7v7H4v-7zM13 13h7v7h-7v-7z" stroke="currentColor" strokeWidth="1.5" />
    ),
    gift: (
      <path d="M12 8v13M8 8h8M6 8h12v5H6V8zM12 8c0-2-1-3-3-3s-2 1-2 3M12 8c0-2 1-3 3-3s2 1 2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ),
    swap: (
      <path d="M7 10l-3 3 3 3M17 14l3-3-3-3M4 13h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
    stake: (
      <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
    activity: (
      <path d="M4 16l4-8 4 4 8-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      {icons[type]}
    </svg>
  );
}

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-white/5 bg-[#080b14] lg:flex">
      <div className="flex h-16 items-center gap-2.5 border-b border-white/5 px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-secondary">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden>
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-sm font-semibold">
          XRP<span className="text-accent">Splash</span>
        </span>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              pathname === item.href
                ? "bg-accent/10 text-accent"
                : "text-muted hover:bg-white/5 hover:text-foreground"
            }`}
          >
            <NavIcon type={item.icon} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="border-t border-white/5 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path d="M9 14L4 9l5-5M15 10l5-5-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>
      </div>
    </aside>
  );
}
