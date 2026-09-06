import { useState, useEffect } from "react";
import { Server, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

interface HeroProps {
  onNavigate?: (section: "inicio" | "experiencia" | "conocimientos" | "testimonios" | "contacto") => void;
}

const focusAreas = [
  { title: "Moderación", desc: "Presencia constante para ayudar a los usuarios y mantener el orden." },
  { title: "Administración", desc: "Gestión de plugins y resolución de problemas técnicos en el servidor." },
  { title: "Gestión de equipos", desc: "Formación y coordinación del equipo de Staff." },
];

export function Hero({ onNavigate }: HeroProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:ml-[12%]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-5"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Hola, soy diwgo.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-2 max-w-lg">
              Gestiono comunidades y desarrollo para servidores de Minecraft.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Ahora mismo soy <span className="text-foreground">Head Manager</span> en KaosMC Network.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <AnimatedButton
                label="Ver experiencia"
                icon={<Server className="w-4 h-4" />}
                variant="primary"
                onClick={() => onNavigate?.("experiencia")}
              />
              <AnimatedButton
                label="Contactar"
                icon={<Mail className="w-4 h-4" />}
                variant="secondary"
                onClick={() => onNavigate?.("contacto")}
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              247 jugadores conectados ahora
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="grid sm:grid-cols-3 gap-8 mt-20 pt-10 border-t border-border max-w-2xl"
          >
            {focusAreas.map((item, i) => (
              <div key={i}>
                <div className="text-foreground font-medium mb-1.5">{item.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}