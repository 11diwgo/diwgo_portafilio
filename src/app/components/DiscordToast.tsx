"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Icono de Discord SVG inline para no depender de librería externa
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
    </svg>
  );
}

interface ToastMessage {
  text: string;
  sub: string;
  url: string;
  cta: string;
}

const messages: ToastMessage[] = [
  {
    text: "Únete a mi comunidad",
    sub: "Discord · _diwgo_",
    url: "https://discord.gg/TU_INVITE_AQUI",   // ← cambia por tu invite
    cta: "Unirse",
  },
  {
    text: "Añade MySuggest a tu server",
    sub: "Bot de sugerencias para Discord",
    url: "https://discord.com/oauth2/authorize?client_id=TU_BOT_ID",  // ← cambia por tu bot link
    cta: "Añadir bot",
  },
];

export function DiscordToast() {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(true);
  const [fading, setFading]   = useState(false);
  const [closed, setClosed]   = useState(false);

  // Rota cada 5 segundos con fade
  useEffect(() => {
    if (closed) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setFading(false);
      }, 350);
    }, 5000);
    return () => clearInterval(interval);
  }, [closed]);

  if (closed) return null;

  const msg = messages[index];

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-350
        ${fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}
        ${visible ? "" : "pointer-events-none opacity-0"}
      `}
    >
      <div className="flex items-center gap-3 bg-[#5865F2] text-white px-4 py-3 rounded-2xl shadow-xl shadow-black/40 border border-white/10 min-w-[260px] max-w-xs">
        {/* Icono */}
        <div className="shrink-0 bg-white/15 rounded-xl p-2">
          <DiscordIcon className="w-5 h-5 text-white" />
        </div>

        {/* Texto */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold leading-tight truncate">{msg.text}</p>
          <p className="text-xs text-white/70 truncate">{msg.sub}</p>
        </div>

        {/* CTA */}
        <a
          href={msg.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-white text-[#5865F2] text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-white/90 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          {msg.cta}
        </a>

        {/* Cerrar */}
        <button
          onClick={() => setClosed(true)}
          className="shrink-0 text-white/50 hover:text-white/90 transition-colors -mr-1"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Barra de progreso */}
      <div className="mt-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div
          key={index}
          className="h-full bg-white/40 rounded-full"
          style={{ animation: "progress 5s linear forwards" }}
        />
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  );
}
