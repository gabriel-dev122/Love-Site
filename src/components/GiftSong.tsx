import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { FloatingHearts } from "@/components/FloatingHearts";
import { loveConfig } from "@/lib/love-config";

const { song, gifts } = loveConfig;

export function GiftSong({ onBack }: { onBack: () => void }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fake progress when there is no audio file, real progress when there is one.
  useEffect(() => {
    if (!playing || song.audioUrl) return;
    const id = window.setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.5));
    }, 200);
    return () => window.clearInterval(id);
  }, [playing]);

  const toggle = () => {
    const audio = audioRef.current;
    if (audio) {
      if (playing) audio.pause();
      else void audio.play();
    }
    setPlaying((p) => !p);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-romance px-5 py-10">
      <FloatingHearts count={8} />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <h1 className="mb-8 text-center font-script text-3xl text-rose sm:text-4xl">
          {song.title}
        </h1>

        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-start md:justify-center">
          {/* Vinyl */}
          <div className="flex w-full max-w-xs items-center justify-center rounded-3xl bg-blush/60 p-8 shadow-soft md:w-72">
            <div
              className={`relative flex aspect-square w-48 items-center justify-center rounded-full bg-ink shadow-xl ${
                playing ? "animate-spin-slow" : ""
              }`}
            >
              <span className="absolute inset-4 rounded-full border border-white/10" />
              <span className="absolute inset-8 rounded-full border border-white/10" />
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                {song.vinylLabel}
              </span>
            </div>
          </div>

          {/* Player card */}
          <div className="w-full max-w-sm rounded-3xl bg-blush/60 p-4 shadow-soft">
            <a
              href={song.youtubeUrl || undefined}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-2xl"
            >
              <img
                src={song.thumbnail}
                alt={`${song.trackTitle} by ${song.artist}`}
                width={1024}
                height={576}
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center bg-ink/25 text-center">
                <span className="font-display text-2xl font-bold text-cream drop-shadow sm:text-3xl">
                  {song.trackTitle}
                </span>
                <span className="font-sans text-xs font-semibold tracking-[0.3em] text-cream/90">
                  {song.artist}
                </span>
                <span className="mt-3 flex h-8 w-12 items-center justify-center rounded-md bg-destructive shadow-lg transition-transform group-hover:scale-110">
                  <Play className="size-4 fill-current text-destructive-foreground" />
                </span>
              </span>
            </a>

            {/* Progress */}
            <div className="mt-4 px-1">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-card/70">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-1 flex justify-between font-sans text-[10px] text-rose/70">
                <span>0:00</span>
                <span>{song.duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-3 flex items-center justify-center gap-6 pb-1">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => setProgress(0)}
                className="text-rose transition-transform hover:scale-110"
              >
                <SkipBack className="size-6 fill-current" />
              </button>
              <button
                type="button"
                aria-label={playing ? "Pause" : "Play"}
                onClick={toggle}
                className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105 active:scale-95"
              >
                {playing ? (
                  <Pause className="size-6 fill-current" />
                ) : (
                  <Play className="size-6 fill-current" />
                )}
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => setProgress(100)}
                className="text-rose transition-transform hover:scale-110"
              >
                <SkipForward className="size-6 fill-current" />
              </button>
            </div>

            {song.audioUrl ? (
              <audio
                ref={audioRef}
                src={song.audioUrl}
                onTimeUpdate={(e) => {
                  const el = e.currentTarget;
                  if (el.duration) setProgress((el.currentTime / el.duration) * 100);
                }}
                onEnded={() => setPlaying(false)}
              />
            ) : null}
          </div>
        </div>

        <BackButton label={gifts.back} onClick={onBack} />
      </div>
    </div>
  );
}
