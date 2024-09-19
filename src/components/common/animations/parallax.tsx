import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollParallaxProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number; // Optional delay prop
  parallaxSpeed?: number; // Speed multiplier for parallax effect (e.g., 0.5 for slower, 1.5 for faster)
};

const ScrollParallax = ({
  children,
  className,
  id,
  delay = 0,
  parallaxSpeed = 0.5, // Default parallax effect speed (0.5 for slower effect)
}: ScrollParallaxProps) => {
  const ref = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Apply the parallax effect only (y-axis movement)
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * parallaxSpeed]);

  return (
    <motion.div
      ref={ref}
      style={{ y, transformOrigin: "center" }}
      transition={{ delay: delay, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default ScrollParallax;
