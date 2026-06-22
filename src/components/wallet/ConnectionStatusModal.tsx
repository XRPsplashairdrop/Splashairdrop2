"use client";

import { useEffect } from "react";

type ConnectionStatusModalProps = {
  phase: "loading" | "success";
};

const COINS = [
  { symbol: "XRP", color: "#00c2ff", angle: 0 },
  { symbol: "SPLASH", color: "#7b61ff", angle: 60 },
  { symbol: "BTC", color: "#f5a623", angle: 120 },
  { symbol: "ETH", color: "#a78bfa", angle: 180 },
  { symbol: "USDC", color: "#4ade80", angle: 240 },
  { symbol: "SOL", color: "#f472b6", angle: 300 },
];

export default function ConnectionStatusModal({ phase }: ConnectionStatusModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" aria-hidden />

      <div className="relative flex flex-col items-center">
        {phase === "loading" && (
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8 flex h-28 w-28 items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-accent/20" />
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent" />
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/20">
                <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-accent" aria-hidden>
                  <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold">Connecting Wallet</h2>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Securing your vault and syncing with the XRP Ledger...
            </p>
            <div className="mt-6 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full bg-accent animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {phase === "success" && (
          <div className="flex flex-col items-center text-center">
            <div className="success-coins-ring relative mb-8 h-48 w-48">
              {COINS.map((coin) => (
                <div
                  key={coin.symbol}
                  className="coin-orbit absolute left-1/2 top-1/2"
                  style={
                    {
                      "--coin-angle": `${coin.angle}deg`,
                      "--coin-color": coin.color,
                      animationDelay: `${coin.angle / 360}s`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold shadow-lg"
                    style={{ background: `${coin.color}22`, color: coin.color }}
                  >
                    {coin.symbol.slice(0, 1)}
                  </div>
                </div>
              ))}

              <div className="success-check absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-2xl shadow-green-400/30">
                <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-white" aria-hidden>
                  <path
                    d="M6 12l4 4 8-8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="success-check-path"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-xl font-bold text-green-400">Wallet Connected!</h2>
            <p className="mt-2 text-sm text-muted">
              Redirecting to your dashboard...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
