const products = [
  {
    name: "Splash Swap",
    apy: "0.3% fee",
    description: "Aggregated liquidity across XRPL DEXs for best execution prices.",
    tag: "DEX",
    gradient: "from-accent/30 to-accent/5",
  },
  {
    name: "Splash Stake",
    apy: "Up to 12.4% APY",
    description: "Stake XRP and earn SPLASH rewards with flexible or locked terms.",
    tag: "Yield",
    gradient: "from-accent-secondary/30 to-accent-secondary/5",
  },
  {
    name: "Splash Lend",
    apy: "8.2% supply APY",
    description: "Supply assets to earn interest or borrow against your collateral.",
    tag: "Lending",
    gradient: "from-green-400/30 to-green-400/5",
  },
  {
    name: "Splash Drops",
    apy: "42 active drops",
    description: "Curated airdrop hub with eligibility checker and auto-claim.",
    tag: "Airdrops",
    gradient: "from-accent-gold/30 to-accent-gold/5",
  },
];

export default function DeFiProducts() {
  return (
    <section id="defi" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent-secondary/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-secondary">
              DeFi Suite
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful DeFi Tools, Native to XRPL
            </h2>
            <p className="mt-4 text-lg text-muted">
              Access the full spectrum of decentralized finance without leaving
              your wallet. Fast settlement, low fees, maximum composability.
            </p>
          </div>
          <button className="shrink-0 rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
            Explore All Products →
          </button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className={`glass group relative overflow-hidden rounded-2xl p-7 transition-all hover:border-white/15`}
            >
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${product.gradient} blur-2xl transition-opacity group-hover:opacity-150`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted">
                    {product.tag}
                  </span>
                  <span className="text-sm font-semibold text-accent">{product.apy}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <button className="mt-5 text-sm font-medium text-accent transition-colors hover:text-accent/80">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
