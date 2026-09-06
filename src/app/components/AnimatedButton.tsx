import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}

export function AnimatedButton({ label, onClick, variant = "primary", icon }: AnimatedButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-90"
      : "bg-transparent text-foreground border border-border hover:border-foreground/40";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${styles}`}
    >
      {icon}
      {label}
    </motion.button>
  );
}