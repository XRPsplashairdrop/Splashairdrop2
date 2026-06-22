"use client";

import { useDashboard } from "@/context/DashboardContext";

export default function PortfolioOverview() {
  const {
    totalBalance,
    stakingRewardsXrp,
    stakingRewardsUsd,
    airdropsClaimedSplash,
    pendingAirdrops,
    defiEarnings,
    formatUsd,
    formatSplash,
    formatXrp,
  } = useDashboard();

  const stats = [
    {
      label: "Total Balance",
      value: formatUsd(totalBalance),
      change: "+12.4%",
      positive: true,
      accent: "from-accent/20 to-accent/5",
    },
    {
      label: "Staking Rewards",
      value: formatXrp(stakingRewardsXrp),
      change: `+${formatUsd(stakingRewardsUsd)}`,
      positive: true,
      accent: "from-accent-secondary/20 to-accent-secondary/5",
    },
    {
      label: "Airdrops Claimed",
      value: formatSplash(airdropsClaimedSplash),
      change: `${pendingAirdrops} pending`,
      positive: true,
      accent: "from-accent-gold/20 to-accent-gold/5",
    },
    {
      label: "DeFi Earnings",
      value: formatUsd(defiEarnings),
      change: "+8.2% APY",
      positive: true,
      accent: "from-green-400/20 to-green-400/5",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="glass rounded-2xl p-5 transition-all">
          <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br px-2.5 py-1 text-xs font-medium ${stat.accent}`}>
            {stat.label}
          </div>
          <p className="text-2xl font-bold transition-all">{stat.value}</p>
          <p className={`mt-1 text-sm ${stat.positive ? "text-green-400" : "text-red-400"}`}>
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
