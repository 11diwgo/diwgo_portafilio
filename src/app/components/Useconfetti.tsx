import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
}

export function useConfetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const trigger = (x = window.innerWidth / 2, y = window.innerHeight / 2) => {
    const colors = [
      "#22c55e",
      "#4ade80",
      "#86efac",
      "#16a34a",
      "#15803d",
      "#10b981",
    ];

    const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
    }));

    setConfetti((prev) => [...prev, ...newConfetti]);
  };

  const ConfettiComponent = () => (
    <AnimatePresence>
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="fixed pointer-events-none"
          style={{
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            background: piece.color,
            borderRadius: "50%",
            zIndex: 9999,
          }}
          initial={{
            scale: 1,
            opacity: 1,
            rotate: piece.rotation,
          }}
          animate={{
            y: window.innerHeight + 100,
            opacity: 0,
            rotate: piece.rotation + 720,
            x: piece.x + (Math.random() - 0.5) * 200,
          }}
          transition={{
            duration: 2.5 + Math.random(),
            ease: "easeIn",
          }}
          onAnimationComplete={() => {
            setConfetti((prev) => prev.filter((p) => p.id !== piece.id));
          }}
        />
      ))}
    </AnimatePresence>
  );

  return { trigger, ConfettiComponent };
}