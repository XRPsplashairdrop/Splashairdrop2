"use client";

import { useDashboard } from "@/context/DashboardContext";

const actions = [
  { label: "Send", icon: "M12 19V5M5 12l7-7 7 7", color: "text-accent" },
  { label: "Swap", icon: "M7 10l-3 3 3 3M17 14l3-3-3-3M4 13h16", color: "text-accent-secondary" },
  { label: "Stake", icon: "M12 3v18M8 7l4-4 4 4", color: "text-green-400" },
  { label: "Claim", icon: "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z", color: "text-accent-gold" },
];

export default function QuickActions() {
  const { claimQuickReward } = useDashboard();

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={action.label === "Claim" ? claimQuickReward : undefined}
            className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] py-4 transition-colors hover:border-white/10 hover:bg-white/[0.06]"
          >
            <svg viewBox="0 0 24 24" fill="none" className={`h-6 w-6 ${action.color}`} aria-hidden>
              <path d={action.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
