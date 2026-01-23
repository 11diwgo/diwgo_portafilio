import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import spyglassIcon from "figma:asset/b7fb90f2303123d44958455becdcf5cda1caf0c5.png";
import anvilIcon from "figma:asset/42d10c139002c71cfb04a923cda10cfeabf171af.png";
import gearIcon from "figma:asset/e62dbdc7a38a987a1c7cf57e0cdc9922da2fa166.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-950 via-green-900 to-stone-900">
      {/* Minecraft pixel grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 16px, rgba(16,185,129,0.3) 16px, rgba(16,185,129,0.3) 17px),
                           repeating-linear-gradient(90deg, transparent, transparent 16px, rgba(16,185,129,0.3) 16px, rgba(16,185,129,0.3) 17px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Minecraft icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="animate-bounce" style={{ animationDelay: '0s', imageRendering: 'pixelated' }}>
              <img src={spyglassIcon} alt="Spyglass" className="w-12 h-12" style={{ imageRendering: 'pixelated' }} />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.2s', imageRendering: 'pixelated' }}>
              <img src={anvilIcon} alt="Anvil" className="w-12 h-12" style={{ imageRendering: 'pixelated' }} />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.4s', imageRendering: 'pixelated' }}>
              <img src={gearIcon} alt="Gear" className="w-12 h-12" style={{ imageRendering: 'pixelated' }} />
            </div>
          </div>

          <Badge className="mb-6 bg-emerald-600/20 text-emerald-300 border-emerald-500/50">
            Desarrollador & Gestor de Minecraft/Discord
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Construyendo Mundos y
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300">
              Gestionando Comunidades
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experiencia en moderación, desarrollo de servidores Minecraft, gestión de bots de Discord 
            y liderazgo de equipos. Especializado en crear experiencias únicas para comunidades.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => scrollToSection('experiencia')}
            >
              Ver Experiencia
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-500 text-green-300 hover:bg-green-950"
              onClick={() => scrollToSection('contacto')}
            >
              Contáctame
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/30">
              <div className="text-4xl font-bold text-emerald-400 mb-2">5+</div>
              <div className="text-gray-400">Años de Experiencia</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/30">
              <div className="text-4xl font-bold text-green-400 mb-2">10+</div>
              <div className="text-gray-400">Servidores Gestionados</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-emerald-400/30">
              <div className="text-4xl font-bold text-emerald-300 mb-2">50K+</div>
              <div className="text-gray-400">Jugadores Atendidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent"></div>
    </section>
  );
}