"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

interface ExperienceItemProps {
  server: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
  isPromotion?: boolean;
}

function ExperienceItem({ server, role, period, location, description, achievements, tags, isPromotion }: ExperienceItemProps) {
  return (
    <Card className="bg-stone-900/50 border-stone-700 hover:border-emerald-500/50 transition-all duration-300">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <CardTitle className="text-2xl text-white">{server}</CardTitle>
              {isPromotion && (
                <Badge variant="outline" className="text-emerald-400 border-emerald-400/50 flex gap-1 items-center">
                  <TrendingUp className="w-3 h-3" /> Ascenso
                </Badge>
              )}
            </div>
            <CardDescription className="text-emerald-400 text-lg font-semibold">{role}</CardDescription>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300">{description}</p>
        
        <div>
          <h4 className="font-semibold text-white mb-2 italic text-sm opacity-80 underline decoration-emerald-500/50">Funciones principales:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-emerald-900/30 text-emerald-300 border-emerald-700/50">
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
      role: "Manager (Ascenso desde Admin)",
      period: "Actualidad",
      location: "Network",
      isPromotion: true,
      description: "Entré como Administrador supervisando la moderación general. Tras demostrar resultados, ascendí a Manager para liderar el desarrollo del Staff y nuevas modalidades.",
      achievements: [
        "Supervisión y gestión del equipo de Staff desde una perspectiva global.",
        "Desarrollo y planificación de nuevas modalidades de juego.",
        "Atención de tickets complejos y resolución de conflictos.",
        "Manejo de funciones administrativas avanzadas del servidor."
      ],
      tags: ["Gestión Staff", "Administración", "Nuevas Modalidades", "Tickets"],
    },
    {
      server: "NauticMC (Bedrock)",
      role: "Moderador (Ascenso desde Trial Mod)",
      period: "Pasado",
      location: "Bedrock Edition",
      isPromotion: true,
      description: "Inicié mi etapa como Trial Mod enfocado en la moderación in-game. Gracias a mi desempeño constante, fui promocionado al rango de Moderador.",
      achievements: [
        "Moderación activa dentro del servidor para mantener un buen ambiente.",
        "Gestión y resolución de tickets de soporte de los usuarios.",
        "Soporte directo a la comunidad Bedrock.",
        "Vigilancia y cumplimiento de las normas del servidor."
      ],
      tags: ["Moderación", "Bedrock", "Soporte", "Tickets"],
    },
    {
      server: "FluxMC",
      role: "Manager",
      period: "Pasado",
      location: "Survival",
      description: "Encargado de la gestión organizativa del servidor Survival, asegurando el correcto funcionamiento del equipo y del juego.",
      achievements: [
        "Liderazgo y desarrollo del equipo de Staff.",
        "Configuración de plugins internos para el servidor Survival.",
        "Manejo de la comunidad y atención al usuario (Tickets).",
        "Optimización de la experiencia de juego in-game."
      ],
      tags: ["Manager", "Plugins", "Staff Development", "Survival"],
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mi Trayectoria
            </h2>
            <p className="text-xl text-gray-400">
              Servidores donde he aportado mi trabajo y he crecido como Staff.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
