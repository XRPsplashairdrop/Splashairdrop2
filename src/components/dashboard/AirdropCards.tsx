"use client";

import { useDashboard } from "@/context/DashboardContext";

export default function AirdropCards() {
  const { airdrops, claimAirdrop, readyToClaimCount } = useDashboard();

  return (
    <div className="glass rounded-2xl p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Your Airdrops</h2>
        <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium text-green-400">
          {readyToClaimCount} Ready to Claim
        </span>
      </div>

      <div className="space-y-4">
        {airdrops.map((drop) => (
          <div
            key={drop.id}
            className="rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.05]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">{drop.name}</h3>
                <p className="mt-0.5 text-sm text-accent">{drop.amount}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  drop.status === "Claimable"
                    ? "bg-green-400/10 text-green-400"
                    : drop.status === "Eligible"
                      ? "bg-accent/10 text-accent"
                      : drop.status === "Claimed"
                        ? "bg-white/10 text-muted"
                        : "bg-white/5 text-muted"
                }`}
              >
                {drop.status}
              </span>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-xs text-muted">
                <span>Eligibility</span>
                <span>{drop.progress}%</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary transition-all duration-500"
                  style={{ width: `${drop.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-muted">Ends {drop.ends}</span>
              {(drop.status === "Claimable" || drop.status === "Eligible") && (
                <button
                  type="button"
                  onClick={() => claimAirdrop(drop.id)}
                  className="rounded-lg bg-gradient-to-r from-accent-gold to-amber-400 px-4 py-1.5 text-xs font-bold text-black transition-opacity hover:opacity-90"
                >
                  Claim Now
                </button>
              )}
              {drop.status === "Claimed" && (
                <span className="text-xs font-medium text-green-400">Claimed ✓</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
