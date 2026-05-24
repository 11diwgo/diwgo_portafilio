"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, MessageSquare, Copy, Check, Terminal, Zap } from "lucide-react";
import nameMCLogo from "@/assets/namemc-logo.png";

export function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const discordUser = "_diwgo_";
  const nameMCUrl = "https://es.namemc.com/profile/diwgo_.1";

  const handleCopy = () => {
    navigator.clipboard.writeText(discordUser);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-green-100/50 to-green-50/60">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto" ref={ref}>

          {/* Header */}
          <div
            className="text-center mb-16 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)" }}
          >
            <div
              className="inline-flex items-center gap-2 bg-gray-900 text-green-400 px-4 py-2 rounded-full mb-6 border border-gray-700"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="text-xs">contact --method=discord</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Ponte en{" "}
              <span
                className="text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  backgroundImage: "linear-gradient(135deg, #16a34a, #22c55e, #4ade80)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                contacto
              </span>
            </h2>
            <p className="text-gray-500 text-lg">¿Necesitas ayuda con tu servidor de Minecraft?</p>
          </div>

          {/* Main card - terminal style */}
          <div
            className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(32px)",
              transitionDelay: "200ms",
            }}
          >
            {/* Terminal top bar */}
            <div
              className="flex items-center gap-2 px-6 py-4 border-b border-gray-800"
              style={{ background: "#161b22" }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs font-mono text-gray-500">contact.sh</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-green-400">disponible</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12" style={{ background: "linear-gradient(135deg, #cce5d4, #b8dcc3, #cce5d4)" }}>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Construyamos algo increíble juntos
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto">
                  Siempre estoy interesado en nuevas oportunidades para ayudar a crecer y gestionar comunidades de Minecraft.
                </p>
              </div>

              {/* Contact options */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {/* Email - coming soon */}
                <div className="flex items-center gap-4 p-4 bg-green-50/60 rounded-2xl border border-gray-200 opacity-50">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 mb-0.5">// correo</div>
                    <div className="text-gray-500 font-semibold text-sm">Próximamente...</div>
                  </div>
                </div>

                {/* Discord - active */}
                <div
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border-2 border-green-300 shadow-md"
                  style={{ boxShadow: "0 0 20px rgba(34,197,94,0.15)" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-green-500 mb-0.5">// discord</div>
                    <div className="text-gray-900 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {discordUser}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <div className="flex justify-center">
                <button
                  onClick={handleCopy}
                  className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 ${
                    isCopied
                      ? "bg-green-600"
                      : "bg-green-500 hover:bg-green-600 hover:-translate-y-1"
                  }`}
                  style={{
                    boxShadow: isCopied
                      ? "0 0 20px rgba(34,197,94,0.6)"
                      : "0 4px 20px rgba(34,197,94,0.4)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      ¡Copiado en el portapapeles!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Copiar usuario de Discord
                      <Zap className="w-4 h-4 opacity-60" />
                    </>
                  )}
                </button>
              </div>

              {/* NameMC link */}
              <div className="flex justify-center mt-8 pt-6 border-t border-green-200">
                <button
                  title="Ver perfil NameMC"
                  onClick={() => window.open(nameMCUrl, "_blank", "noopener,noreferrer")}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full hover:bg-green-100 transition-colors"
                >
                  <img
                    src={typeof nameMCLogo === "string" ? nameMCLogo : (nameMCLogo as any).src}
                    alt="NameMC"
                    className="w-5 h-5 opacity-40 group-hover:opacity-80 transition-opacity"
                    style={{ imageRendering: "pixelated" }}
                  />
                  <span className="text-xs font-mono text-gray-400 group-hover:text-green-600 transition-colors">
                    namemc / diwgo_
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
