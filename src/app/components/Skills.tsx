"use client";

import { useEffect, useRef, useState } from "react";
import {
  Shield, Settings, Users, MessageSquare, Wrench, Terminal, Code2, BookOpen,
} from "lucide-react";

interface Skill { name: string; level: "Alto" | "Medio" | "Aprendiendo" }
interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  tag: string;
  description: string;
  color: string;
  skills: Skill[];
}

const levelStyle: Record<string, string> = {
  Alto:        "bg-green-100 text-green-700 border border-green-300",
  Medio:       "bg-yellow-50 text-yellow-700 border border-yellow-200",
  Aprendiendo: "bg-blue-50   text-blue-600  border border-blue-200",
};

const levelDot: Record<string, string> = {
  Alto:        "bg-green-500",
  Medio:       "bg-yellow-400",
  Aprendiendo: "bg-blue-400",
};

const categories: SkillCategory[] = [
  {
    icon: <Shield className="w-5 h-5" />, color: "text-green-600 bg-green-100 border-green-200",
    title: "Moderación & Staff", tag: "moderation.ts",
    description: "Gestión de equipos, sanciones, tickets y comunidades activas.",
    skills: [
      { name: "Moderación in-game",          level: "Alto"  },
      { name: "Gestión de equipos Staff",    level: "Alto"  },
      { name: "Sistemas de sanciones",       level: "Alto"  },
      { name: "Tickets & soporte",           level: "Alto"  },
      { name: "Reclutamiento & formación",   level: "Alto"  },
    ],
  },
  {
    icon: <MessageSquare className="w-5 h-5" />, color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    title: "Discord", tag: "discord.config",
    description: "Configuración avanzada, bots propios y gestión de servidores.",
    skills: [
      { name: "Bots propios",                level: "Alto"  },
      { name: "Canales, roles & permisos",   level: "Alto"  },
      { name: "Webhooks & embeds & Components V2)",           level: "Alto"  },
      { name: "Automod & seguridad",         level: "Alto"  },
      { name: "Nekotina / MEE6 / ProBot",    level: "Alto"  },
    ],
  },
  {
    icon: <Settings className="w-5 h-5" />, color: "text-orange-600 bg-orange-50 border-orange-200",
    title: "Configuración MC", tag: "plugins.yml",
    description: "Plugins variados, me adapto rápido a lo que haga falta.",
    skills: [
      { name: "LuckPerms / EssentialsX",     level: "Alto"  },
      { name: "DeluxeMenus / TAB",           level: "Alto"  },
      { name: "FancyHolograms / NPCs",       level: "Alto"  },
      { name: "Creación de plugins Java",    level: "Aprendiendo" },
      { name: "Adaptació a nnuevos plugins", level: "Alto"  },
    ],
  },
  {
    icon: <Wrench className="w-5 h-5" />, color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    title: "Tebex & comunidad", tag: "community.shop",
    description: "Tiendas, eventos in-game y documentación.",
    skills: [
      { name: "Creación de tiendas Tebex",   level: "Alto"  },
      { name: "Eventos in-game",             level: "Alto"  },
      { name: "Reglas y documentación",      level: "Alto"  },
      { name: "Comunicación interna",        level: "Alto"  },
    ],
  },
];

// ── About me card ────────────────────────────────────────────────────────────
function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      icon: <Settings className="w-4 h-4" />,
      color: "text-orange-500 bg-orange-50 border-orange-200",
      title: "Configuración Minecraft",
      desc: "Llevo tiempo configurando servidores: plugins, permisos, menús, hologramas... lo que haga falta.",
    },
    {
      icon: <Code2 className="w-4 h-4" />,
      color: "text-violet-500 bg-violet-50 border-violet-200",
      title: "Aprendiendo a crear plugins",
      desc: "Estoy aprendiendo Java para hacer mis propios plugins de Minecraft. De momento conceptos básicos, pero avanzando.",
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      color: "text-indigo-500 bg-indigo-50 border-indigo-200",
      title: "Bots de Discord",
      desc: "Creo bots propios con Discord.js, desde comandos simples hasta sistemas más completos con bases de datos.",
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      color: "text-green-500 bg-green-50 border-green-200",
      title: "Discord en general",
      desc: "Sé mucho de Discord: configurar servidores, bots, permisos, automod, webhooks... prácticamente todo.",
    },
  ];

  return (
    <div
      ref={ref}
      className="mb-16 transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)" }}
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-green-200 overflow-hidden shadow-sm">
        {/* Titlebar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <span className="ml-2 text-xs font-mono text-gray-400">about.me</span>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-black text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>
              Sobre mí
            </h3>
            <span className="text-xs font-mono text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-md">
              _diwgo_
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed max-w-2xl">
            Me muevo bien en el mundo de Minecraft y Discord. No soy todo dev, pero sí sé lo que hago:
            gestionar, configurar y hacer que las cosas funcionen. Y lo que no sé todavía, lo estoy aprendiendo.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  borderColor: "rgba(34,197,94,0.2)",
                  transitionDelay: `${i * 60}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div className={`inline-flex p-2 rounded-lg border mb-3 ${item.color}`}>
                  {item.icon}
                </div>
                <div className="font-bold text-gray-900 text-sm mb-1">{item.title}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Skill card ───────────────────────────────────────────────────────────────
function SkillCard({ cat, index }: { cat: SkillCategory; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-green-50/60 rounded-2xl border border-green-200 overflow-hidden card-hover transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="ml-2 text-xs font-mono text-gray-400">{cat.tag}</span>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className={`p-2.5 rounded-xl border ${cat.color} flex-shrink-0`}>
            {cat.icon}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              {cat.title}
            </h3>
            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{cat.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {cat.skills.map((skill, j) => (
            <span
              key={j}
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg ${levelStyle[skill.level]}`}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px" }}
            >
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${levelDot[skill.level]}`} />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="conocimientos" className="min-h-screen py-20 bg-gradient-to-b from-green-100/60 to-green-100/80">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-12 transition-all duration-700"
            style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "none" : "translateY(24px)" }}
          >
            <div
              className="inline-flex items-center gap-2 bg-gray-900 text-green-400 px-4 py-2 rounded-full mb-6 border border-gray-700"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="text-xs">cat skills.json | grep "nivel: alto"</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Mis{" "}
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
                Conocimientos
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Áreas en las que me muevo bien - y alguna en la que aún estoy creciendo.
            </p>

            {/* Legend */}
            <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
              {(["Alto", "Medio", "Aprendiendo"] as const).map(lvl => (
                <span
                  key={lvl}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${levelStyle[lvl]}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span className={`w-2 h-2 rounded-full ${levelDot[lvl]}`} />
                  {lvl}
                </span>
              ))}
            </div>
          </div>

          {/* About me */}
          <AboutMe />

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
            {categories.map((cat, i) => (
              <SkillCard key={i} cat={cat} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
