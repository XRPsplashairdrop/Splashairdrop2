import ConnectWalletButton from "@/components/wallet/ConnectWalletButton";

export default function Hero() {
  return (
    <section className="mesh-bg relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-accent-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Live on XRP Ledger Mainnet
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Gateway to{" "}
              <span className="gradient-text">XRP DeFi</span> &amp; Exclusive
              Airdrops
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              XRPSplashairdrop combines a secure non-custodial wallet with
              powerful DeFi tools — swap, stake, lend, and claim token airdrops
              all in one seamless platform built on the XRP Ledger.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ConnectWalletButton
                showArrow
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-8 py-4 text-base font-bold text-white shadow-xl shadow-accent/25 transition-all hover:shadow-accent/40"
              />
              <a
                href="#airdrops"
                className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium transition-colors hover:border-white/20 hover:bg-white/5"
              >
                View Airdrops
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold">$2.4B+</p>
                <p className="text-sm text-muted">Total Value Locked</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-bold">180K+</p>
                <p className="text-sm text-muted">Active Wallets</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-bold">42</p>
                <p className="text-sm text-muted">Airdrops Claimed</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-float relative w-full max-w-md">
              <div className="glass rounded-3xl p-6 shadow-2xl shadow-accent/5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted">Total Balance</p>
                    <p className="text-3xl font-bold">12,847.32 <span className="text-lg text-accent">XRP</span></p>
                    <p className="text-sm text-green-400">+$1,284.73 (+11.1%)</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-accent" aria-hidden>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <div className="mb-5 grid grid-cols-3 gap-3">
                  {["Send", "Swap", "Stake"].map((action) => (
                    <button
                      key={action}
                      className="rounded-xl border border-white/5 bg-white/5 py-2.5 text-xs font-medium transition-colors hover:bg-white/10"
                    >
                      {action}
                    </button>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">Recent Activity</p>
                  {[
                    { label: "Airdrop Claimed", amount: "+500 SPLASH", positive: true },
                    { label: "XRP → USDC Swap", amount: "-200 XRP", positive: false },
                    { label: "Staking Rewards", amount: "+12.4 XRP", positive: true },
                  ].map((tx) => (
                    <div
                      key={tx.label}
                      className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3"
                    >
                      <span className="text-sm">{tx.label}</span>
                      <span className={`text-sm font-medium ${tx.positive ? "text-green-400" : "text-muted"}`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass absolute -bottom-4 -left-6 rounded-2xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-gold/20">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent-gold" aria-hidden>
                      <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted">New Airdrop</p>
                    <p className="text-sm font-semibold">2,500 SPLASH available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
