"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Mail, MessageSquare, Copy, Check } from "lucide-react";
// Importamos tu imagen personalizada
import nameMCLogo from "@/assets/namemc-logo.png";

export function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const links = {
    discordUser: "_diwgo_", 
    namemc: "https://es.namemc.com/profile/diwgo_.1"
  };

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(links.discordUser);
    setIsCopied(true);

    // Volver al estado original después de 2 segundos
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ponte en contacto
            </h2>
            <p className="text-xl text-gray-400">
              ¿Necesitas ayuda con tu servidor de Minecraft?
            </p>
          </div>

          <Card className="bg-gradient-to-br from-emerald-950 to-stone-900 border-emerald-500/50">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Construyamos algo increíble juntos
                </h3>
                <p className="text-gray-300">
                  Siempre estoy interesado en nuevas oportunidades para ayudar a crecer y gestionar comunidades de Minecraft. 
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-white/5 opacity-50">
                  <Mail className="w-6 h-6 text-gray-500" />
                  <div>
                    <div className="text-sm text-gray-400">Correo</div>
                    <div className="text-white font-semibold">Próximamente</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-green-500/30">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-sm text-gray-400">Discord</div>
                    <div className="text-white font-semibold">{links.discordUser}</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className={`w-full md:w-auto px-12 transition-all hover:scale-105 ${
                    isCopied 
                      ? "bg-green-500 hover:bg-green-600" 
                      : "bg-emerald-600 hover:bg-emerald-700"
                  }`}
                  onClick={handleCopyDiscord}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      ¡Copiado al portapapeles!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copiar usuario de Discord
                    </>
                  )}
                </Button>
              </div>

              {/* ICONO DE NAMEMC PEQUEÑO ABAJO */}
              <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-stone-700">
                <button 
                  title="Ver perfil NameMC"
                  className="group flex items-center justify-center p-2 rounded-md hover:bg-emerald-500/10 transition-colors"
                  onClick={() => openLink(links.namemc)}
                >
                  <img 
                    src={typeof nameMCLogo === 'string' ? nameMCLogo : nameMCLogo.src} 
                    alt="NameMC" 
                    className="w-6 h-6 invert opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
