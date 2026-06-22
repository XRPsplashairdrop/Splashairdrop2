"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CAPTCHA_STORAGE_KEY,
  drawCaptcha,
  generateCaptchaCode,
} from "@/lib/captcha";

function CaptchaChallenge({ onSuccess }: { onSuccess: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(() => {
    const newCode = generateCaptchaCode();
    setCode(newCode);
    setInput("");
    setError("");
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (!code || !canvasRef.current) return;
    drawCaptcha(canvasRef.current, code);
  }, [code]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!input.trim()) {
      setError("Please enter the characters shown above.");
      return;
    }

    if (input.trim().toUpperCase() !== code) {
      setError("Incorrect code. Please try again.");
      refresh();
      return;
    }

    setLoading(true);
    setTimeout(() => {
      sessionStorage.setItem(CAPTCHA_STORAGE_KEY, "true");
      onSuccess();
    }, 400);
  };

  return (
    <div className="mesh-bg fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#06080f] px-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent-secondary/10 blur-3xl" />
      </div>

      <div className="glass relative w-full max-w-md rounded-2xl p-8 shadow-2xl shadow-accent/10">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden>
              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            Security Verification
          </h1>
          <p className="mt-2 text-sm text-muted">
            Complete the captcha below to access{" "}
            <span className="text-accent">XRPSplashairdrop</span>
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-4">
          <div className="relative">
            <canvas
              ref={canvasRef}
              width={280}
              height={80}
              className="mx-auto block w-full max-w-[280px] rounded-xl border border-white/10"
              aria-label="Captcha image"
            />
            <button
              type="button"
              onClick={refresh}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-muted transition-colors hover:text-foreground"
              aria-label="Refresh captcha"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                <path
                  d="M4 12a8 8 0 0113.66-5.66M20 12a8 8 0 01-13.66 5.66"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M16 6h4V2M8 18H4v4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div>
            <label htmlFor="captcha-input" className="sr-only">
              Enter captcha code
            </label>
            <input
              id="captcha-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value.toUpperCase())}
              placeholder="Enter the code above"
              maxLength={6}
              autoComplete="off"
              autoFocus
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center font-mono text-lg tracking-[0.3em] placeholder:font-sans placeholder:tracking-normal placeholder:text-muted/60 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
            />
          </div>

          {error && (
            <p className="text-center text-sm text-red-400" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-accent to-accent-secondary py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify & Continue"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-muted">
          This helps protect our platform from automated bots.
        </p>
      </div>
    </div>
  );
}

export default function CaptchaGate({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    setVerified(sessionStorage.getItem(CAPTCHA_STORAGE_KEY) === "true");
  }, []);

  if (verified === null) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06080f]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
      </div>
    );
  }

  if (!verified) {
    return <CaptchaChallenge onSuccess={() => setVerified(true)} />;
  }

  return <>{children}</>;
}
