"use client";

import { useEffect, useRef, useState } from "react";
import {
  Shield, Settings, Users, MessageSquare, BarChart2, Wrench, Terminal,
} from "lucide-react";

interface Skill { name: string; level: "Alto" | "Medio" | "Básico" }
interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  tag: string;
  description: string;
  color: string;
  skills: Skill[];
}

const levelStyle: Record<string, string> = {
  Alto:   "bg-green-100 text-green-700 border border-green-300",
  Medio:  "bg-yellow-50 text-yellow-700 border border-yellow-200",
  Básico: "bg-gray-100  text-gray-500  border border-gray-200",
};

const levelDot: Record<string, string> = {
  Alto: "bg-green-500",
  Medio: "bg-yellow-400",
  Básico: "bg-gray-400",
};

const categories: SkillCategory[] = [
  {
    icon: <Shield className="w-5 h-5" />, color: "text-green-600 bg-green-100 border-green-200",
    title: "Moderación & Staff", tag: "moderation.ts",
    description: "Domino todo lo relacionado con moderación y gestión de equipos.",
    skills: [
      { name: "Moderación in-game", level: "Alto" },
      { name: "Gestión de equipos Staff", level: "Alto" },
      { name: "Resolución de conflictos", level: "Alto" },
      { name: "Reclutamiento & formación", level: "Alto" },
      { name: "Sistemas de sanciones", level: "Alto" },
      { name: "Tickets & soporte", level: "Alto" },
    ],
  },
  {
    icon: <MessageSquare className="w-5 h-5" />, color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    title: "Discord", tag: "discord.config",
    description: "Mucho conocimiento en todo lo relacionado con Discord.",
    skills: [
      { name: "Bots propios (simple/medio/complejo)", level: "Alto" },
      { name: "Nekotina", level: "Alto" },
      { name: "MEE6", level: "Alto" },
      { name: "ProBot", level: "Alto" },
      { name: "Webhooks", level: "Alto" },
      { name: "Canales, roles & permisos", level: "Alto" },
      { name: "Embeds & anuncios", level: "Alto" },
      { name: "Automod & seguridad", level: "Alto" },
    ],
  },
  {
    icon: <Settings className="w-5 h-5" />, color: "text-orange-600 bg-orange-50 border-orange-200",
    title: "Plugins Minecraft", tag: "plugins.yml",
    description: "Configuración rápida de plugins variados, me adapto fácil a lo nuevo.",
    skills: [
      { name: "FancyHolograms", level: "Alto" },
      { name: "FancyNPCs", level: "Alto" },
      { name: "DeluxeMenus", level: "Alto" },
      { name: "TAB", level: "Alto" },
      { name: "EssentialsX", level: "Alto" },
      { name: "LuckPerms", level: "Alto" },
      { name: "Adaptación rápida a nuevos plugins", level: "Alto" },
    ],
  },
  {
    icon: <Wrench className="w-5 h-5" />, color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    title: "Tiendas Tebex", tag: "tebex.shop",
    description: "Creación y gestión de tiendas en Tebex.",
    skills: [
      { name: "Creación de paquetes", level: "Alto" },
      { name: "Estética e info principal", level: "Alto" },
      { name: "Gestión de contenido", level: "Alto" },
      { name: "Configuración de la tienda", level: "Alto" },
    ],
  },
  {
    icon: <Users className="w-5 h-5" />, color: "text-pink-600 bg-pink-50 border-pink-200",
    title: "Gestión de comunidad", tag: "community.js",
    description: "Experiencia real gestionando comunidades activas.",
    skills: [
      { name: "Comunicación interna", level: "Alto" },
      { name: "Eventos in-game", level: "Alto" },
      { name: "Reglas y documentación", level: "Alto" },
      { name: "Gestión de community", level: "Alto" },
    ],
  },
  {
    icon: <BarChart2 className="w-5 h-5" />, color: "text-violet-600 bg-violet-50 border-violet-200",
    title: "Actitud & adaptación", tag: "soft.skills",
    description: "Lo que me define más allá de las herramientas.",
    skills: [
      { name: "Me adapto rápido y fácil", level: "Alto" },
      { name: "Proactividad", level: "Alto" },
      { name: "Trabajo en equipo", level: "Alto" },
      { name: "Compromiso con el proyecto", level: "Alto" },
    ],
  },
];

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
      {/* Card header with file tab */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="ml-2 text-xs font-mono text-gray-400">{cat.tag}</span>
      </div>

      <div className="p-5">
        {/* Icon + title */}
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

        {/* Skills list */}
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
            className="text-center mb-16 transition-all duration-700"
            style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "none" : "translateY(24px)" }}
          >
            {/* Terminal badge */}
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
              Áreas en las que me he especializado gestionando servidores y comunidades.
            </p>

            {/* Legend */}
            <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
              {(["Alto", "Medio", "Básico"] as const).map(lvl => (
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

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <SkillCard key={i} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
