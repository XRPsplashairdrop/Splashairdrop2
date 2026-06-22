"use client";

import { useDashboard } from "@/context/DashboardContext";

export default function HoldingsAndActivity() {
  const { splashHolding, splashValue, activity, formatUsd } = useDashboard();

  const holdings = [
    { asset: "XRP", amount: "12,847.32", value: "$24,120.40", change: "+11.1%", positive: true },
    {
      asset: "SPLASH",
      amount: splashHolding.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      value: formatUsd(splashValue),
      change: "+24.3%",
      positive: true,
    },
    { asset: "USDC", amount: "283.50", value: "$283.50", change: "0.0%", positive: true },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="glass rounded-2xl p-6">
        <h2 className="mb-5 text-lg font-semibold">Holdings</h2>
        <div className="space-y-3">
          {holdings.map((h) => (
            <div
              key={h.asset}
              className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  {h.asset.slice(0, 1)}
                </div>
                <div>
                  <p className="font-medium">{h.asset}</p>
                  <p className="text-xs text-muted">{h.amount}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{h.value}</p>
                <p className={`text-xs ${h.positive ? "text-green-400" : "text-red-400"}`}>
                  {h.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <h2 className="mb-5 text-lg font-semibold">Recent Activity</h2>
        <div className="space-y-3">
          {activity.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium">{item.type}</p>
                <p className="text-xs text-muted">{item.detail} · {item.time}</p>
              </div>
              <span className={`text-sm font-medium ${item.positive ? "text-green-400" : "text-muted"}`}>
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
