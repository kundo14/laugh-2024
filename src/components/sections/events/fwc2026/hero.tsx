import ScrollParallax from "@/components/common/animations/parallax";
import { cn } from "@/lib/cn";

import { SpinningText } from "@/components/design-system/spinning-text";
import React from "react";

export function HomeHeroSpinningText({
  textColor = "white",
}: {
  textColor?: "black" | "white";
}) {
  return (
    <SpinningText
      radius={6}
      fontSize={1}
      variants={{
        container: {
          hidden: {
            opacity: 1,
          },
          visible: {
            opacity: 1,
            rotate: 360,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 6,
              repeat: Infinity,
              staggerChildren: 0.03,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            filter: "blur(0px)",
          },
        },
      }}
      className={cn("text-[12px] sm:text-14", {
        "text-black": textColor === "black",
        "text-yellow": textColor === "white",
      })}
    >
      {`scroll down • scroll down • scroll down • `}
    </SpinningText>
  );
}

export const FifaWC2026Hero = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col justify-end w-full xl:min-h-[800px] h-[100svh] max-h-[1024px] relative",
          className
        )}
      >
        <div className="sm:p-2 absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-0 left-0 w-full h-full sm:top-2 sm:left-2 sm:w-[calc(100%-16px)] sm:h-[calc(100%-16px)] bg-black opacity-70 z-0 rounded" />
          <video
            src={`/gifs/ways-to-connect.mp4`}
            className="rounded object-cover w-full h-full"
            autoPlay
            loop
            muted
            controls={false}
            playsInline
          />
        </div>

        <ScrollParallax className="hidden lg:flex absolute bottom-24 right-32 !pb-8">
          <HomeHeroSpinningText />
        </ScrollParallax>

        <div className="z-10 container flex flex-col items-start !pb-32 sm:!pb-12">
          <ScrollParallax className="z-10" parallaxSpeed={0.6}>
            <p className="text-white font-archivoBlack text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.9] tracking-tight uppercase">
              Fifa world
            </p>
          </ScrollParallax>
          <ScrollParallax className="z-10" parallaxSpeed={0.8}>
            <p className="text-white font-archivoBlack text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.9] tracking-tight uppercase">
              cup <span className="text-yellow font-archivoBlack">2026</span>
            </p>
          </ScrollParallax>
        </div>
      </div>
    </>
  );
};
