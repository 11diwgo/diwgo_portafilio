import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export function GlowCard({
  children,
  intensity = "medium",
  className = ""
}: GlowCardProps) {
  const glowIntensity = {
    low: "0 0 15px rgba(34, 197, 94, 0.2)",
    medium: "0 0 25px rgba(34, 197, 94, 0.3), 0 8px 32px rgba(0, 0, 0, 0.1)",
    high: "0 0 40px rgba(34, 197, 94, 0.5), 0 12px 48px rgba(34, 197, 94, 0.2)"
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: glowIntensity[intensity],
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className={`rounded-xl border border-green-200 bg-white/70 backdrop-blur-sm p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
