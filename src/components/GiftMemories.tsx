import { FloatingHearts, Sparkles } from "@/components/FloatingHearts";
import { BackButton } from "@/components/BackButton";
import { loveConfig } from "@/lib/love-config";

const { memories, gifts } = loveConfig;

function Polaroid({
  src,
  rotate,
  className = "",
  delay = 0,
}: {
  src: string;
  rotate: number;
  className?: string;
  delay?: number;
}) {
  return (
    <figure
      style={
        {
          "--tilt": `${rotate}deg`,
          transform: `rotate(${rotate}deg)`,
          animationDelay: `${delay}s`,
        } as React.CSSProperties
      }
      className={`animate-drop-in rounded-[3px] bg-card p-1.5 pb-4 shadow-polaroid transition-transform duration-300 hover:z-10 hover:!rotate-0 hover:scale-110 ${className}`}
    >

      <img
        src={src}
        alt="A memory with you"
        width={768}
        height={768}
        loading="lazy"
        className="aspect-square w-full object-cover"
      />
    </figure>
  );
}

export function GiftMemories({ onBack }: { onBack: () => void }) {
  const photos = memories.photos;
  /** Pega a foto do índice pedido; se tiver menos fotos, repete desde o começo. */
  const pick = (i: number): string => photos[i % photos.length] as string;

  return (
    <div className="relative min-h-screen overflow-hidden bg-romance px-5 py-10">
      <FloatingHearts count={10} />
      <Sparkles count={12} />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <h1 className="mb-8 text-center font-script text-4xl text-rose sm:text-5xl">
          {memories.title}
        </h1>

        <div className="flex w-full items-start justify-center gap-3 sm:gap-8">
          {/* left big polaroids */}
          <div className="hidden w-28 flex-col gap-6 pt-6 sm:flex sm:w-40">
            <Polaroid src={pick(0)} rotate={-7} delay={0.05} />
            <Polaroid src={pick(1)} rotate={5} delay={0.15} />
            <p className="text-center font-script text-lg text-rose/80">{memories.leftLabel}</p>
          </div>

          {/* center strips */}
          <div className="flex gap-3 sm:gap-5">
            {[0, 1].map((strip) => (
              <div
                key={strip}
                style={
                  {
                    "--tilt": `${strip === 0 ? -4 : 4}deg`,
                    transform: `rotate(${strip === 0 ? -4 : 4}deg)`,
                    animationDelay: `${0.2 + strip * 0.15}s`,
                  } as React.CSSProperties
                }
                className="flex w-24 animate-drop-in flex-col gap-1.5 rounded-sm bg-card p-1.5 shadow-polaroid transition-transform duration-300 hover:!rotate-0 hover:scale-105 sm:w-28"
              >
                {photos.slice(2 + strip * 4, 6 + strip * 4).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="A memory with you"
                    width={768}
                    height={768}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                ))}
              </div>
            ))}

          </div>

          {/* right big polaroids */}
          <div className="hidden w-28 flex-col gap-6 pt-10 sm:flex sm:w-40">
            <Polaroid src={pick(10)} rotate={6} delay={0.1} />
            <Polaroid src={pick(11)} rotate={-5} delay={0.2} />
            <p className="text-center font-script text-lg text-rose/80">{memories.rightLabel}</p>
          </div>
        </div>

        {/* mobile side polaroids */}
        <div className="mt-8 flex gap-4 sm:hidden">
          <Polaroid src={pick(0)} rotate={-6} className="w-32" />
          <Polaroid src={pick(11)} rotate={6} className="w-32" />
        </div>
        <p className="mt-4 text-center font-script text-lg text-rose/80 sm:hidden">
          {memories.leftLabel}
        </p>

        <BackButton label={gifts.back} onClick={onBack} />
      </div>
    </div>
  );
}
