import ScrollParallax from "@/components/common/animations/parallax";
import { cn } from "@/lib/cn";

export const ThisIsUsSection = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center max-w-[1024px] w-full",
        className
      )}
    >
      <ScrollParallax parallaxSpeed={-0.4}>
        <h1
          style={{ fontSize: "clamp(1rem, 18vw, 160px)" }}
          className="text-white font-playfairDisplay uppercase text-center sm:-mb-20 z-10"
        >
          this&nbsp;is&nbsp;<i className="font-playfairDisplay">us</i>
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
