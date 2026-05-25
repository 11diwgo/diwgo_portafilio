import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Shield, Settings, Users, MessageSquare, Wrench, Terminal, Code2, BookOpen, Zap,
} from "lucide-react";
import { motion } from "framer-motion";

interface Skill { name: string; level: "Alto" | "Medio" | "Aprendiendo" }
interface SkillCategory {
  icon: ReactNode;
  title: string;
  tag: string;
  description: string;
  color: string;
  skills: Skill[];
}

const levelStyle: Record<string, string> = {
  Alto:        "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700",
  Medio:       "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800",
  Aprendiendo: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
};

const levelDot: Record<string, string> = {
  Alto:        "bg-green-500",
  Medio:       "bg-yellow-400",
  Aprendiendo: "bg-blue-400",
};

const categories: SkillCategory[] = [
  {
    icon: <Shield className="w-5 h-5" />, color: "text-green-600 bg-green-100 dark:bg-green-900/40 border-green-200 dark:border-green-700",
    title: "Moderación & Staff", tag: "moderation.ts",
    description: "Gestión de equipos, sanciones, tickets y comunidades activas.",
    skills: [
      { name: "Moderación in-game",        level: "Alto" },
      { name: "Gestión de equipos Staff",  level: "Alto" },
      { name: "Sistemas de sanciones",     level: "Alto" },
      { name: "Tickets & soporte",         level: "Alto" },
      { name: "Reclutamiento & formación", level: "Alto" },
    ],
  },
  {
    icon: <MessageSquare className="w-5 h-5" />, color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700",
    title: "Discord", tag: "discord.config",
    description: "Configuración avanzada, bots propios y gestión de servidores.",
    skills: [
      { name: "Bots propios",              level: "Alto" },
      { name: "Canales, roles & permisos", level: "Alto" },
      { name: "Webhooks & embeds",         level: "Alto" },
      { name: "Automod & seguridad",       level: "Alto" },
      { name: "Nekotina / MEE6 / ProBot",  level: "Alto" },
    ],
  },
  {
    icon: <Settings className="w-5 h-5" />, color: "text-orange-600 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
    title: "Configuración MC", tag: "plugins.yml",
    description: "Plugins variados, me adapto rápido a lo que haga falta.",
    skills: [
      { name: "LuckPerms / EssentialsX",     level: "Alto"        },
      { name: "DeluxeMenus / TAB",           level: "Alto"        },
      { name: "FancyHolograms / NPCs",       level: "Alto"        },
      { name: "Creación de plugins Java",    level: "Aprendiendo" },
      { name: "Adaptación a nuevos plugins", level: "Alto"        },
    ],
  },
  {
    icon: <Wrench className="w-5 h-5" />, color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800",
    title: "Tebex & comunidad", tag: "community.shop",
    description: "Tiendas, eventos in-game y documentación.",
    skills: [
      { name: "Creación de tiendas Tebex", level: "Alto" },
      { name: "Eventos in-game",           level: "Alto" },
      { name: "Reglas y documentación",    level: "Alto" },
      { name: "Comunicación interna",      level: "Alto" },
    ],
  },
];

function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      icon: <Zap className="w-4 h-4" />,
      color: "text-amber-500 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
      title: "Autodidacta",
      desc: "Todo lo que sé lo he aprendido solo. Sin cursos, sin que nadie me enseñe. A base de probar, romper cosas e intentarlo de nuevo.",
    },
    {
      icon: <Code2 className="w-4 h-4" />,
      color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
      title: "Creativo",
      desc: "Me encanta encontrar soluciones ingeniosas. Siempre busco la mejor forma de hacer las cosas y cómo mejorarlas.",
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800",
      title: "Aprendiz constante",
      desc: "Cada día aprendo algo nuevo. No me conformo con lo que sé. Siempre hay algo por descubrir.",
    },
    {
      icon: <Users className="w-4 h-4" />,
      color: "text-rose-500 bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800",
      title: "Comunicativo",
      desc: "Explico bien mis ideas. Escucho y entiendo. El trabajo en equipo es lo mío.",
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800",
      title: "Dedicado",
      desc: "Sé mucho de Discord: configurar servidores, bots, permisos, automod, webhooks... prácticamente todo.",
    },
  ];

  return (
    <div
      ref={ref}
      className="mb-16 transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)" }}
    >
      <motion.div
        className="bg-white/70 dark:bg-card backdrop-blur-sm rounded-2xl border border-green-200 dark:border-border overflow-hidden shadow-sm"
        whileHover={{ boxShadow: "0 0 30px rgba(34,197,94,0.2)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 dark:border-border bg-gray-50 dark:bg-muted">
          <div className="flex gap-1">
            <motion.div className="w-2.5 h-2.5 rounded-full bg-red-400/60"    animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
            <motion.div className="w-2.5 h-2.5 rounded-full bg-green-400/60"  animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
          </div>
          <span className="ml-2 text-xs font-mono text-gray-400 dark:text-muted-foreground">about.me</span>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-black text-gray-900 dark:text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
              Sobre mí
            </h3>
            <motion.span
              className="text-xs font-mono text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 px-2 py-0.5 rounded-md"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              _diwgo_
            </motion.span>
          </div>
          <p className="text-gray-500 dark:text-muted-foreground text-sm mb-6 leading-relaxed max-w-2xl">
            Soy autodidacta. Todo lo que sé lo he aprendido por mi cuenta a base de probar y equivocarme.
            Cada día aprendo algo nuevo y eso no va a parar. No soy todo dev pero sé lo que hago y lo que no sé todavía lo estoy aprendiendo.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="rounded-xl border p-4 transition-all duration-300 bg-white/80 dark:bg-muted border-green-500/20 dark:border-border"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 0 20px rgba(34,197,94,0.2)" }}
              >
                <motion.div
                  className={`inline-flex p-2 rounded-lg border mb-3 ${item.color}`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="font-bold text-gray-900 dark:text-foreground text-sm mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {item.title}
                </h4>
                <p className="text-gray-500 dark:text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SkillCard({ cat, index }: { cat: SkillCategory; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="bg-green-50/60 dark:bg-card rounded-2xl border border-green-200 dark:border-border overflow-hidden card-hover transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 80}ms`,
      }}
      whileHover={{ scale: 1.02, y: -4, boxShadow: "0 0 25px rgba(34,197,94,0.2)" }}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 dark:border-border bg-gray-50 dark:bg-muted">
        <div className="flex gap-1">
          <motion.div className="w-2.5 h-2.5 rounded-full bg-red-400/60"    animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
          <motion.div className="w-2.5 h-2.5 rounded-full bg-green-400/60"  animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
        </div>
        <span className="ml-2 text-xs font-mono text-gray-400 dark:text-muted-foreground">{cat.tag}</span>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <motion.div
            className={`p-2.5 rounded-xl border ${cat.color} flex-shrink-0`}
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            {cat.icon}
          </motion.div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-foreground text-base leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              {cat.title}
            </h3>
            <p className="text-gray-500 dark:text-muted-foreground text-xs mt-0.5 leading-relaxed">{cat.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {cat.skills.map((skill, j) => (
            <motion.span
              key={j}
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg ${levelStyle[skill.level]}`}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px" }}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: j * 0.05 }}
            >
              <motion.span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${levelDot[skill.level]}`}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const levels = ["Alto", "Medio", "Aprendiendo"] as const;

  return (
    <section id="conocimientos" className="min-h-screen py-20 bg-gradient-to-b from-green-100/60 dark:from-background to-green-100/80 dark:to-background/80 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <motion.div
            ref={headerRef}
            className="text-center mb-12 transition-all duration-700"
            style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "none" : "translateY(24px)" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-card text-green-400 px-4 py-2 rounded-full mb-6 border border-border"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={headerVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="text-xs">cat about.me</span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-black text-gray-900 dark:text-foreground mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={headerVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Sobre{" "}
              <span
                className="text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  backgroundImage: "linear-gradient(135deg, #16a34a, #22c55e, #4ade80)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                Mí
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-500 dark:text-muted-foreground text-lg max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={headerVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Autodidacta, cada día aprendo algo nuevo y no pienso parar.
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-3 mt-6 flex-wrap"
              initial={{ opacity: 0 }}
              animate={headerVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {levels.map((lvl, i) => (
                <motion.span
                  key={lvl}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${levelStyle[lvl]}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={headerVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.span
                    className={`w-2 h-2 rounded-full ${levelDot[lvl]}`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {lvl}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <AboutMe />

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
            {categories.map((cat, i) => (
              <SkillCard key={i} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}