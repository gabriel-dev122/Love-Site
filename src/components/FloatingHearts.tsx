import { useMemo } from "react";

type Props = {
  count?: number;
  className?: string;
};

/** Decorative hearts drifting upwards behind the content. */
export function FloatingHearts({ count = 14, className = "" }: Props) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 97) % 100,
        delay: (i * 0.73) % 7,
        duration: 6 + ((i * 1.31) % 5),
        size: 10 + ((i * 7) % 22),
        opacity: 0.25 + ((i * 13) % 40) / 100,
      })),
    [count],
  );

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute bottom-0 animate-heart-rise text-primary"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            opacity: h.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

/** Soft sparkles for the gift pages. */
export function Sparkles({ count = 10 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 61) % 100,
        top: (i * 37) % 100,
        delay: (i * 0.41) % 3,
      })),
    [count],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((s) => (
        <span
          key={s.id}
          className="absolute animate-pulse text-primary/50"
          style={{ left: `${s.left}%`, top: `${s.top}%`, animationDelay: `${s.delay}s` }}
        >
          ✧
        </span>
      ))}
    </div>
  );
}
