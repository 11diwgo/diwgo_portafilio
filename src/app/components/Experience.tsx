import { useEffect, useRef, useState } from "react";
import { Calendar, TrendingUp, ChevronRight } from "lucide-react";

import vaperLogo   from "@/assets/vaper-logo.jpg";
import vaperBanner from "@/assets/vaper-spawn.jpg";
import nauticLogo  from "@/assets/nautic-logo.jpg";
import nauticBanner from "@/assets/nautic-scoreboard.jpg";
import fluxLogo    from "@/assets/flux-logo.jpg";
import astryxLogo  from "@/assets/astryx-logo.png";
import astryxBanner from "@/assets/nastryx-banner.png";
import kaosLogo    from "@/assets/kaos-logo.png";
import kaosBanner  from "@/assets/kaos-banner.png";

interface ExperienceItem {
  server: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  isPromotion?: boolean;
  rankImage?: string;
  bannerImage?: string;
}

const experiences: ExperienceItem[] = [
  {
    server: "Astryx Network",
    role: "Dueño",
    period: "Enero 2026 - Ahora",
    isPromotion: true,
    rankImage: astryxLogo as string,
    bannerImage: astryxBanner as string,
    description: "Servidor del que me encargué en varias áreas: parte técnica, comunidad y configuración de plugins.",
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
    server: "KaosMC Network",
    role: "Head Manager",
    period: "Mayo 2026 - Ahora",
    isPromotion: true,
    rankImage: kaosLogo as string,
    bannerImage: kaosBanner as string,
    description: "Servidor que abrirá próximamente donde me ocupo de la tienda Tebex, la gestión del Discord y configuraciones de Minecraft.",
    achievements: [
      "Gestión y configuración de la tienda Tebex.",
      "Administración del servidor de Discord.",
      "Configuración de varios plugins de Minecraft.",
    ],
    tags: ["Head Manager", "Tebex", "Discord", "Plugins", "Staff"],
  },
  {
    server: "VaperMC Network",
    role: "Manager",
    period: "Diciembre 2025 - Febrero 2026",
    rankImage: vaperLogo as string,
    bannerImage: vaperBanner as string,
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
    rankImage: nauticLogo as string,
    bannerImage: nauticBanner as string,
    description: "Gestión de tickets de soporte y ajuste de la economía de la modalidad.",
    achievements: [
      "Gestión de tickets de soporte.",
      "Ajuste de la economía de la modalidad.",
    ],
    tags: ["Manager", "Survival", "Plugins", "Staff"],
  },
  {
    server: "FluxMC Network",
    role: "Admin",
    period: "Marzo 2025 - Julio 2025",
    rankImage: fluxLogo as string,
    description: "Primer servidor en el que fui parte del equipo de Staff.",
    achievements: [
      "Moderación y gestión de la comunidad.",
      "Soporte a jugadores.",
    ],
    tags: ["Admin", "Staff", "Moderación"],
  },
];

function ExpCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible]   = useState(false);
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
      {/* Timeline dot */}
      <div className="flex flex-col items-center flex-shrink-0 w-10">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-500 ${
            exp.isPromotion
              ? "bg-green-500 border-green-400 shadow-lg"
              : "bg-green-50 dark:bg-card border-green-300 dark:border-green-700"
          }`}
          style={exp.isPromotion ? { boxShadow: "0 0 20px rgba(34,197,94,0.5)" } : {}}
        >
          {exp.rankImage ? (
            <img src={exp.rankImage} alt={exp.server} className="w-7 h-7 rounded-full object-cover" />
          ) : (
            <div className="w-3 h-3 rounded-full bg-green-400" />
          )}
        </div>
        {index < experiences.length - 1 && (
          <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-green-300 dark:from-green-700 to-green-100 dark:to-green-900 min-h-[3rem]" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 mb-10">
        <div className="bg-green-50/80 dark:bg-card rounded-2xl border border-green-200 dark:border-border overflow-hidden card-hover">
          {/* Banner */}
          {exp.bannerImage && (
            <div className="h-40 overflow-hidden">
              <img
                src={exp.bannerImage}
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
                  <h3 className="text-xl font-black text-gray-900 dark:text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {exp.server}
                  </h3>
                  {exp.isPromotion && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700">
                      <TrendingUp className="w-3 h-3" /> Actualidad
                    </span>
                  )}
                </div>
                <div className="text-green-600 dark:text-green-400 font-bold text-base mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {exp.role}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 dark:text-muted-foreground text-xs font-mono bg-gray-50 dark:bg-muted px-3 py-1.5 rounded-full border border-gray-100 dark:border-border">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>
            </div>

            <p className="text-gray-600 dark:text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>

            {/* Expandable achievements */}
            <div className={`overflow-hidden transition-all duration-400 ${expanded ? "max-h-96" : "max-h-0"}`}>
              <div className="bg-gray-50 dark:bg-muted rounded-xl p-4 border border-gray-100 dark:border-border mb-4">
                <div className="text-xs font-mono text-green-600 dark:text-green-400 uppercase tracking-wider mb-2">
                  // funciones_y_logros
                </div>
                <ul className="space-y-1.5">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-foreground">
                      <ChevronRight className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags + expand */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2 py-0.5 rounded-md bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                  >
                    #{tag.toLowerCase().replace(/ /g, "_")}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-xs font-mono text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 flex items-center gap-1 transition-colors"
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
    <section id="experiencia" className="py-20 bg-green-50/40 dark:bg-background transition-colors duration-300">
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
            <h2
              className="text-5xl md:text-6xl font-black text-gray-900 dark:text-foreground mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
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
            <p className="text-gray-500 dark:text-muted-foreground">Servidores donde he participado y aportado.</p>
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