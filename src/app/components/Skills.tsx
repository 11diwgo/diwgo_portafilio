"use client";

import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
  Shield,
  Settings,
  Users,
  MessageSquare,
  BarChart2,
  Wrench,
  Star,
} from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: { name: string; level: "Alto" | "Medio" | "Básico" }[];
}

const levelColor: Record<string, string> = {
  Alto:   "bg-emerald-600/20 text-emerald-300 border-emerald-500/40",
  Medio:  "bg-yellow-600/20  text-yellow-300  border-yellow-500/40",
  Básico: "bg-stone-700/40   text-gray-400    border-stone-600/40",
};

const categories: SkillCategory[] = [
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Moderación & Staff",
    description: "Domino todo lo relacionado con moderación y gestión de equipos.",
    skills: [
      { name: "Moderación in-game",         level: "Alto"   },
      { name: "Gestión de equipos Staff",   level: "Alto"   },
      { name: "Resolución de conflictos",   level: "Alto"   },
      { name: "Reclutamiento & formación",  level: "Alto"   },
      { name: "Sistemas de sanciones",      level: "Alto"   },
      { name: "Tickets & soporte",          level: "Alto"   },
    ],
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
    title: "Discord",
    description: "Mucho conocimiento en todo lo relacionado con Discord.",
    skills: [
      { name: "Bots propios (simple/medio/complejo)", level: "Alto"   },
      { name: "Nekotina",                             level: "Alto"   },
      { name: "MEE6",                                 level: "Alto"   },
      { name: "ProBot",                               level: "Alto"   },
      { name: "Webhooks",                             level: "Alto"   },
      { name: "Canales, roles & permisos",            level: "Alto"   },
      { name: "Embeds & anuncios",                    level: "Alto"   },
      { name: "Automod & seguridad",                  level: "Alto"   },
    ],
  },
  {
    icon: <Settings className="w-6 h-6 text-orange-400" />,
    title: "Plugins Minecraft",
    description: "Configuración rápida de plugins variados, me adapto fácil a lo nuevo.",
    skills: [
      { name: "FancyHolograms",  level: "Alto"   },
      { name: "FancyNPCs",       level: "Alto"   },
      { name: "DeluxeMenus",     level: "Alto"   },
      { name: "TAB",             level: "Alto"   },
      { name: "EssentialsX",     level: "Alto"   },
      { name: "LuckPerms",       level: "Alto"   },
      { name: "Adaptación rápida a nuevos plugins", level: "Alto" },
    ],
  },
  {
    icon: <Wrench className="w-6 h-6 text-cyan-400" />,
    title: "Tiendas Tebex",
    description: "Creación y gestión de tiendas en Tebex.",
    skills: [
      { name: "Creación de paquetes",       level: "Alto"   },
      { name: "Estética e info principal",  level: "Alto"   },
      { name: "Gestión de contenido",       level: "Alto"   },
      { name: "Configuración de la tienda", level: "Alto"   },
    ],
  },
  {
    icon: <Users className="w-6 h-6 text-pink-400" />,
    title: "Gestión de comunidad",
    description: "Experiencia real gestionando comunidades activas.",
    skills: [
      { name: "Comunicación interna",       level: "Alto"   },
      { name: "Eventos in-game",            level: "Alto"   },
      { name: "Reglas y documentación",     level: "Alto"   },
      { name: "Gestión de community",       level: "Alto"   },
    ],
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-violet-400" />,
    title: "Actitud & adaptación",
    description: "Lo que me define más allá de las herramientas.",
    skills: [
      { name: "Me adapto rápido y fácil",   level: "Alto"   },
      { name: "Proactividad",               level: "Alto"   },
      { name: "Trabajo en equipo",          level: "Alto"   },
      { name: "Compromiso con el proyecto", level: "Alto"   },
    ],
  },
];

export function Skills() {
  return (
    <section id="conocimientos" className="min-h-screen py-24 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/40 px-4 py-1.5 rounded-full mb-6">
              <Star className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Skills & herramientas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic tracking-tight">
              Mis Conocimientos
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Áreas en las que me he especializado gestionando servidores y comunidades.
            </p>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
              {(["Alto", "Medio", "Básico"] as const).map((lvl) => (
                <span
                  key={lvl}
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${levelColor[lvl]}`}
                >
                  {lvl}
                </span>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Card
                key={i}
                className="bg-stone-900/50 border-stone-700 hover:border-emerald-500/40 transition-all duration-300 flex flex-col"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                      {cat.icon}
                    </div>
                    <CardTitle className="text-white text-lg">{cat.title}</CardTitle>
                  </div>
                  <p className="text-gray-500 text-sm">{cat.description}</p>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {cat.skills.map((skill, j) => (
                    <Badge
                      key={j}
                      variant="outline"
                      className={`text-xs font-medium border ${levelColor[skill.level]}`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
