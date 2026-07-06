import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -20 };
      case "right":
        return { opacity: 0, x: 20 };
      case "up":
        return { opacity: 0, y: 20 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;