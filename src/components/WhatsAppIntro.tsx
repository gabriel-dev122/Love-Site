import { ArrowLeft, Video, Phone, Search, Plus, Mic, Smile, Check } from "lucide-react";
import heartQr from "@/assets/heart-qr.jpg";
import { loveConfig } from "@/lib/love-config";

export function WhatsAppIntro({ onOpen }: { onOpen: () => void }) {
  const { whatsapp } = loveConfig;

  return (
    <div className="flex min-h-screen flex-col bg-whatsapp-bg text-white">
      {/* Chat header */}
      <header className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
        <ArrowLeft className="size-5 shrink-0 opacity-80" />
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/30 text-lg">
          💗
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold">{whatsapp.contactName}</p>
          <p className="truncate text-[11px] text-white/50">{whatsapp.contactStatus}</p>
        </div>
        <Video className="size-5 opacity-80" />
        <Phone className="size-5 opacity-80" />
        <Search className="size-5 opacity-80" />
      </header>

      {/* Messages */}
      <main className="flex flex-1 flex-col items-end justify-center gap-2 px-4 py-6">
        <Bubble time={whatsapp.firstMessageTime} delay={0.15}>
          {whatsapp.firstMessage}
        </Bubble>

        <button
          type="button"
          onClick={onOpen}
          aria-label="Open your surprise"
          style={{ animationDelay: "0.4s" }}
          className="group relative mt-1 w-full max-w-[280px] animate-qr-pop overflow-hidden rounded-lg bg-white p-3 shadow-2xl transition-transform duration-300 hover:scale-[1.03] active:scale-95"
        >
          <img
            src={heartQr}
            alt="Heart shaped QR code"
            width={1024}
            height={1024}
            className="aspect-square w-full rounded-sm object-contain"
          />
          {/* scan line */}
          <span className="pointer-events-none absolute left-3 right-3 top-3 h-[3px] animate-scan rounded-full bg-whatsapp/80 shadow-[0_0_12px_2px_oklch(0.42_0.09_155/0.8)]" />
          {/* scanner corners */}
          <span className="pointer-events-none absolute left-2 top-2 size-7 rounded-tl-md border-l-4 border-t-4 border-white/90 mix-blend-difference" />
          <span className="pointer-events-none absolute right-2 top-2 size-7 rounded-tr-md border-r-4 border-t-4 border-white/90 mix-blend-difference" />
          <span className="pointer-events-none absolute bottom-2 left-2 size-7 rounded-bl-md border-b-4 border-l-4 border-white/90 mix-blend-difference" />
          <span className="pointer-events-none absolute bottom-2 right-2 size-7 rounded-br-md border-b-4 border-r-4 border-white/90 mix-blend-difference" />
          <span className="absolute bottom-3 right-4 text-[10px] font-medium text-ink/60">
            {whatsapp.firstMessageTime}
          </span>
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
            {whatsapp.hint}
          </span>
        </button>

        <div className="mt-4">
          <Bubble time={whatsapp.secondMessageTime} delay={0.9}>
            {whatsapp.secondMessage}
          </Bubble>
        </div>
      </main>


      {/* Input bar */}
      <footer className="flex items-center gap-2 px-3 pb-6 pt-2">
        <div className="flex flex-1 items-center gap-2 rounded-full bg-white/10 px-4 py-3">
          <Smile className="size-5 opacity-60" />
          <span className="text-sm text-white/40">Message</span>
          <Plus className="ml-auto size-5 opacity-60" />
        </div>
        <div className="flex size-11 items-center justify-center rounded-full bg-whatsapp">
          <Mic className="size-5" />
        </div>
      </footer>
    </div>
  );
}

function Bubble({
  children,
  time,
  delay = 0,
}: {
  children: React.ReactNode;
  time: string;
  delay?: number;
}) {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className="max-w-[80%] animate-bubble-in rounded-2xl rounded-br-sm bg-whatsapp px-3 py-2 text-[15px] shadow-lg"
    >
      <span className="align-middle">{children}</span>
      <span className="ml-2 inline-flex items-center gap-0.5 align-middle text-[10px] text-white/60">
        {time}
        <Check className="size-3" />
      </span>
    </div>
  );
}

