import ScrollParallax from "@/components/common/animations/parallax";
import { cn } from "@/lib/cn";

export const ThisIsUsSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center max-w-[1024px]", className)}>
      <ScrollParallax parallaxSpeed={-0.4}>
        <h1
          style={{ fontSize: "clamp(1rem, 11.8vw, 170px)" }}
          className="text-yellow font-archivoBlack uppercase text-center sm:-mb-20 z-10"
        >
          this&nbsp;is&nbsp;us
        </h1>
      </ScrollParallax>
      <img
        src="/images/about/team.jpg"
        alt="This is us"
        className="w-full rounded h-auto"
      />
    </div>
  );
};
