"use client";

import { useWalletModal } from "@/components/wallet/WalletModalProvider";

type ConnectWalletButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  showArrow?: boolean;
};

export default function ConnectWalletButton({
  className = "",
  children = "Connect Wallet",
  onClick,
  showArrow = false,
}: ConnectWalletButtonProps) {
  const { openModal } = useWalletModal();

  const handleClick = () => {
    onClick?.();
    openModal();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
      {showArrow && (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
