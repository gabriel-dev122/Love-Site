import { useCallback, useRef, useState } from "react";
import { CatMascot } from "@/components/CatMascot";
import { FloatingHearts } from "@/components/FloatingHearts";
import { loveConfig, type Mood } from "@/lib/love-config";

const { question } = loveConfig;

export function QuestionScreen({ onYes }: { onYes: () => void }) {
  const [step, setStep] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const lastDodge = useRef(0);

  const current = step === 0 ? null : question.noSteps[Math.min(step - 1, question.noSteps.length - 1)];
  const mood: Mood = step === 0 ? "shy" : ((current?.mood ?? "shy") as Mood);
  const message = step === 0 ? question.title : (current?.text ?? question.title);

  const noScale = Math.max(0.28, 1 - step * 0.12);
  const yesScale = Math.min(2.1, 1 + step * 0.18);

  const dodge = useCallback(() => {
    const now = Date.now();
    if (now - lastDodge.current < 120) return;
    lastDodge.current = now;
    const range = 70 + step * 12;
    setOffset({
      x: Math.round((Math.random() * 2 - 1) * range),
      y: Math.round((Math.random() * 2 - 1) * (range * 0.6)),
    });
    setStep((s) => Math.min(s + 1, question.noSteps.length));
  }, [step]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-romance px-5 py-12">
      <FloatingHearts count={12} />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-6">
        <CatMascot mood={mood} priority className="w-40 animate-float sm:w-48" />

        <h1
          key={message}
          className="animate-message-in text-center font-display text-2xl font-semibold text-rose sm:text-3xl"
        >
          {message}
        </h1>

        <div className="relative flex min-h-[160px] w-full items-center justify-center gap-4">
          <button
            type="button"
            onClick={onYes}
            style={{
              transform: `scale(${yesScale})`,
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            className="z-20 rounded-2xl bg-yes px-8 py-4 font-sans text-lg font-bold tracking-wide text-yes-foreground shadow-soft transition-transform duration-500 hover:brightness-105 active:scale-95"
          >
            {question.yesLabel}
          </button>

          <button
            type="button"
            onMouseEnter={dodge}
            onFocus={dodge}
            onTouchStart={dodge}
            onClick={dodge}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${noScale}) rotate(${offset.x / 8}deg)`,
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            className="z-10 rounded-2xl bg-no px-7 py-4 font-sans text-lg font-bold tracking-wide text-no-foreground shadow-soft transition-transform duration-300"
          >
            {question.noLabel}
          </button>
        </div>
      </div>

    </div>
  );
}
