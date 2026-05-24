import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = ""
}: CounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const increment = (to - from) / (duration * 60);
    let frameId: NodeJS.Timeout;

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
}
