export default function Toast({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="toast-enter fixed bottom-6 right-6 z-[300] flex items-center gap-3 rounded-xl border border-green-400/20 bg-[#0d1526] px-5 py-3.5 shadow-2xl shadow-green-400/10"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-green-400" aria-hidden>
          <path
            d="M6 12l4 4 8-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-sm font-semibold text-green-400">{message}</span>
    </div>
  );
}
