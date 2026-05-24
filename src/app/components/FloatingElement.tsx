import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 4,
  distance = 15,
  className = ""
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -distance, 0],
        rotate: [-2, 2, -2]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
