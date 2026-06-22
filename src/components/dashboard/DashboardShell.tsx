"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PortfolioOverview from "@/components/dashboard/PortfolioOverview";
import QuickActions from "@/components/dashboard/QuickActions";
import AirdropCards from "@/components/dashboard/AirdropCards";
import HoldingsAndActivity from "@/components/dashboard/HoldingsAndActivity";
import { DashboardProvider } from "@/context/DashboardContext";

export default function DashboardShell() {
  return (
    <DashboardProvider>
      <div className="flex min-h-screen bg-[#06080f]">
        <DashboardSidebar />

        <div className="flex flex-1 flex-col">
          <DashboardHeader />

          <main className="flex-1 space-y-6 p-6 lg:p-8">
            <PortfolioOverview />
            <QuickActions />

            <div className="grid gap-6 xl:grid-cols-5">
              <div className="xl:col-span-2">
                <AirdropCards />
              </div>
              <div className="xl:col-span-3">
                <HoldingsAndActivity />
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
