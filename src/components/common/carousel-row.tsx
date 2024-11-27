import * as React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface CarouselProps {
  images: string[];
  options?: EmblaOptionsType;
  speed?: number; // Base speed of the carousel
  direction?: number; // Direction of the scroll: 1 for left, -1 for right
  size?: "xs" | "small" | "large";
  className?: string;
}

const EmblaCarouselAutoScroll: React.FC<CarouselProps> = ({
  images,
  options,
  size = "small",
  speed = 0.3, // Slower default speed
  direction = 1, // Default direction to left (1)
  className,
}) => {
  const { scrollY } = useScroll();

  // Calculate image width based on size
  const imageWidth = size === "large" ? 480 : 360;
  const totalWidth = images.length * imageWidth;

  // Determine the initial offset based on direction
  const initialOffset = direction === -1 ? -totalWidth / 2 : 0;

  // Transform vertical scroll to horizontal movement with slower mapping range
  const translateX = useTransform(
    scrollY,
    [0, 2000], // Adjust scroll range as needed
    [initialOffset, initialOffset + direction * -totalWidth * speed] // Adjusted for smooth left and right scroll
  );

  return (
    <div className={cn("embla w-full overflow-hidden pb-10", className)}>
      <div className="embla__viewport">
        <motion.div
          className="embla__container flex gap-2"
          style={{ x: translateX }}
          transition={{
            type: "spring",
            damping: 40, // Higher damping for smoother stop
            stiffness: 100, // Lower stiffness for gentle stop
          }}
        >
          {images.map((src, idx) => (
            <div className="embla__slide" key={idx}>
              <img
                src={src}
                alt={`Slide ${idx}`}
                className={cn("object-cover", {
                  "w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] md:w-[480px] md:h-[420px]":
                    size === "large",
                  "w-[120px] h-[120px] sm:w-[240px] sm:h-[240px] md:w-[360px] md:h-[320px]":
                    size === "small",
                })}
              />
            </div>
          ))}
          {/* Duplicate images for smooth looping */}
          {images.map((src, idx) => (
            <div className="embla__slide" key={`duplicate-${idx}`}>
              <img
                src={src}
                alt={`Duplicated Slide ${idx}`}
                className={cn("object-cover", {
                  "w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] md:w-[480px] md:h-[420px]":
                    size === "large",
                  "w-[120px] h-[120px] sm:w-[240px] sm:h-[240px] md:w-[360px] md:h-[320px]":
                    size === "small",
                })}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EmblaCarouselAutoScroll;
