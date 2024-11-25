import ScrollGrow from "@/components/common/animations/glow-up-image";
import ScrollParallax from "@/components/common/animations/parallax";
import { cn } from "@/lib/cn";

export const AboutMap = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      <div className="flex flex-col items-end self-start">
        <ScrollParallax parallaxSpeed={0.8}>
          <p className="font-archivoBlack text-white leading-none text-32 sm:text-[56px]">
            Thinking
          </p>
        </ScrollParallax>
        <ScrollParallax parallaxSpeed={0.4}>
          <p className="text-gold font-masker -mt-8 -mr-8 sm:-mr-12 md:-mr-20 text-42 sm:text-[64px] leading-none">
            global
          </p>
        </ScrollParallax>
      </div>
      <ScrollGrow>
        <img
          src="/images/about/map.png"
          alt="Map"
          className="w-full max-w-[1220px] -mt-8 sm:-mt-12 md:-mt-20"
        />
      </ScrollGrow>
    </div>
  );
};
