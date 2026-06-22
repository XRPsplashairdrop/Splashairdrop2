"use client";

import { useEffect, useState } from "react";
import Toast from "@/components/ui/Toast";

type LandingClaimButtonProps = {
  id: string;
  label?: string;
};

function storageKey(id: string) {
  return `landing_claimed_${id}`;
}

export default function LandingClaimButton({
  id,
  label = "Claim Now",
}: LandingClaimButtonProps) {
  const [claimed, setClaimed] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    setClaimed(sessionStorage.getItem(storageKey(id)) === "true");
  }, [id]);

  const handleClaim = () => {
    if (claimed) return;

    setClaimed(true);
    sessionStorage.setItem(storageKey(id), "true");
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  if (claimed) {
    return (
      <button
        type="button"
        disabled
        className="mt-3 w-full cursor-not-allowed rounded-lg border border-green-400/20 bg-green-400/10 py-2 text-sm font-semibold text-green-400"
      >
        Claimed ✓
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClaim}
        className="mt-3 w-full rounded-lg bg-gradient-to-r from-accent-gold/80 to-accent-gold py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
      >
        {label}
      </button>
      {toast && <Toast message="Claimed!" />}
    </>
  );
}
