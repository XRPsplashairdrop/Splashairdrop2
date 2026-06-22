const footerLinks = {
  Product: ["Wallet", "Swap", "Stake", "Lend", "Airdrops"],
  Resources: ["Documentation", "API", "Blog", "Help Center", "Status"],
  Company: ["About", "Careers", "Press", "Contact", "Partners"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Risk Disclosure"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden>
                  <path
                    d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path d="M12 12l8-5M12 12L4 7M12 12v10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                XRP<span className="text-accent">Splash</span>airdrop
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The premier XRP wallet and DeFi platform. Secure, fast, and built
              for the future of decentralized finance.
            </p>

            <div className="mt-6 flex gap-4">
              {["X", "Discord", "Telegram", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-xs text-muted transition-colors hover:border-white/20 hover:text-foreground"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold">{category}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} XRPSplashairdrop. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built on the XRP Ledger · Not financial advice
          </p>
        </div>
      </div>
    </footer>
  );
}
