import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

export function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && showCursor && (
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-green-500"
        >
          █
        </motion.span>
      )}
    </span>
  );
}
