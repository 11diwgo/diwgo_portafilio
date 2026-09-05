import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface TypewriterTitleProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypewriterTitle({
  text,
  speed = 80,
  delay = 0,
  className = "",
  onComplete,
}: TypewriterTitleProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);

    const delayTimeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
          onCompleteRef.current?.();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-green-500 ml-1"
        >
          █
        </motion.span>
      )}
    </span>
  );
}