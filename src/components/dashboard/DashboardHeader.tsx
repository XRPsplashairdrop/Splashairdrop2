export default function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-white/5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted">Welcome back — here&apos;s your portfolio overview</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="glass flex items-center gap-2 rounded-full px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="font-mono text-xs text-muted">rXRP...8f2a</span>
        </div>
        <button className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5">
          Disconnect
        </button>
      </div>
    </header>
  );
}
