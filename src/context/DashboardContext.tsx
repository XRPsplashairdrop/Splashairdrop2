"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Toast from "@/components/ui/Toast";

export type AirdropItem = {
  id: string;
  name: string;
  amount: string;
  status: "Claimable" | "Eligible" | "In Progress" | "Claimed";
  progress: number;
  ends: string;
  rewardSplash: number;
  rewardUsd: number;
};

export type ActivityItem = {
  id: string;
  type: string;
  detail: string;
  amount: string;
  time: string;
  positive: boolean;
};

type DashboardState = {
  totalBalance: number;
  stakingRewardsXrp: number;
  stakingRewardsUsd: number;
  airdropsClaimedSplash: number;
  pendingAirdrops: number;
  defiEarnings: number;
  splashHolding: number;
  splashValue: number;
  airdrops: AirdropItem[];
  activity: ActivityItem[];
};

type DashboardContextValue = DashboardState & {
  claimAirdrop: (id: string) => void;
  claimQuickReward: () => void;
  formatUsd: (value: number) => string;
  formatSplash: (value: number) => string;
  formatXrp: (value: number) => string;
  readyToClaimCount: number;
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

const INITIAL_AIRDROPS: AirdropItem[] = [
  {
    id: "splash-genesis",
    name: "SPLASH Genesis",
    amount: "2,500 SPLASH",
    status: "Claimable",
    progress: 100,
    ends: "Jun 30, 2026",
    rewardSplash: 2500,
    rewardUsd: 375,
  },
  {
    id: "xrpl-ecosystem",
    name: "XRPL Ecosystem Drop",
    amount: "1,200 XRP",
    status: "Eligible",
    progress: 75,
    ends: "Jul 15, 2026",
    rewardSplash: 0,
    rewardUsd: 720,
  },
  {
    id: "defi-partners",
    name: "DeFi Partners",
    amount: "800 tokens",
    status: "In Progress",
    progress: 45,
    ends: "Aug 1, 2026",
    rewardSplash: 800,
    rewardUsd: 120,
  },
];

const INITIAL_ACTIVITY: ActivityItem[] = [
  { id: "1", type: "Airdrop Claimed", detail: "SPLASH Genesis", amount: "+500 SPLASH", time: "2h ago", positive: true },
  { id: "2", type: "Staking Reward", detail: "XRP Pool", amount: "+12.4 XRP", time: "5h ago", positive: true },
  { id: "3", type: "Swap", detail: "XRP → USDC", amount: "-200 XRP", time: "1d ago", positive: false },
  { id: "4", type: "Stake", detail: "SPLASH Pool", amount: "1,000 SPLASH", time: "2d ago", positive: true },
];

function formatUsd(value: number) {
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatSplash(value: number) {
  return `${value.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} SPLASH`;
}

function formatXrp(value: number) {
  return `${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} XRP`;
}

function getAmountLabel(drop: AirdropItem): string {
  if (drop.amount.includes("SPLASH")) {
    return `+${drop.rewardSplash.toLocaleString()} SPLASH`;
  }
  if (drop.amount.includes("XRP")) {
    return `+${drop.amount.split(" ")[0]} XRP`;
  }
  return `+${drop.amount}`;
}

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<string | null>(null);
  const [state, setState] = useState<DashboardState>({
    totalBalance: 24891.4,
    stakingRewardsXrp: 847.32,
    stakingRewardsUsd: 124.5,
    airdropsClaimedSplash: 3250,
    pendingAirdrops: 2,
    defiEarnings: 1284.73,
    splashHolding: 3250,
    splashValue: 487.5,
    airdrops: INITIAL_AIRDROPS,
    activity: INITIAL_ACTIVITY,
  });

  const showToast = useCallback((message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const claimAirdrop = useCallback(
    (id: string) => {
      setState((prev) => {
        const drop = prev.airdrops.find((a) => a.id === id);
        if (!drop || drop.status === "Claimed") return prev;

        if (drop.status !== "Claimable" && drop.status !== "Eligible") {
          showToast("Not yet eligible to claim");
          return prev;
        }

        showToast("Claimed!");

        return {
          ...prev,
          totalBalance: prev.totalBalance + drop.rewardUsd,
          airdropsClaimedSplash: prev.airdropsClaimedSplash + drop.rewardSplash,
          defiEarnings: prev.defiEarnings + drop.rewardUsd * 0.1,
          splashHolding: prev.splashHolding + drop.rewardSplash,
          splashValue: prev.splashValue + drop.rewardUsd,
          pendingAirdrops: Math.max(0, prev.pendingAirdrops - 1),
          airdrops: prev.airdrops.map((a) =>
            a.id === id ? { ...a, status: "Claimed" as const, progress: 100 } : a
          ),
          activity: [
            {
              id: `activity-${Date.now()}`,
              type: "Airdrop Claimed",
              detail: drop.name,
              amount: getAmountLabel(drop),
              time: "Just now",
              positive: true,
            },
            ...prev.activity,
          ],
        };
      });
    },
    [showToast]
  );

  const claimQuickReward = useCallback(() => {
    const next = state.airdrops.find(
      (a) => a.status === "Claimable" || a.status === "Eligible"
    );

    if (next) {
      claimAirdrop(next.id);
      return;
    }

    setState((prev) => {
      showToast("Claimed!");
      return {
        ...prev,
        totalBalance: prev.totalBalance + 37.5,
        airdropsClaimedSplash: prev.airdropsClaimedSplash + 250,
        defiEarnings: prev.defiEarnings + 3.75,
        splashHolding: prev.splashHolding + 250,
        splashValue: prev.splashValue + 37.5,
        activity: [
          {
            id: `activity-${Date.now()}`,
            type: "Airdrop Claimed",
            detail: "Quick Claim",
            amount: "+250 SPLASH",
            time: "Just now",
            positive: true,
          },
          ...prev.activity,
        ],
      };
    });
  }, [state.airdrops, claimAirdrop, showToast]);

  const readyToClaimCount = useMemo(
    () =>
      state.airdrops.filter(
        (a) => a.status === "Claimable" || a.status === "Eligible"
      ).length,
    [state.airdrops]
  );

  const value = useMemo(
    () => ({
      ...state,
      claimAirdrop,
      claimQuickReward,
      formatUsd,
      formatSplash,
      formatXrp,
      readyToClaimCount,
    }),
    [state, claimAirdrop, claimQuickReward, readyToClaimCount]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
      {toast && <Toast message={toast} />}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return ctx;
}
