import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Mail, MessageSquare, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ponte en Contacto
            </h2>
            <p className="text-xl text-gray-400">
              ¿Necesitas ayuda con tu servidor de Minecraft o Discord?
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
                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-emerald-500/30">
                  <Mail className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="text-sm text-gray-400">Correo</div>
                    <div className="text-white font-semibold">admin@ejemplo.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-green-500/30">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-sm text-gray-400">Discord</div>
                    <div className="text-white font-semibold">TuUsuario#0000</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Correo
                </Button>
                <Button size="lg" variant="outline" className="border-green-500 text-green-300 hover:bg-green-950">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Discord
                </Button>
              </div>

              <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-stone-700">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-emerald-400">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-400">
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}