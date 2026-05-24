"use client";

import { useState, useEffect, useRef } from "react";
import { Eye, ChevronRight, Zap, Server } from "lucide-react";
import { motion } from "framer-motion";
import spyglassIcon from "@/assets/spyglass.png";
import anvilIcon from "@/assets/anvil.png";
import gearIcon from "@/assets/gear.png";
import { AnimatedButton } from "./AnimatedButton";
import { ScrollReveal } from "./ScrollReveal";

interface HeroProps {
  onNavigate?: (section: "inicio" | "experiencia" | "conocimientos" | "testimonios" | "contacto") => void;
}

const DISCORD_USER_ID = "1007338838911361164";

const STATUS_CONFIG = {
  online: { label: "Online", color: "#22c55e", dot: "bg-green-400", pulse: true },
  idle: { label: "Ausente", color: "#f59e0b", dot: "bg-yellow-400", pulse: false },
  dnd: { label: "No molestar", color: "#ef4444", dot: "bg-red-500", pulse: false },
  offline: { label: "Desconectado", color: "#6b7280", dot: "bg-gray-400", pulse: false },
};

function useDiscordStatus() {
  const [status, setStatus] = useState<"online" | "idle" | "dnd" | "offline">("offline");
  const [activity, setActivity] = useState<string | null>(null);

  useEffect(() => {
    if (DISCORD_USER_ID === "TU_ID_AQUI") {
      setStatus("online");
      return;
    }

    const fetchStatus = () => {
      fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`)
        .then(r => r.json())
        .then(d => {
          if (d.success) {
            setStatus(d.data.discord_status ?? "offline");
            const act = d.data.activities?.find((a: any) => a.type === 0);
            setActivity(act ? act.name : null);
          }
        })
        .catch(() => setStatus("online"));
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return { status, activity };
}

const CONSOLE_LINES = [
  { time: "12:03:01", thread: "Server thread", level: "INFO", msg: "Starting Minecraft server..." },
  { time: "12:03:02", thread: "LuckPerms", level: "INFO", msg: "Loaded 8 groups, 47 users" },
  { time: "12:03:03", thread: "EssentialsX", level: "INFO", msg: "Loaded 312 users data" },
  { time: "12:03:09", thread: "DeluxeMenus", level: "INFO", msg: "Loaded 6 menus successfully" },
  { time: "12:03:05", thread: "Discord Bot", level: "INFO", msg: "Bot conectado - _diwgo_ online" },
  { time: "12:03:07", thread: "Server thread", level: "INFO", msg: "Done! 247 players can join" },
];

const levelColor: Record<string, string> = {
  INFO: "text-gray-300",
  WARN: "text-yellow-400",
  ERROR: "text-red-400",
};

const levelBg: Record<string, string> = {
  INFO: "text-cyan-400",
  WARN: "text-yellow-400",
  ERROR: "text-red-400",
};

const FLOATING_SNIPPETS = [
  { code: "/lp group owner add diwgo_", x: "4%", y: "18%", delay: 0 },
  { code: "/dm reload warps", x: "72%", y: "14%", delay: 0.8 },
  { code: "[Staff] ticket #47 cerrado", x: "78%", y: "62%", delay: 1.5 },
  { code: "/ban xX_griefer Uso de hacks", x: "2%", y: "68%", delay: 2.2 },
  { code: "[Discord BOT] Bot iniciado como KaosMC Oficial#0237", x: "2%", y: "68%", delay: 2.2 },
  { code: "server.properties saved ✓", x: "60%", y: "78%", delay: 0.4 },
  { code: "[Discord] #anuncios pinned", x: "14%", y: "84%", delay: 1.2 },
];

export function Hero({ onNavigate }: HeroProps) {
  const [visitas, setVisitas] = useState<number>(0);
  const [visibleLines, setVisible] = useState(0);
  const [titleVisible, setTitle] = useState(false);
  const { status, activity } = useDiscordStatus();
  const cfg = STATUS_CONFIG[status];

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/portfolio-mc-staff-pro/visitas/up")
      .then(r => r.json())
      .then(d => setVisitas(d.count))
      .catch(() => setVisitas(124));
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setTitle(true), 100);
    let line = 0;
    const iv = setInterval(() => {
      line++;
      setVisible(line);
      if (line >= CONSOLE_LINES.length) clearInterval(iv);
    }, 320);
    return () => {
      clearTimeout(t);
      clearInterval(iv);
    };
  }, []);

  // Animación de palabras del título
  const titleWords = ["Gestión de", "servidores", "Minecraft"];
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #cce5d4 0%, #b8dcc2 30%, #cce5d4 60%, #c4e0cb 100%)"
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(34,197,94,0.1), transparent)",
        }}
      />

      {/* Floating snippets con parallax */}
      {FLOATING_SNIPPETS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block pointer-events-none select-none"
          style={{ left: s.x, top: s.y }}
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 3.5 + i * 0.3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: s.delay
          }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="px-3 py-1.5 rounded-lg text-xs font-mono text-green-700 border border-green-200 bg-white/70 backdrop-blur-sm shadow-sm"
            style={{ fontSize: "11px" }}
            whileHover={{ boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}
          >
            <span className="text-green-500 mr-1">$</span>{s.code}
          </motion.div>
        </motion.div>
      ))}

      {/* Visits counter */}
      <motion.div
        className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-green-200 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Eye className="w-3.5 h-3.5 text-green-500" />
        <span className="text-green-700 text-xs font-mono font-medium">
          {visitas > 0 ? `${visitas.toLocaleString()} visitas` : "..."}
        </span>
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={titleVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              {/* Discord status badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-white/80 border border-green-200 px-4 py-2 rounded-full mb-5 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`}
                  animate={cfg.pulse ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-mono font-semibold" style={{ color: cfg.color }}>
                  Discord: {cfg.label}
                </span>
                {activity && (
                  <span className="text-xs font-mono text-gray-400 border-l border-gray-200 pl-2">{activity}</span>
                )}
              </motion.div>

              {/* Title with animated words */}
              <h1 className="text-5xl lg:text-6xl font-black mb-4 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                {titleWords.map((word, i) => (
                  <motion.div key={i} custom={i} variants={titleVariants} initial="hidden" animate="visible">
                    {i === 1 ? (
                      <span className="text-transparent" style={{
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        backgroundImage: "linear-gradient(135deg, #16a34a, #22c55e, #4ade80)",
                        backgroundSize: "200% auto",
                        animation: "shimmer 3s linear infinite",
                      }}>
                        {word}
                      </span>
                    ) : (
                      <span className="text-gray-900">{word}</span>
                    )}
                    {i < titleWords.length - 1 && <br />}
                  </motion.div>
                ))}
              </h1>

              {/* Description */}
              <motion.p
                className="text-gray-600 text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Modero y organizo servidores y comunidades de manera eficiente.
                Configuro plugins y gestiono Discord para un funcionamiento sencillo y eficaz.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <AnimatedButton
                  label="Ver Experiencia"
                  icon={<Server className="w-4 h-4" />}
                  variant="primary"
                  onClick={() => onNavigate?.("experiencia")}
                />
                <AnimatedButton
                  label="Contáctame"
                  icon={<Zap className="w-4 h-4" />}
                  variant="secondary"
                  onClick={() => onNavigate?.("contacto")}
                />
              </motion.div>

              {/* Minecraft icons */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[spyglassIcon, anvilIcon, gearIcon].map((icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <img
                      src={(icon as any).src || icon}
                      alt=""
                      className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </motion.div>
                ))}
                <span className="text-gray-400 text-xs font-mono ml-2">// minecraft stack</span>
              </motion.div>
            </motion.div>

            {/* RIGHT - Console */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={titleVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
                style={{ background: "#0d1117" }}
                whileHover={{ boxShadow: "0 0 40px rgba(34,197,94,0.3)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Titlebar */}
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b border-gray-800"
                  style={{ background: "#161b22" }}
                >
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs font-mono text-gray-500">astryx-network - server console</span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs font-mono text-green-400">live</span>
                  </div>
                </div>

                {/* Console lines with typewriter effect */}
                <div className="p-4 min-h-[230px] space-y-0.5">
                  {CONSOLE_LINES.map((line, i) => (
                    <motion.div
                      key={i}
                      className="font-mono text-xs leading-5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={i < visibleLines ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-gray-600">[{line.time}] </span>
                      <span className="text-gray-500">[{line.thread}/</span>
                      <span className={levelBg[line.level]}>{line.level}</span>
                      <span className="text-gray-500">]: </span>
                      <span className={line.level === "INFO" ? "text-gray-200" : levelColor[line.level]}>
                        {line.msg}
                      </span>
                    </motion.div>
                  ))}

                  {visibleLines >= CONSOLE_LINES.length && (
                    <div className="font-mono text-xs leading-5 flex items-center gap-1 mt-1">
                      <span className="text-green-500">&gt;</span>
                      <motion.span
                        className="font-mono text-green-400"
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      >
                        █
                      </motion.span>
                    </div>
                  )}
                </div>

                {/* Bottom bar */}
                <div
                  className="px-4 pb-3 pt-2 border-t border-gray-800 flex items-center gap-2"
                  style={{ background: "#010409" }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-mono text-xs text-green-400">Servidor online - 247 players conectados</span>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-3 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {[
                  { label: "Proyectos", value: "4+", icon: "" },
                  { label: "Años XP", value: "1", icon: "" },
                  { label: "Discord", value: cfg.label, icon: "", color: cfg.color },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="bg-green-50/80 rounded-xl p-3 border border-green-100 text-center"
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="text-xl mb-1">{stat.icon}</div>
                    <div className="font-black text-lg leading-none" style={{ color: stat.color ?? "#15803d" }}>
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5 font-mono">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {[
              { title: "Moderación", desc: "Presencia constante para ayudar a los usuarios y mantener el orden.", icon: "🛡️", tag: "moderation" },
              { title: "Server Admin", desc: "Gestión de plugins y resolución de problemas técnicos dentro del juego.", icon: "⚙️", tag: "admin.config" },
              { title: "Staff Manager", desc: "Dedicación plena para que el proyecto crezca de forma estable y profesional.", icon: "👥", tag: "team.manage" },
            ].map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={0.5 + i * 0.15}>
                <motion.div
                  className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-green-100"
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    boxShadow: "0 0 30px rgba(34,197,94,0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-mono text-green-500 bg-green-50 px-2 py-0.5 rounded-md border border-green-100">{item.tag}</span>
                  </div>
                  <div className="text-gray-900 font-bold text-base mb-1">{item.title}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
