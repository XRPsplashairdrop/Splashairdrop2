import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CaptchaGate from "@/components/CaptchaGate";
import { WalletModalProvider } from "@/components/wallet/WalletModalProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XRPSplashairdrop — XRP Wallet & DeFi Platform",
  description:
    "The all-in-one XRP wallet and DeFi platform. Secure your assets, earn yield, swap tokens, and claim exclusive airdrops on the XRP Ledger.",
  keywords: ["XRP", "DeFi", "wallet", "airdrop", "XRPL", "crypto"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CaptchaGate>
          <WalletModalProvider>{children}</WalletModalProvider>
        </CaptchaGate>
      </body>
    </html>
  );
}
