"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, TrendingUp, ChevronRight } from "lucide-react";

import vaperLogo from "@/assets/vaper-logo.jpg";
import vaperBanner from "@/assets/vaper-spawn.jpg";
import nauticLogo from "@/assets/nautic-logo.jpg";
import nauticBanner from "@/assets/nautic-scoreboard.jpg";
import fluxLogo from "@/assets/flux-logo.jpg";
import astryxLogo from "@/assets/astryx-logo.png";
import astryxBanner from "@/assets/astryx-banner.png";
import diosesLogo from "@/assets/dioses-logo.png";
import diosesBanner from "@/assets/dioses-banner.png";

interface ExperienceItem {
  server: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  isPromotion?: boolean;
  rankImage?: any;
  bannerImage?: any;
}

const experiences: ExperienceItem[] = [
  {
    server: "Astryx Network",
    role: "Dueño",
    period: "Enero 2026 - Ahora",
    isPromotion: true,
    rankImage: astryxLogo,
    bannerImage: astryxBanner,
    description: "Servidor del que me encargué en varias áreas: parte técnica, comunidad y desarrollo de plugins.",
    achievements: [
      "Configuración de plugins y ajustes del servidor.",
      "Desarrollo de modalidades de juego.",
      "Gestión de la tienda del servidor.",
      "Administración del Discord.",
      "Formación del equipo de Staff.",
    ],
    tags: ["Manager", "Plugins", "Discord", "Staff", "Configuraciones", "Head Manager", "Tienda", "Dueño"],
  },
  {
    server: "KaosMC",
    role: "Head Manager",
    period: "2026 - Ahora",
    isPromotion: true,
    description: "Servidor activo donde me ocupo de la tienda Tebex, la gestión del Discord y configuraciones de Minecraft.",
    achievements: [
      "Gestión y configuración de la tienda Tebex.",
      "Administración del servidor de Discord.",
      "Configuración de plugins de Minecraft.",
      "Coordinación del equipo de Staff.",
    ],
    tags: ["Head Manager", "Tebex", "Discord", "Plugins", "Staff"],
  },
  {
    server: "VaperMC Network",
    role: "Manager",
    period: "Diciembre 2025 - Febrero 2026",
    rankImage: vaperLogo,
    bannerImage: vaperBanner,
    description: "Entré como Administrador encargándome de la moderación y acabé asumiendo el rol de Manager.",
    achievements: [
      "Gestión y organización del equipo de Staff.",
      "Participación en el desarrollo y testeo de modalidades.",
      "Supervisión de moderación y soporte a usuarios.",
    ],
    tags: ["Manager", "Staff Development", "Admin", "Network"],
  },
  {
    server: "NauticMC (Bedrock)",
    role: "Moderador",
    period: "Julio 2025 - Diciembre 2025",
    rankImage: nauticLogo,
    bannerImage: nauticBanner,
    description: "Empecé como Trial Mod y ascendí a Moderador. Me centré en la atención a jugadores y el cumplimiento de normas.",
    achievements: [
      "Moderación in-game y seguimiento de normas.",
      "Gestión de tickets de soporte.",
      "Atención a jugadores de Bedrock.",
      "Uso de herramientas de moderación.",
    ],
    tags: ["Moderación", "Bedrock", "Soporte", "Tickets"],
  },
  {
    server: "FluxMC",
    role: "Manager",
    period: "Diciembre 2025 - Diciembre 2025",
    rankImage: fluxLogo,
    description: "Me encargué del equipo de Staff y de la configuración técnica del Survival.",
    achievements: [
      "Formación del equipo de Staff.",
      "Configuración de plugins para el Survival.",
      "Gestión de tickets de soporte.",
      "Ajuste de la economía de la modalidad.",
    ],
    tags: ["Manager", "Survival", "Plugins", "Staff"],
  },
];

function ExpCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex gap-6 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(-24px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* Timeline */}
      <div className="flex flex-col items-center flex-shrink-0 w-10">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-500 ${
            exp.isPromotion
              ? "bg-green-500 border-green-400 shadow-lg"
              : "bg-green-50 border-green-300"
          }`}
          style={exp.isPromotion ? { boxShadow: "0 0 20px rgba(34,197,94,0.5)" } : {}}
        >
          {exp.rankImage ? (
            <img
              src={(exp.rankImage as any).src || exp.rankImage}
              alt={exp.server}
              className="w-7 h-7 rounded-full object-cover"
            />
          ) : (
            <div className="w-3 h-3 rounded-full bg-green-400" />
          )}
        </div>
        {index < experiences.length - 1 && (
          <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-green-300 to-green-100 min-h-[3rem]" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 mb-10">
        <div className="bg-green-50/80 rounded-2xl border border-green-200 overflow-hidden card-hover">
          {/* Banner */}
          {exp.bannerImage && (
            <div className="h-40 overflow-hidden">
              <img
                src={(exp.bannerImage as any).src || exp.bannerImage}
                alt={`${exp.server} screenshot`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          )}

          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-black text-gray-900" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {exp.server}
                  </h3>
                  {exp.isPromotion && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-300">
                      <TrendingUp className="w-3 h-3" /> Actualidad
                    </span>
                  )}
                </div>
                <div className="text-green-600 font-bold text-base mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {exp.role}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs font-mono bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">{exp.description}</p>

            {/* Expandable achievements */}
            <div
              className={`overflow-hidden transition-all duration-400 ${expanded ? "max-h-96" : "max-h-0"}`}
            >
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
                <div className="text-xs font-mono text-green-600 uppercase tracking-wider mb-2">
                  // funciones_y_logros
                </div>
                <ul className="space-y-1.5">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <ChevronRight className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags + expand button */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-200"
                  >
                    #{tag.toLowerCase().replace(/ /g, "_")}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-xs font-mono text-green-600 hover:text-green-800 flex items-center gap-1 transition-colors"
              >
                {expanded ? "ocultar" : "ver logros"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
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
    <section id="experiencia" className="py-20 bg-green-50/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-16 transition-all duration-700"
            style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "none" : "translateY(24px)" }}
          >
            <div
              className="inline-flex items-center gap-2 bg-gray-900 text-green-400 px-4 py-2 rounded-full mb-6 border border-gray-700"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-xs">git log --oneline --author="diwgo"</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Mi{" "}
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
                Experiencia
              </span>
            </h2>
            <p className="text-gray-500">Servidores donde he participado y aportado.</p>
          </div>

          {/* Timeline */}
          <div>
            {experiences.map((exp, i) => (
              <ExpCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
