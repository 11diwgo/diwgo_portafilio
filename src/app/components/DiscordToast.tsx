"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
    </svg>
  );
}

interface ToastMessage {
  title: string;
  body: string;
  hint?: string;
  url: string;
  cta: string;
}

const messages: ToastMessage[] = [
  {
    title: "Discord (Próximamente)",
    body: "Si quieres conocer más sobre mi trabajo, puedes unirte a mi comunidad de Discord. Allí podrás contactarme directamente, compartir ideas y estar al tanto de mis proyectos.",
    url: "https://discord.gg/TU_INVITE_AQUI",
    cta: "Unirse al Discord",
  },
  {
    title: "MySuggest",
    body: "¿Tienes un servidor de Discord? Añade MySuggest, mi bot de sugerencias. Fácil de configurar y muy útil para tu comunidad.",
    hint: "Gratis, sin complicaciones. Solo añádelo y listo. ✅",
    url: "https://discord.com/oauth2/authorize?client_id=TU_BOT_ID",
    cta: "Añadir MySuggest",
  },
];

export function DiscordToast() {
  const [index, setIndex]   = useState(0);
  const [fading, setFading] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setFading(false);
      }, 400);
    }, 7000);
    return () => clearInterval(interval);
  }, [closed]);

  if (closed) return null;

  const msg = messages[index];

  return (
    <div
      className={`fixed bottom-24 right-5 z-50 w-72 transition-all duration-400
        ${fading ? "opacity-0 translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100"}
      `}
    >
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10"
           style={{ background: "#313338" }}>

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3"
             style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2">
            <div className="bg-[#5865F2] rounded-lg p-1.5">
              <DiscordIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-base tracking-tight">{msg.title}</span>
          </div>
          <button
            onClick={() => setClosed(true)}
            className="text-white/40 hover:text-white/80 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 pt-3 pb-1">
          <p className="text-white/90 text-sm leading-relaxed">{msg.body}</p>
        </div>

        {/* Hint */}
        {msg.hint && (
          <div className="px-4 pt-2 pb-1">
            <p className="text-white/35 text-xs italic leading-relaxed">{msg.hint}</p>
          </div>
        )}

        {/* CTA */}
        <div className="px-4 pb-4 pt-3">
          <a
            href={msg.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-sm py-2.5 rounded-xl transition-colors"
          >
            <DiscordIcon className="w-4 h-4" />
            {msg.cta}
          </a>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-white/5">
          <div
            key={index}
            className="h-full bg-[#5865F2]/60"
            style={{ animation: "dcprogress 7s linear forwards" }}
          />
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-2">
        {messages.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setIndex(i); setFading(false); }, 400); }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? "bg-[#5865F2] scale-125" : "bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes dcprogress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  );
}
