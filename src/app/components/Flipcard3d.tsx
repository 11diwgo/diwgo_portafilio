import { motion } from "framer-motion";
import { useState } from "react";

interface FlipCard3DProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export function FlipCard3D({ front, back, className = "" }: FlipCard3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: 1000,
        cursor: "pointer",
      }}
      className={`relative h-64 ${className}`}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute w-full h-full bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 flex items-center justify-center border border-green-200"
        >
          {front}
        </div>

        {/* BACK */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute w-full h-full bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 flex items-center justify-center border border-green-500 text-white"
        >
          {back}
        </div>
      </motion.div>
    </motion.div>
  );
}