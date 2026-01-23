"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Mail, MessageSquare, ExternalLink } from "lucide-react";

export function Contact() {
  // CONFIGURACIÓN PERSONALIZADA
  const links = {
    // Como no quieres dar el correo, esto abrirá un aviso o puedes dejarlo para después
    discord: "https://discord.com/users/_diwgo_", 
    namemc: "https://es.namemc.com/profile/_diwgo_.1" // Tu perfil de NameMC
  };

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Hablamos?
            </h2>
            <p className="text-xl text-gray-400">
              ¿Tienes un proyecto en mente o necesitas un staff experimentado?
            </p>
          </div>

          <Card className="bg-gradient-to-br from-emerald-950 to-stone-900 border-emerald-500/50">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Construyamos Algo Increíble Juntos
                </h3>
                <p className="text-gray-300">
                  Actualmente estoy priorizando el contacto vía **Discord**. 
                  Si tienes una propuesta para un servidor de Minecraft o una comunidad, 
                  no dudes en agregarme.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Email - Deshabilitado visualmente o como informativo */}
                <div className="flex items-center gap-4 p-4 bg-black/20 rounded-lg border border-white/5 opacity-60">
                  <Mail className="w-6 h-6 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-400">Correo</div>
                    <div className="text-white font-semibold">Privado / Por DM</div>
                  </div>
                </div>

                {/* Discord - El principal */}
                <div className="flex items-center gap-4 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                  <MessageSquare className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="text-sm text-gray-400">Discord User</div>
                    <div className="text-white font-semibold">_diwgo_</div>
                  </div>
                </div>
              </div>

              {/* BOTONES PRINCIPALES */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                  onClick={() => openLink(links.discord)}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contactar en Discord
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-400 text-blue-300 hover:bg-blue-950"
                  onClick={() => openLink(links.namemc)}
                >
                  {/* Usamos un icono de enlace externo para NameMC */}
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Skin (NameMC)
                </Button>
              </div>

              <div className="text-center mt-8 pt-8 border-t border-stone-800">
                <p className="text-sm text-gray-500 italic">
                  "La mejor forma de gestionar una comunidad es siendo parte de ella."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
