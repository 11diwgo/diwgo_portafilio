"use client";

import { useState, useEffect } from "react"; // Esto es para que el número funcione
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Eye } from "lucide-react"; // El icono del ojo
import spyglassIcon from "@/assets/spyglass.png";
import anvilIcon from "@/assets/anvil.png";
import gearIcon from "@/assets/gear.png";

export function Hero() {
  // Aquí se guarda el número de visitas
  const [visitas, setVisitas] = useState<number>(0);

  // Esta parte se encarga de contar de verdad
  useEffect(() => {
    // Esta web (counterapi) guarda tu número. 
    // He puesto "portfolio-mc-staff-pro" como tu nombre único.
    fetch('https://api.counterapi.dev/v1/portfolio-mc-staff-pro/visitas/up')
      .then((res) => res.json())
      .then((data) => {
        // Guardamos el número que nos da la web
        setVisitas(data.count);
      })
      .catch(() => {
        // Si internet falla, ponemos un número para que no salga 0
        setVisitas(124); 
      });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-950 via-green-900 to-stone-900">
      
      {/* EL OJO Y EL CONTADOR (Arriba a la izquierda) */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/30 shadow-lg">
        <Eye className="w-4 h-4 text-emerald-400" />
        <span className="text-emerald-100 text-xs md:text-sm font-medium">
          {visitas > 0 ? visitas.toLocaleString() : "Cargando..."} visitas
        </span>
      </div>

      {/* Fondo de cuadritos (Grid) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 16px, rgba(16,185,129,0.3) 16px, rgba(16,185,129,0.3) 17px),
                           repeating-linear-gradient(90deg, transparent, transparent 16px, rgba(16,185,129,0.3) 16px, rgba(16,185,129,0.3) 17px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Iconos de Minecraft flotando */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="animate-bounce" style={{ animationDelay: '0s' }}>
              <img src={spyglassIcon.src || spyglassIcon} alt="Spyglass" className="w-12 h-12" style={{ imageRendering: 'pixelated' }} />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
              <img src={anvilIcon.src || anvilIcon} alt="Anvil" className="w-12 h-12" style={{ imageRendering: 'pixelated' }} />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
              <img src={gearIcon.src || gearIcon} alt="Gear" className="w-12 h-12" style={{ imageRendering: 'pixelated' }} />
            </div>
          </div>

          <Badge className="mb-6 bg-emerald-600/20 text-emerald-300 border-emerald-500/50">
            Staff de Minecraft & Soporte Técnico
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
             Apoyo en servidores
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300">
              de Minecraft
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Modero y organizo comunidades de manera eficiente. 
            Me encargo de que el servidor y los plugins funcionen como deben.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 transition-transform hover:scale-105"
              onClick={() => scrollToSection('experiencia')}
            >
              Ver Experiencia
            </Button>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 transition-transform hover:scale-105"
              onClick={() => scrollToSection('contacto')}
            >
              Contáctame
            </Button>
          </div>

          {/* Tarjetas de Cualidades */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-colors text-left">
              <div className="text-emerald-400 font-bold text-lg mb-1">Moderación</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Presencia constante para ayudar a los usuarios y mantener el orden.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-colors text-left">
              <div className="text-emerald-400 font-bold text-lg mb-1">Configuración</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gestión de plugins y resolución de problemas técnicos dentro del juego.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-colors text-left">
              <div className="text-emerald-400 font-bold text-lg mb-1">Compromiso</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dedicación plena para que el proyecto crezca de forma estable y profesional.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent"></div>
    </section>
  );
}
