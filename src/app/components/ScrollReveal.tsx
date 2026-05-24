import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  triggerOnce = true
}: ScrollRevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce
  });

  const variants: Record<string, any> = {
    up: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    },
    left: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    },
    right: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    },
    none: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    }
  };

  const variant = variants[direction];

  return (
    <motion.div
      ref={ref}
      initial={variant.initial}
      animate={inView ? variant.animate : variant.initial}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
