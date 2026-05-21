"use client";

import { useState, useEffect, useRef } from "react";
import { Eye, ChevronRight, Code2, Zap } from "lucide-react";
import spyglassIcon from "@/assets/spyglass.png";
import anvilIcon from "@/assets/anvil.png";
import gearIcon from "@/assets/gear.png";

interface HeroProps {
  onNavigate?: (section: "inicio" | "experiencia" | "conocimientos" | "testimonios" | "contacto") => void;
}

const CODE_LINES = [
  { tokens: [{ t: "keyword", v: "const" }, { t: " ", v: " " }, { t: "var", v: "diwgo" }, { t: " ", v: " = {" }] },
  { tokens: [{ t: "indent", v: "  " }, { t: "string", v: "role" }, { t: " ", v: ": " }, { t: "green", v: '"Server Manager"' }, { t: "," , v: "," }] },
  { tokens: [{ t: "indent", v: "  " }, { t: "string", v: "skills" }, { t: " ", v: ": [" }, { t: "green", v: '"Minecraft"' }, { t: ",", v: ", " }, { t: "green", v: '"Discord"' }, { t: "]," , v: "]," }] },
  { tokens: [{ t: "indent", v: "  " }, { t: "string", v: "xp" }, { t: " ", v: ": " }, { t: "number", v: "4" }, { t: " ", v: ", " }, { t: "comment", v: "// años" }] },
  { tokens: [{ t: "indent", v: "  " }, { t: "string", v: "status" }, { t: " ", v: ": " }, { t: "green", v: '"disponible ✓"' }] },
  { tokens: [{ t: "var", v: "}" }] },
];

const FLOATING_SNIPPETS = [
  { code: "npm run build", x: "5%",  y: "20%", delay: 0 },
  { code: "git commit -m 'fix'", x: "75%", y: "15%", delay: 0.8 },
  { code: "plugins.reload()", x: "80%", y: "65%", delay: 1.5 },
  { code: "discord.setStatus('online')", x: "3%",  y: "70%", delay: 2.2 },
  { code: "/op diwgo", x: "60%", y: "80%", delay: 0.4 },
  { code: "chmod 755 start.sh", x: "15%", y: "85%", delay: 1.2 },
];

function TypedLine({ tokens, visible }: { tokens: any[]; visible: boolean }) {
  return (
    <div
      className={`transition-all duration-500 overflow-hidden ${visible ? "max-h-12 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div className="px-4 py-0.5 font-mono text-sm leading-6">
        {tokens.map((t, i) => (
          <span
            key={i}
            className={
              t.t === "keyword" ? "text-red-400" :
              t.t === "var"     ? "text-orange-300" :
              t.t === "string"  ? "text-blue-300" :
              t.t === "green"   ? "text-green-400" :
              t.t === "comment" ? "text-gray-500 italic" :
              t.t === "number"  ? "text-cyan-300" :
              t.t === "func"    ? "text-purple-300" :
              "text-gray-300"
            }
          >
            {t.v}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero({ onNavigate }: HeroProps) {
  const [visitas, setVisitas] = useState<number>(0);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/portfolio-mc-staff-pro/visitas/up")
      .then(r => r.json())
      .then(d => setVisitas(d.count))
      .catch(() => setVisitas(124));
  }, []);

  // Animate code lines appearing one by one
  useEffect(() => {
    const timer = setTimeout(() => setTitleVisible(true), 100);
    let line = 0;
    const interval = setInterval(() => {
      line++;
      setVisibleLines(line);
      if (line >= CODE_LINES.length) clearInterval(interval);
    }, 280);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #cce5d4 0%, #b8dcc2 30%, #cce5d4 60%, #c4e0cb 100%)" }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(34,197,94,0.12), transparent)",
        }}
      />

      {/* Floating code snippets */}
      {FLOATING_SNIPPETS.map((s, i) => (
        <div
          key={i}
          className="absolute hidden lg:block pointer-events-none select-none animate-float"
          style={{
            left: s.x, top: s.y,
            animationDelay: `${s.delay}s`,
            animationDuration: `${3.5 + i * 0.3}s`,
          }}
        >
          <div
            className="px-3 py-1.5 rounded-lg text-xs font-mono text-green-700 border border-green-200 bg-white/60 backdrop-blur-sm shadow-sm"
            style={{ fontSize: "11px" }}
          >
            <span className="text-green-500 mr-1">$</span>{s.code}
          </div>
        </div>
      ))}

      {/* Visits badge */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
        <Eye className="w-3.5 h-3.5 text-green-500" />
        <span className="text-green-700 text-xs font-mono font-medium">
          {visitas > 0 ? `${visitas.toLocaleString()} visitas` : "..."}
        </span>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT: Text */}
            <div className={`transition-all duration-700 ${titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-700 text-sm font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Gestión & Desarrollo Discord/Minecraft
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-5xl lg:text-6xl font-black mb-4 leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <span className="text-gray-900">Gestión de</span>
                <br />
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
                  servidores
                </span>
                <br />
                <span className="text-gray-900">Minecraft</span>
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Modero y organizo servidores y comunidades de manera eficiente.
                Configuro plugins y gestiono Discord para un funcionamiento sencillo y eficaz.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  onClick={() => onNavigate?.("experiencia")}
                  className="group flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:-translate-y-1"
                  style={{ boxShadow: "0 4px 15px rgba(34,197,94,0.4)" }}
                >
                  <Code2 className="w-4 h-4" />
                  Ver Experiencia
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate?.("contacto")}
                  className="flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-xl font-semibold text-sm border-2 border-green-300 transition-all duration-300 hover:border-green-500 hover:bg-green-50 hover:-translate-y-1"
                >
                  <Zap className="w-4 h-4" />
                  Contáctame
                </button>
              </div>

              {/* Mini icons row */}
              <div className="flex items-center gap-4">
                {[spyglassIcon, anvilIcon, gearIcon].map((icon, i) => (
                  <div
                    key={i}
                    className="animate-bounce-subtle"
                    style={{ animationDelay: `${i * 0.25}s` }}
                  >
                    <img
                      src={(icon as any).src || icon}
                      alt=""
                      className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>
                ))}
                <span className="text-gray-400 text-xs font-mono ml-2">// minecraft stack</span>
              </div>
            </div>

            {/* RIGHT: Code terminal */}
            <div
              className={`transition-all duration-700 delay-300 ${titleVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
                style={{ background: "#0d1117" }}
              >
                {/* Terminal titlebar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800" style={{ background: "#161b22" }}>
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs font-mono text-gray-500">diwgo.ts</span>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-mono text-green-400">running</span>
                  </div>
                </div>

                {/* Line numbers + code */}
                <div className="p-4 min-h-[220px]">
                  {CODE_LINES.map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-gray-600 font-mono text-xs mr-4 select-none w-4 text-right leading-6">{i + 1}</span>
                      <TypedLine tokens={line.tokens} visible={i < visibleLines} />
                    </div>
                  ))}

                  {/* Cursor */}
                  {visibleLines >= CODE_LINES.length && (
                    <div className="flex mt-1">
                      <span className="text-gray-600 font-mono text-xs mr-4 select-none w-4 text-right leading-6">{CODE_LINES.length + 1}</span>
                      <span className="font-mono text-green-400 animate-blink text-sm">█</span>
                    </div>
                  )}
                </div>

                {/* Terminal output */}
                <div className="px-4 pb-4 border-t border-gray-800 pt-3" style={{ background: "#010409" }}>
                  <span className="font-mono text-xs text-gray-500">$ </span>
                  <span className="font-mono text-xs text-green-400">Compilado sin errores ✓</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "Proyectos", value: "4+", icon: "🚀" },
                  { label: "Años XP",   value: "2+", icon: "⚡" },
                  { label: "Estado",    value: "Online", icon: "🟢" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-green-50/80 rounded-xl p-3 border border-green-100 text-center card-hover"
                  >
                    <div className="text-xl mb-1">{stat.icon}</div>
                    <div className="text-green-700 font-black text-lg leading-none">{stat.value}</div>
                    <div className="text-gray-500 text-xs mt-0.5 font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom: feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {[
              { title: "Moderación", desc: "Presencia constante para ayudar a los usuarios y mantener el orden.", icon: "🛡️", tag: "moderation.ts" },
              { title: "Server Admin", desc: "Gestión de plugins y resolución de problemas técnicos dentro del juego.", icon: "⚙️", tag: "admin.config" },
              { title: "Staff Manager", desc: "Dedicación plena para que el proyecto crezca de forma estable y profesional.", icon: "👥", tag: "team.manage" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-green-100 card-hover animate-fade-up"
                style={{ animationDelay: `${0.5 + i * 0.15}s` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-mono text-green-500 bg-green-50 px-2 py-0.5 rounded-md border border-green-100">{item.tag}</span>
                </div>
                <div className="text-gray-900 font-bold text-base mb-1">{item.title}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
