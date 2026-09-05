import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

export function ClickParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const colors = ["#22c55e", "#4ade80", "#86efac", "#16a34a", "#15803d"];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newParticles: Particle[] = Array.from({ length: 12 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 200,
        vy: (Math.random() - 0.5) * 200,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setParticles(prev => [...prev, ...newParticles]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              background: particle.color,
              boxShadow: `0 0 10px ${particle.color}`,
            }}
            initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            animate={{ scale: 0, opacity: 0, x: particle.vx, y: particle.vy }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onAnimationComplete={() =>
              setParticles(prev => prev.filter(p => p.id !== particle.id))
            }
          />
        ))}
      </AnimatePresence>
    </div>
  );
}