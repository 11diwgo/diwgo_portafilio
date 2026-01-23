import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface ExperienceItemProps {
  server: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
  rankImage?: string;
  characterImage?: string;
}

function ExperienceItem({ server, role, period, location, description, achievements, tags, rankImage, characterImage }: ExperienceItemProps) {
  return (
    <Card className="bg-stone-900/50 border-stone-700 hover:border-emerald-500/50 transition-all duration-300">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1 flex gap-4">
            {rankImage && (
              <div className="flex-shrink-0">
                <ImageWithFallback 
                  src={rankImage} 
                  alt={`${role} logo`}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg border-2 border-emerald-500/50"
                />
              </div>
            )}
            <div className="flex-1">
              <CardTitle className="text-2xl text-white mb-2">{server}</CardTitle>
              <CardDescription className="text-emerald-400 text-lg font-semibold">{role}</CardDescription>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {characterImage && (
          <div className="mb-4">
            <ImageWithFallback 
              src={characterImage} 
              alt={`${role} - Personaje con rango`}
              className="w-full h-48 md:h-64 object-cover rounded-lg border-2 border-emerald-500/30 hover:border-green-500/70 transition-all"
            />
          </div>
        )}
        
        <p className="text-gray-300">{description}</p>
        
        <div>
          <h4 className="font-semibold text-white mb-2">Logros Principales:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
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
      server: "Red Estilo Hypixel",
      role: "Administrador Principal",
      period: "2021 - Presente",
      location: "Servidor Internacional",
      description: "Liderando un equipo de más de 25 miembros de staff en múltiples modos de juego, gestionando operaciones del servidor e implementando estrategias de participación comunitaria.",
      achievements: [
        "Aumenté la base de jugadores de 500 a más de 10,000 jugadores activos",
        "Implementé un programa de capacitación integral para el staff",
        "Reduje las violaciones de reglas en un 60% mediante moderación efectiva",
        "Desarrollé sistemas personalizados con plugins y bots de Discord"
      ],
      tags: ["Liderazgo", "Gestión Comunitaria", "Plugins", "Discord Bots"],
      rankImage: "https://images.unsplash.com/photo-1710161468204-9a92f533d7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBhZG1pbiUyMHJhbmslMjBiYWRnZXxlbnwxfHx8fDE3NjkxMTUxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      characterImage: "https://images.unsplash.com/photo-1668707490307-3d95fb1d2c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBjaGFyYWN0ZXIlMjBza2luJTIwc2NyZWVuc2hvdHxlbnwxfHx8fDE3NjkxMTUyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      server: "Servidor Survival Towny",
      role: "Moderador Senior & Desarrollador",
      period: "2019 - 2021",
      location: "Norteamérica",
      description: "Gestioné la moderación diaria, desarrollé plugins personalizados para mejorar la experiencia de juego y coordiné eventos comunitarios. Implementé sistemas de Discord integrados con el servidor.",
      achievements: [
        "Procesé más de 1000 tickets de soporte con 98% de satisfacción",
        "Desarrollé plugins personalizados para economía y protección de terrenos",
        "Creé bots de Discord para moderación automática y estadísticas",
        "Organicé más de 50 eventos comunitarios y competiciones"
      ],
      tags: ["Moderación", "Desarrollo Java", "Discord.js", "Spigot/Paper"],
      rankImage: "https://images.unsplash.com/photo-1699413209298-4e2abf5bd991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBtb2RlcmF0b3IlMjBzdGFmZnxlbnwxfHx8fDE3NjkxMTUxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      characterImage: "https://images.unsplash.com/photo-1741151749309-8bb17563c701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBwbGF5ZXIlMjBnYW1lfGVufDF8fHx8MTc2OTExNTI5OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      server: "Servidor Creativo de Construcción",
      role: "Moderador & Coordinador de Construcción",
      period: "2018 - 2019",
      location: "Europa",
      description: "Coordiné un equipo de constructores, gestioné la estética del servidor y supervisé el desarrollo de áreas spawn. Implementé sistemas de permisos avanzados y comandos personalizados.",
      achievements: [
        "Lideré equipo de 15 constructores en proyectos importantes",
        "Creé más de 20 áreas de spawn y mapas de eventos",
        "Configuré sistemas de permisos con LuckPerms",
        "Desarrollé comandos personalizados para facilitar la construcción"
      ],
      tags: ["Moderación", "WorldEdit", "LuckPerms", "Gestión de Equipos"],
      rankImage: "https://images.unsplash.com/photo-1605053112594-00f282b59967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBzZXJ2ZXIlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2OTExNTE5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      characterImage: "https://images.unsplash.com/photo-1666127394361-a90c56029cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBhdmF0YXIlMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzY5MTE1Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-20 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experiencia
            </h2>
            <p className="text-xl text-gray-400">
              Mi trayectoria en moderación, desarrollo y gestión de servidores
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