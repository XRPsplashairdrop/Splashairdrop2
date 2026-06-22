import ConnectWalletButton from "@/components/wallet/ConnectWalletButton";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/20 via-accent-secondary/20 to-accent-gold/10 px-8 py-16 text-center lg:px-20 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent-secondary/20 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Splash Into DeFi?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Join 180,000+ users already earning yield and claiming airdrops on
              the most trusted XRP DeFi platform.
            </p>

            <div className="mt-10 flex justify-center">
              <ConnectWalletButton className="rounded-full bg-white px-10 py-4 text-base font-bold text-black shadow-lg transition-opacity hover:opacity-90" />
            </div>

            <p className="mt-6 text-xs text-muted">
              No credit card required · Non-custodial · Free to use
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
