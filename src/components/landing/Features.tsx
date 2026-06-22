const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Non-Custodial Wallet",
    description:
      "Your keys, your crypto. Military-grade encryption with biometric authentication and hardware wallet support.",
    color: "from-accent/20 to-accent/5 text-accent",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M4 14l4-4 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 6h3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "DeFi Yield Farming",
    description:
      "Earn competitive APY by staking XRP and LP tokens. Auto-compound rewards with one-click strategies.",
    color: "from-accent-secondary/20 to-accent-secondary/5 text-accent-secondary",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Exclusive Airdrops",
    description:
      "Get early access to SPLASH and partner token airdrops. Snapshot tracking and one-tap claim process.",
    color: "from-accent-gold/20 to-accent-gold/5 text-accent-gold",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M4 8h16M4 16h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Instant Swaps",
    description:
      "Trade XRP and XRPL tokens with sub-second settlement and near-zero fees via integrated DEX aggregation.",
    color: "from-green-400/20 to-green-400/5 text-green-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Cross-Chain Bridge",
    description:
      "Move assets between XRPL, Ethereum, and BSC seamlessly with our audited bridge infrastructure.",
    color: "from-pink-400/20 to-pink-400/5 text-pink-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Audited & Insured",
    description:
      "Smart contracts audited by CertiK and PeckShield. Optional DeFi insurance coverage for your deposits.",
    color: "from-blue-400/20 to-blue-400/5 text-blue-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Platform Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need in One Wallet
          </h2>
          <p className="mt-4 text-lg text-muted">
            From secure storage to advanced DeFi strategies, XRPSplashairdrop
            gives you full control of your XRP ecosystem.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass group rounded-2xl p-6 transition-all hover:border-white/15 hover:bg-white/[0.06]"
            >
              <div
                className={`mb-4 inline-flex rounded-xl bg-gradient-to-br p-3 ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
