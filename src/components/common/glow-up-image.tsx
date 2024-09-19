import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollGrowProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number; // Optional delay prop
};

const ScrollGrow = ({
  children,
  className,
  id,
  delay = 0,
}: ScrollGrowProps) => {
  const ref = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to scale value, with earlier completion
  const scale = useTransform(scrollYProgress, [0, 0.25], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, transformOrigin: "center" }}
      transition={{ delay: delay, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default ScrollGrow;
