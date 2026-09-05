// src/lib/animations.ts
// Variantes de animación reutilizables para Framer Motion

export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

export const glowOnHover = {
  whileHover: {
    boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)",
  },
  transition: { duration: 0.3 }
};

export const slideIn = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -20 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const flipIn = {
  initial: { opacity: 0, rotateY: -90 },
  animate: { opacity: 1, rotateY: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Container animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Floating animation
export const floating = {
  initial: { y: 0 },
  animate: { y: [-10, 10, -10] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
};

// Pulse animation
export const pulse = {
  animate: { scale: [1, 1.05, 1] },
  transition: { duration: 2, repeat: Infinity }
};

// Bounce animation
export const bounce = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 0.8, repeat: Infinity }
};

// Shimmer animation (para gradient animated)
export const shimmer = {
  animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
  transition: { duration: 3, repeat: Infinity }
};

// Spin animation
export const spin = {
  animate: { rotate: 360 },
  transition: { duration: 2, repeat: Infinity, ease: "linear" }
};

// Glow pulse animation
export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 15px rgba(34, 197, 94, 0.2)",
      "0 0 30px rgba(34, 197, 94, 0.5)",
      "0 0 15px rgba(34, 197, 94, 0.2)"
    ]
  },
  transition: { duration: 2, repeat: Infinity }
};

// Typewriter effect
export const typewriter = {
  initial: { width: 0 },
  animate: { width: "100%" },
  transition: { duration: 1.5, ease: "easeInOut" }
};

// Blink animation
export const blink = {
  animate: { opacity: [1, 0.5, 1] },
  transition: { duration: 1, repeat: Infinity }
};

// Spring hover
export const springHover = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

// Smooth transition
export const smoothTransition = {
  transition: { type: "tween", duration: 0.3, ease: "easeInOut" }
};

// Page transition variants
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const pageTransitionConfig = {
  transition: { duration: 0.4, ease: "easeInOut" }
};
