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
    description: "Gestión de equipos, normas y convivencia en servidores.",
    skills: [
      { name: "Gestión de equipos Staff",    level: "Alto"   },
      { name: "Resolución de conflictos",    level: "Alto"   },
      { name: "Reclutamiento & formación",   level: "Alto"   },
      { name: "Sistemas de sanciones",       level: "Alto"   },
      { name: "Tickets & soporte",           level: "Medio"  },
    ],
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
    title: "Discord",
    description: "Diseño, configuración y administración de servidores Discord.",
    skills: [
      { name: "Configuración de canales & roles", level: "Alto"   },
      { name: "Bots (MEE6, Carl-bot, Dyno…)",    level: "Alto"   },
      { name: "Automod & seguridad",              level: "Alto"   },
      { name: "Embeds & anuncios",                level: "Medio"  },
      { name: "Webhooks",                         level: "Medio"  },
    ],
  },
  {
    icon: <Settings className="w-6 h-6 text-orange-400" />,
    title: "Plugins Minecraft",
    description: "Instalación, configuración y ajuste de plugins esenciales.",
    skills: [
      { name: "EssentialsX",    level: "Alto"   },
      { name: "LuckPerms",      level: "Alto"   },
      { name: "WorldEdit / WorldGuard", level: "Medio"  },
      { name: "CMI",            level: "Medio"  },
      { name: "DeluxeMenus",    level: "Medio"  },
      { name: "Vault / economía", level: "Medio" },
      { name: "Citizens / NPCs", level: "Básico" },
    ],
  },
  {
    icon: <Wrench className="w-6 h-6 text-cyan-400" />,
    title: "Administración técnica",
    description: "Gestión de paneles, rendimiento y configuración de servidores.",
    skills: [
      { name: "Pterodactyl / Panels",  level: "Medio"  },
      { name: "server.properties",     level: "Alto"   },
      { name: "Optimización de TPS",   level: "Medio"  },
      { name: "Copias de seguridad",   level: "Medio"  },
      { name: "Consola & logs",        level: "Medio"  },
    ],
  },
  {
    icon: <Users className="w-6 h-6 text-pink-400" />,
    title: "Gestión de comunidad",
    description: "Estrategia, crecimiento y retención de jugadores.",
    skills: [
      { name: "Eventos in-game",       level: "Alto"   },
      { name: "Comunicación interna",  level: "Alto"   },
      { name: "Gestión de tienda",     level: "Medio"  },
      { name: "Reglas y documentación",level: "Alto"   },
      { name: "Redes sociales básicas",level: "Básico" },
    ],
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-violet-400" />,
    title: "Herramientas & otros",
    description: "Software de apoyo para la gestión diaria.",
    skills: [
      { name: "Notion / docs",        level: "Medio"  },
      { name: "Canva (diseño básico)",level: "Básico" },
      { name: "Google Sheets",        level: "Medio"  },
      { name: "Git / GitHub básico",  level: "Básico" },
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
