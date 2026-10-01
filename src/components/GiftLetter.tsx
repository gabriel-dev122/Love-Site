import { useMemo } from "react";
import { BackButton } from "@/components/BackButton";
import { loveConfig } from "@/lib/love-config";

const { letter, gifts } = loveConfig;

function KissMarks() {
  const marks = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: (i * 43) % 96,
        top: (i * 67) % 96,
        rotate: ((i * 53) % 90) - 45,
        size: 26 + ((i * 11) % 26),
      })),
    [],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {marks.map((m) => (
        <span
          key={m.id}
          className="absolute animate-kiss-in opacity-80"
          style={
            {
              left: `${m.left}%`,
              top: `${m.top}%`,
              "--tilt": `${m.rotate}deg`,
              transform: `rotate(${m.rotate}deg)`,
              fontSize: `${m.size}px`,
              animationDelay: `${(m.id % 11) * 0.06}s`,
            } as React.CSSProperties
          }
        >
          💋
        </span>
      ))}
    </div>
  );
}

export function GiftLetter({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-romance px-4 py-10">
      <KissMarks />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
        <article className="w-full animate-letter-in rounded-2xl bg-cream px-6 py-8 shadow-soft sm:px-10 sm:py-12">

          <h1 className="mb-6 font-script text-4xl text-rose sm:text-5xl">{letter.title}</h1>
          <div className="space-y-4 font-display text-[15px] leading-relaxed text-ink sm:text-base">
            {letter.paragraphs.map((p, i) => (
              <p
                key={i}
                className="animate-fade-up"
                style={{ animationDelay: `${0.35 + i * 0.18}s` }}
              >
                {p}
              </p>
            ))}
          </div>

          {letter.extraNote ? (
            <p className="mt-6 border-t border-blush pt-5 font-script text-xl leading-relaxed text-rose sm:text-2xl">
              {letter.extraNote}
            </p>
          ) : null}
          <p className="mt-8 text-right font-script text-2xl text-rose sm:text-3xl">
            {letter.signature}
          </p>
        </article>

        <BackButton label={gifts.back} onClick={onBack} />
      </div>
    </div>
  );
}
