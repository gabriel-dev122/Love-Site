export function GiftBoxButton({
  label,
  onClick,
  delay = 0,
}: {
  label: string;
  onClick: () => void;
  delay?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ animationDelay: `${delay}s` }}
      className="group flex animate-fade-up flex-col items-center gap-2 focus:outline-none"
    >
      <span
        style={{ animationDelay: `${delay}s` }}
        className="relative block w-20 animate-gift-idle rounded-xl bg-blush p-3 shadow-soft transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-active:scale-90 sm:w-24"
      >
        {/* lid */}
        <span className="block h-4 w-full rounded-md bg-primary/40 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:-rotate-6" />
        {/* body */}
        <span className="relative mt-1 flex h-12 w-full items-center justify-center rounded-md bg-primary/25">
          <span className="absolute inset-y-0 left-1/2 w-2 -translate-x-1/2 bg-card/70" />
          <span className="relative animate-heartbeat text-lg">💗</span>
        </span>
        {/* bow */}
        <span className="absolute left-1/2 top-1 flex -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 transition-transform duration-300 group-hover:-translate-y-3.5 group-hover:rotate-12">
          <span className="size-3 rounded-full bg-card shadow-sm" />
          <span className="size-2 rounded-sm bg-card shadow-sm" />
          <span className="size-3 rounded-full bg-card shadow-sm" />
        </span>
      </span>

      <span className="font-sans text-xs font-bold tracking-widest text-rose sm:text-sm">
        {label}
      </span>
    </button>
  );
}
