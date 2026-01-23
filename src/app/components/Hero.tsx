"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import spyglassIcon from "@/assets/spyglass.png";
import anvilIcon from "@/assets/anvil.png";
import gearIcon from "@/assets/gear.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-950 via-green-900 to-stone-900">
      {/* Grid de fondo estilo píxel */}
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
              <img 
                src={spyglassIcon.src || spyglassIcon} 
                alt="Spyglass" 
                className="w-12 h-12" 
                style={{ imageRendering: 'pixelated' }} 
              />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
              <img 
                src={anvilIcon.src || anvilIcon} 
                alt="Anvil" 
                className="w-12 h-12" 
                style={{ imageRendering: 'pixelated' }} 
              />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
              <img 
                src={gearIcon.src || gearIcon} 
                alt="Gear" 
                className="w-12 h-12" 
                style={{ imageRendering: 'pixelated' }} 
              />
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
            Ayudo a moderar comunidades dentro del juego y a que el servidor funcione correctamente. 
            Me encargo de la gestión de usuarios y de configurar plugins para que todo esté en orden.
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

          {/* Seccion de Cualidades / Stats Reales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            
            <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-colors text-left">
              <div className="text-emerald-400 font-bold text-lg mb-1">Moderación</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Presencia constante en el servidor para ayudar a los usuarios y mantener un buen ambiente.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-colors text-left">
              <div className="text-emerald-400 font-bold text-lg mb-1">Configuración</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ajuste de plugins básicos y resolución de problemas técnicos dentro del servidor.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-colors text-left">
              <div className="text-emerald-400 font-bold text-lg mb-1">Compromiso</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ganas de aprender y mejorar para que el proyecto crezca de forma estable.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Gradiente inferior para suavizar el paso a la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent"></div>
    </section>
  );
}
