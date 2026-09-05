import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  showLabel?: boolean;
}

export function AnimatedProgressBar({
  label,
  percentage,
  color = "bg-green-500",
  showLabel = true
}: AnimatedProgressBarProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="mb-6">
      {showLabel && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">{label}</span>
          <motion.span
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {percentage}%
          </motion.span>
        </div>
      )}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className={`h-full ${color}`}
        />
      </div>
    </div>
  );
}
