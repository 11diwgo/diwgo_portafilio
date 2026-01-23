"use client"; // Importante para que funcionen los clicks

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Mail, MessageSquare, Linkedin, Github } from "lucide-react";

export function Contact() {
  // --- CONFIGURACIÓN: CAMBIA ESTOS DATOS POR LOS TUYOS ---
  const links = {
    email: "mailto:tu-correo@ejemplo.com", // Pon tu correo real aquí
    discord: "https://discord.gg/tu-invitacion", // Pon tu invitación de servidor aquí
    linkedin: "https://www.linkedin.com/in/tu-perfil/",
    github: "https://github.com/tu-usuario"
  };

  // Función para abrir enlaces externos
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Función específica para el correo (abre la app de mail)
  const sendEmail = () => {
    window.location.href = links.email;
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ponte en Contacto
            </h2>
            <p className="text-xl text-gray-400">
              ¿Necesitas ayuda con tu servidor de Minecraft?
            </p>
          </div>

          <Card className="bg-gradient-to-br from-emerald-950 to-stone-900 border-emerald-500/50">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Construyamos Algo Increíble Juntos
                </h3>
                <p className="text-gray-300">
                  Siempre estoy interesado en nuevas oportunidades para ayudar a crecer y gestionar comunidades de Minecraft. 
                  Ya sea desarrollo de plugins, bots de Discord, moderación o gestión de staff, 
                  me encantaría escucharte.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Tarjeta de Email */}
                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-emerald-500/30">
                  <Mail className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="text-sm text-gray-400">Correo</div>
                    <div className="text-white font-semibold">Próximamente</div> 
                    {/* Cuando tengas correo, cambia "Próximamente" por {links.email.replace('mailto:', '')} */}
                  </div>
                </div>

                {/* Tarjeta de Discord */}
                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-green-500/30">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-sm text-gray-400">Discord</div>
                    <div className="text-white font-semibold">_diwgo_</div>
                  </div>
                </div>
              </div>

              {/* BOTONES PRINCIPALES */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
