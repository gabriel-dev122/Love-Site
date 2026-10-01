import catShy from "@/assets/cat-shy.png";
import catHappy from "@/assets/cat-happy.png";
import catConfused from "@/assets/cat-confused.png";
import catSerious from "@/assets/cat-serious.png";
import catHeart from "@/assets/cat-heart.png";
import type { Mood } from "@/lib/love-config";

const moods: Record<Mood, string> = {
  shy: catShy,
  happy: catHappy,
  confused: catConfused,
  serious: catSerious,
  heart: catHeart,
};

export function CatMascot({
  mood = "shy",
  className = "",
  priority = false,
}: {
  mood?: Mood;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      key={mood}
      src={moods[mood]}
      alt="Cute cat mascot"
      width={768}
      height={768}
      loading={priority ? "eager" : "lazy"}
      className={`animate-pop select-none drop-shadow-[0_10px_18px_oklch(0.7_0.15_0/0.25)] ${className}`}
      draggable={false}
    />
  );
}
