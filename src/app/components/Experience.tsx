"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Calendar, TrendingUp } from "lucide-react";

import vaperLogo from "@/assets/vaper-logo.jpg";
import vaperBanner from "@/assets/vaper-spawn.jpg";
import nauticLogo from "@/assets/nautic-logo.jpg";
import nauticBanner from "@/assets/nautic-scoreboard.jpg";
import fluxLogo from "@/assets/flux-logo.jpg";
import astryxLogo from "@/assets/astryx-logo.png";
import astryxBanner from "@/assets/astryx-banner.png";

interface ExperienceItemProps {
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

function ExperienceItem({ server, role, period, description, achievements, tags, isPromotion, rankImage, bannerImage }: ExperienceItemProps) {
  return (
    <Card className="bg-stone-900/50 border-stone-700 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
      {bannerImage && (
        <div className="w-full h-48 md:h-64 overflow-hidden border-b border-stone-700">
          <img
            src={bannerImage.src || bannerImage}
            alt={`${server} screenshot`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <CardHeader>
        <div className="flex items-start gap-4">
          {rankImage && (
            <img
              src={rankImage.src || rankImage}
              alt={server}
              className="w-16 h-16 rounded-lg border border-emerald-500/30 object-cover"
            />
          )}
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <CardTitle className="text-2xl text-white">{server}</CardTitle>
              {isPromotion && (
                <Badge variant="outline" className="text-emerald-400 border-emerald-400/50 flex gap-1 items-center">
                  <TrendingUp className="w-3 h-3" /> Actualidad
                </Badge>
              )}
            </div>
            <CardDescription className="text-emerald-400 text-lg font-semibold">{role}</CardDescription>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-300">{description}</p>

        <div className="bg-black/20 p-4 rounded-lg border border-white/5">
          <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wider text-emerald-500/80">Funciones y Logros:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-emerald-900/20 text-emerald-300 border-emerald-700/30 text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Experience() {
  const experiences: ExperienceItemProps[] = [
    {
      server: "NauticMC (Bedrock)",
      role: "Moderador",
      period: "Julio 2025 — Diciembre 2025",
      rankImage: nauticLogo,
      bannerImage: nauticBanner,
      description: "Empecé como Trial Mod y ascendí a Moderador. Me centré en la atención a jugadores y el cumplimiento de normas.",
      achievements: [
        "Moderación in-game y seguimiento de normas.",
        "Gestión de tickets de soporte.",
        "Atención a jugadores de la plataforma Bedrock.",
        "Uso de herramientas de moderación.",
      ],
      tags: ["Moderación", "Bedrock", "Soporte", "Tickets"],
    },
    {
      server: "Astryx Network",
      role: "Dueño",
      period: "Enero 2026 - Abril 2026",
      isPromotion: false,
      rankImage: astryxLogo,
      bannerImage: astryxBanner,
      description: "Servidor del que me encargué en varias áreas, parte técnica, comunidad y desarrollo de plugins.",
      achievements: [
        "Configuración de plugins y ajustes del servidor.",
        "Desarrollo de modalidades de juego.",
        "Gestión de la tienda del servidor.",
        "Administración del Discord.",
        "Formación y coordinación del equipo de Staff.",
      ],
      tags: ["Manager", "Plugins", "Discord", "Staff", "Configuraciones", "Head Manager", "Tienda", "Dueño"],
    },
    {
      server: "VaperMC Network",
      role: "Manager",
      period: "Diciembre 2025 - Febrero 2026",
      rankImage: vaperLogo,
      bannerImage: vaperBanner,
      description: "Entré como Administrador encargándome de la parte de moderación y acabé asumiendo el rol de Manager.",
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
      period: "Julio 2025 — Diciembre 2025",
      rankImage: nauticLogo,
      bannerImage: nauticBanner,
      description: "Empecé como Trial Mod y ascendí a Moderador. Me centré en la atención a jugadores y el cumplimiento de normas.",
      achievements: [
        "Moderación in-game y seguimiento de normas.",
        "Gestión de tickets de soporte.",
        "Atención a jugadores de la plataforma Bedrock.",
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

  return (
    <section id="experiencia" className="py-20 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">Mi experiencia</h2>
            <p className="text-gray-400">Servidores donde he participado y aportado.</p>
          </div>
          <div className="grid gap-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
