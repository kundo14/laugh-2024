import * as React from "react";
import { motion, stagger, useAnimate } from "motion/react";
import Floating, {
  FloatingElement,
} from "@/components/fancy/parallax-floating";
import { cn } from "@/lib/cn";
import ScrollParallax from "@/components/common/animations/parallax";
import { HomeHeroSpinningText } from "./hero";
import { exampleImages } from "../info/fwc-2026-imgs";
import { CustomDraggable } from "@/components/common/draggable";

export const FifaWC2026HeroV2 = ({ className }: { className?: string }) => {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) }
    );
  }, []);

  return (
    <>
      <div
        className={cn(
          "flex flex-col justify-end w-full xl:min-h-[800px] h-[100svh] max-h-[1024px] relative",
          className
        )}
        ref={scope}
      >
        <Floating sensitivity={-1} className="overflow-hidden">
          <FloatingElement
            depth={0.5}
            className="top-[20%] left-[2%] sm:left-[11%]"
          >
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[0].url}
              className="w-20 sm:w-32 h-auto object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement
            depth={1}
            className="hidden lg:flex top-[4%] left-[32%]"
          >
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[1].url}
              className="w-32 h-auto object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement
            depth={2}
            className="hidden lg:flex top-[18%] left-[53%]"
          >
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[2].url}
              className="w-40 h-auto object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement
            depth={1}
            className="top-[16%] sm:top-[20%] lg:top-[40%] right-[20%] sm:right-[5%]"
          >
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[3].url}
              className="w-24 sm:w-40 h-auto object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>

          <FloatingElement
            depth={1}
            className="bottom-[0%] left-[5%] lg:left-[20%]"
          >
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[4].url}
              className="w-32 sm:w-40 h-auto object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement
            depth={1}
            className="bottom-[8%] right-[2%] sm:right-[8%] lg:right-[15%]"
          >
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[6].url}
              className="w-48 sm:w-64 h-auto object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
        </Floating>

        <ScrollParallax className="hidden lg:flex absolute bottom-24 right-32 !pb-8">
          <HomeHeroSpinningText textColor={"black"} />
        </ScrollParallax>

        <div className="z-10 container flex flex-col items-center !pb-32 justify-center !pt-40 h-full">
          <ScrollParallax className="z-10" parallaxSpeed={0.6}>
            <p className="!text-black contrast font-archivoBlack text-[38px] sm:text-[48px] md:text-[64px] xl:text-[80px] leading-[0.9] tracking-tight uppercase text-center">
              Fifa world cup
            </p>
          </ScrollParallax>
          <ScrollParallax className="z-10 relative" parallaxSpeed={0.8}>
            <p className="text-[48px] sm:text-[64px] md:text-[80px] xl:text-[100px] leading-[0.9] tracking-tight uppercase mt-4">
              <span className="font-archivoBlack !text-black contrast">
                {" "}
                2026{" "}
              </span>
              <CustomDraggable>
                <img
                  src="/images/scratches/red-underline.svg"
                  alt="udnerline"
                  draggable={false}
                  className="absolute top-[100%] left-0 w-full h-auto"
                />
              </CustomDraggable>
            </p>
          </ScrollParallax>
        </div>
      </div>
    </>
  );
};
