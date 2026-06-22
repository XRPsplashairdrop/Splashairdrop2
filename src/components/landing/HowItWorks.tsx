import LandingClaimButton from "@/components/ui/LandingClaimButton";

const steps = [
  {
    step: "01",
    title: "Connect Wallet",
    description:
      "Link your XRP wallet in one click. Compatible with Xaman, Ledger, and all major XRPL wallets.",
  },
  {
    step: "02",
    title: "Fund",
    description:
      "Deposit XRP or bridge assets from other chains to get started on the platform.",
  },
  {
    step: "03",
    title: "Claim and Earn",
    description:
      "Stake for yield, swap tokens, and claim exclusive airdrops — all from one dashboard.",
  },
];

const airdrops = [
  { id: "splash-genesis", name: "SPLASH Genesis", status: "Live", allocation: "2,500 SPLASH", ends: "Jun 30, 2026" },
  { id: "xrpl-ecosystem", name: "XRPL Ecosystem", status: "Upcoming", allocation: "TBA", ends: "Jul 15, 2026" },
  { id: "defi-partners", name: "DeFi Partners", status: "Live", allocation: "500–5,000 tokens", ends: "Aug 1, 2026" },
];

export default function HowItWorks() {
  return (
    <section id="airdrops" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Start Earning in Three Simple Steps
            </h2>

            <div className="mt-10 space-y-8">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 text-sm font-bold text-accent">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Active Airdrops</h3>
              <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium text-green-400">
                2 Live Now
              </span>
            </div>

            <div className="space-y-4">
              {airdrops.map((drop) => (
                <div
                  key={drop.name}
                  className="rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{drop.name}</h4>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        drop.status === "Live"
                          ? "bg-green-400/10 text-green-400"
                          : "bg-white/5 text-muted"
                      }`}
                    >
                      {drop.status}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm text-muted">
                    <span>{drop.allocation}</span>
                    <span>Ends {drop.ends}</span>
                  </div>
                  {drop.status === "Live" && <LandingClaimButton id={drop.id} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
