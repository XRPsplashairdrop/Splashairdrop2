const audits = [
  "CertiK Audited",
  "PeckShield Verified",
  "OpenZeppelin Reviewed",
  "Bug Bounty Program",
];

const securityFeatures = [
  {
    title: "Multi-Signature Support",
    description: "Require multiple approvals for high-value transactions.",
  },
  {
    title: "Hardware Wallet Integration",
    description: "Compatible with Ledger and Trezor for cold storage security.",
  },
  {
    title: "Real-Time Threat Detection",
    description: "AI-powered monitoring flags suspicious contract interactions.",
  },
  {
    title: "Insurance Coverage",
    description: "Optional Nexus Mutual coverage on eligible DeFi deposits.",
  },
];

export default function Security() {
  return (
    <section id="security" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                Security First
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Your Assets, Protected at Every Layer
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                We never hold your private keys. Every smart contract is
                independently audited, and our security team monitors the
                platform 24/7.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {audits.map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1.5 text-xs font-medium text-green-400"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 bg-white/[0.02] p-8 lg:border-t-0 lg:border-l lg:p-12">
              <div className="space-y-6">
                {securityFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-400/10">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-green-400" aria-hidden>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="mt-1 text-sm text-muted">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
