import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

import vaperLogo from "@/assets/vaper-logo.jpg";
import nauticLogo from "@/assets/nautic-logo.jpg";
import fluxLogo from "@/assets/flux-logo.jpg";
import astryxLogo from "@/assets/astryx-logo.png";
import kaosLogo from "@/assets/kaos-logo.png";

interface ExperienceItem {
  server: string;
  role: string;
  period: string;
  current?: boolean;
  logo?: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    server: "KaosMC Network",
    role: "Head Manager",
    period: "Mayo 2026 — Ahora",
    current: true,
    logo: kaosLogo as string,
    description:
      "Gestión general del servidor: tienda, Discord y configuración dentro del juego.",
    achievements: [
      "Gestión y configuración de la tienda Tebex",
      "Administración del servidor de Discord",
      "Supervisión del equipo de Staff",
    ],
  },
  {
    server: "Astryx Network",
    role: "Dueño",
    period: "Enero 2026 — Ahora",
    current: true,
    logo: astryxLogo as string,
    description:
      "Entré como Head Manager y ascendí a Dueño. Configuración general y desarrollo de la tienda web.",
    achievements: [
      "Configuración de plugins y ajustes del servidor",
      "Desarrollo de modalidades de juego",
      "Desarrollo de la tienda del servidor",
      "Formación del equipo de Staff",
    ],
  },
  {
    server: "VaperMC Network",
    role: "Manager",
    period: "Diciembre 2025 — Febrero 2026",
    logo: vaperLogo as string,
    description:
      "Empecé en moderación y acabé asumiendo la gestión general, además de apoyar en dos modalidades.",
    achievements: [
      "Gestión y organización del equipo de Staff",
      "Participación en el desarrollo de modalidades",
      "Supervisión de moderación y soporte a usuarios",
    ],
  },
  {
    server: "NauticMC (Bedrock)",
    role: "Moderador",
    period: "Julio 2025 — Diciembre 2025",
    logo: nauticLogo as string,
    description:
      "Entré como T-Mod y fui promovido a Moderador. Abandoné el servidor por falta de tiempo.",
    achievements: [
      "Resolución de tickets de soporte",
      "Moderación del servidor de Discord e in-game",
    ],
  },
  {
    server: "FluxMC Network",
    role: "Manager",
    period: "Noviembre 2025 — Enero 2026",
    logo: fluxLogo as string,
    description:
      "Mi primer paso en la gestión de servidores de Minecraft. Lo abandoné por falta de futuro en el proyecto.",
    achievements: [
      "Gestión general de la comunidad y servidor",
      "Gestión de la tienda web del servidor",
      "Configuración de plugins y ajustes del servidor",
    ],
  },
];

function ExpRow({ exp, index }: { exp: ExperienceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative pl-14 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
        transitionDelay: `${index * 90}ms`,
      }}
    >
      <div className="absolute left-0 top-1 w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center overflow-hidden">
        {exp.logo ? (
          <img src={exp.logo} alt={exp.server} className="w-full h-full object-cover" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-primary" />
        )}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3 border-b border-border">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-base sm:text-lg text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>
              {exp.server}
            </span>
            <span className="text-primary text-sm">{exp.role}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {exp.current && <span className="text-primary">actual</span>}
            <span>{exp.period}</span>
            <Plus
              className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            />
          </div>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100 py-3" : "max-h-0 opacity-0"}`}>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">{exp.description}</p>
        <ul className="space-y-1">
          {exp.achievements.map((a, i) => (
            <li key={i} className="text-sm text-foreground/80 flex gap-2">
              <span className="text-primary">—</span>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiencia" className="py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div
            ref={headerRef}
            className="mb-10 transition-all duration-500"
            style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "none" : "translateY(16px)" }}
          >
            <h2 className="text-3xl sm:text-4xl text-foreground mb-2">Experiencia</h2>
            <p className="text-muted-foreground text-sm">
              Servidores donde he participado. Toca una fila para ver más.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[17px] top-2 bottom-2 w-px bg-border" />
            {experiences.map((exp, i) => (
              <ExpRow key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}