"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Calendar, TrendingUp } from "lucide-react";

// NOTA: Asegúrate de tener estas imágenes en tu carpeta @/assets/
import vaperLogo from "@/assets/vaper-logo.jpg";
import vaperBanner from "@/assets/vaper-spawn.jpg";
import nauticLogo from "@/assets/nautic-logo.jpg";
import nauticBanner from "@/assets/nautic-scoreboard.jpg";
import fluxLogo from "@/assets/flux-logo.jpg";

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
      {/* Banner Principal del Servidor */}
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
          {/* Logo del Servidor */}
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
      server: "VaperMC Network",
      role: "Manager",
      period: "Diciembre 2025 - Febrero 2026",
      isPromotion: false,
      rankImage: vaperLogo,
      bannerImage: vaperBanner,
      description: "Comencé como Administrador enfocado en moderación técnica y posteriormente asumí el rol de Manager para gestionar el equipo y las futuras modalidades.",
      achievements: [
        "Coordinación del equipo de Staff y organización interna.",
        "Colaboración en el desarrollo y testeo de nuevas modalidades.",
        "Supervisión de las tareas de moderación y soporte."
      ],
      tags: ["Manager", "Staff Development", "Admin", "Network"],
    },
    {
      server: "NauticMC (Bedrock)",
      role: "Moderador",
      period: " Julio 2025 — Diciembre 2025",
      isPromotion: false,
      rankImage: nauticLogo,
      bannerImage: nauticBanner,
      description: "Inicié como Trial Mod en la comunidad de Bedrock. Ascendí a Moderador tras demostrar eficacia en la resolución de conflictos y atención al usuario.",
      achievements: [
        "Moderación activa in-game y control del cumplimiento de normas.",
        "Resolución de tickets de soporte técnico y dudas de jugadores.",
        "Soporte especializado para la plataforma Bedrock.",
        "Manejo de herramientas de moderación."
      ],
      tags: ["Moderación", "Bedrock", "Soporte", "Tickets"],
    },
    {
      server: "FluxMC",
      role: "Manager",
      period: "Diciembre 2025 - Diciembre 2025",
      rankImage: fluxLogo,
      description: "Responsable de la gestión del equipo de Staff y la configuración técnica del entorno Survival.",
      achievements: [
        "Desarrollo y formación del equipo de Staff del servidor.",
        "Configuración de plugins para el Survival.",
        "Atención personalizada a través de sistema de tickets.",
        "Manejo de la economía y equilibrio de la modalidad."
      ],
      tags: ["Manager", "Survival", "Plugins", "Staff"],
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">Mi experiencia</h2>
            <p className="text-gray-400">Servidores donde he dejado mi marca bloque a bloque.</p>
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
