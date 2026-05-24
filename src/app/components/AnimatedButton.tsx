import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

export function AnimatedButton({
  label,
  onClick,
  variant = "primary",
  icon
}: AnimatedButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const bgColor = variant === "primary"
    ? "bg-green-500 hover:bg-green-600 text-white"
    : "bg-white text-green-700 border-2 border-green-300 hover:bg-green-50";

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2 ${bgColor}`}
    >
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.7 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute w-4 h-4 bg-white/50 rounded-full pointer-events-none"
          style={{ left: ripple.x - 8, top: ripple.y - 8 }}
        />
      ))}
      {icon}
      {label}
    </motion.button>
  );
}
