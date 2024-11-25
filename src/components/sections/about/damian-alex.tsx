import FadeIn from "@/components/common/animations/fade-in";
import ScrollGrow from "@/components/common/animations/glow-up-image";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";

export const DamianAlexSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <ScrollGrow>
        <img
          src="/images/about/damian-alex.png"
          alt="Damian and Alex"
          className="w-full max-w-[420px]"
        />
      </ScrollGrow>
      <div className="flex flex-col">
        <CustomDraggable>
          <img
            src="/images/scratches/gold-arrow-2-backwards.svg"
            alt="gold arrow"
            className="w-20 sm:w-28 h-auto mb-8"
            draggable="false"
          />
        </CustomDraggable>
        <div className="flex flex-col gap-px -ml-20 min-w-max">
          <div className="text-white flex flex-col sm:flex-row items-start sm:items-center">
            <FadeIn delay={0.1}>
              <p className="text-20 sm:text-24 font-medium mr-2">
                Damian Smyth{" "}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="opacity-80 text-18 sm:text-24 font-light leading-none">
                - Global CCO.
              </p>
            </FadeIn>
          </div>
          <div className="text-white flex flex-col sm:flex-row items-start sm:items-center">
            <FadeIn delay={0.3}>
              <p className="text-20 sm:text-24 font-medium mr-2">Alex Manby </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="opacity-80 text-18 sm:text-24 font-light leading-none">
                - Global CSO.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};
