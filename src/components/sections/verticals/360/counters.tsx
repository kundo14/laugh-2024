import * as React from "react";
import CountUp from "react-countup";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FadeIn from "@/components/common/animations/fade-in";
import { cn } from "@/lib/cn";

type CounterProps = {
  to: number;
  isYellow?: boolean;
  label: string;
  onEnd?: string;
  delay?: number;
  className?: string;
  duration?: number;
};

const Counter = ({
  to,
  isYellow,
  delay,
  label,
  duration,
  className,
  onEnd = "",
}: CounterProps) => {
  const [hasEnded, setHasEnded] = React.useState(false);
  const [showsUp, setShowsUp] = React.useState(false);
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      setShowsUp(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={cn("flex flex-col items-center", className)}>
      <FadeIn delay={delay} className="flex flex-col items-center">
        {hasEnded && showsUp ? (
          <h1
            className={clsx(
              "text-48 md:text-[80px] font-archivoBlack leading-none",
              {
                "text-yellow": isYellow,
                "text-white": !isYellow,
              }
            )}
          >
            {onEnd}
          </h1>
        ) : !hasEnded && showsUp ? (
          <CountUp
            end={to}
            delay={0.5}
            duration={duration}
            onEnd={() => {
              if (onEnd === "") return;
              setHasEnded(true);
            }}
            suffix="+"
            className={clsx(
              "text-48 md:text-[80px] font-archivoBlack leading-none",
              {
                "text-yellow": isYellow,
                "text-white": !isYellow,
              }
            )}
          />
        ) : null}
        <p
          className={clsx(
            "text-16 md:text-24 lg:text-32 font-archivoBlack leading-none",
            {
              "text-yellow": isYellow,
              "text-white": !isYellow,
            }
          )}
        >
          {label}
        </p>
      </FadeIn>
    </div>
  );
};

const Counters = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-8 w-full max-w-[1024px] mx-auto",
        className
      )}
    >
      <Counter duration={8} to={190} label="Sports Legends" onEnd="+190" />
      <Counter
        duration={10}
        delay={0.2}
        to={320}
        label="Influencers"
        onEnd="+320"
      />
      <Counter
        delay={0.4}
        duration={12}
        to={350}
        isYellow
        label="Sports Sites"
        onEnd="+350"
        className="col-span-2 sm:col-span-1"
      />
    </div>
  );
};

export default Counters;
