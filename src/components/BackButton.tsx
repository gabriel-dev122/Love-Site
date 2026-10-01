export function BackButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-10 rounded-full bg-primary px-8 py-3 font-sans text-sm font-bold tracking-widest text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
    >
      {label}
    </button>
  );
}
