import FadeIn from "@/components/common/animations/fade-in";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";

export const ActingLocalSection = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 flex-1 min-h-[580px]",
        className
      )}
    >
      <FadeIn delay={0.5}>
        <img
          src="/images/about/acting-local/3.jpg"
          alt="Acting Local"
          className="hidden sm:flex w-full min-h-full object-cover rounded"
        />
      </FadeIn>

      <div className="w-full flex flex-col gap-2 h-full justify-between">
        <FadeIn className="h-[calc(50%-4px)]">
          <img
            src="/images/about/acting-local/1.jpg"
            alt="Acting Local"
            className="w-full h-full object-cover rounded"
          />
        </FadeIn>
        <FadeIn delay={0.3} className="h-[calc(50%-4px)]">
          <img
            src="/images/about/acting-local/2.jpg"
            alt="Acting Local"
            className="w-full h-full object-cover rounded"
          />
        </FadeIn>
      </div>
      <FadeIn delay={0.15}>
        <img
          src="/images/about/acting-local/4.jpg"
          alt="Acting Local"
          className="hidden md:flex w-full h-full object-cover rounded"
        />
      </FadeIn>
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col -mt-12 lg:-mt-20 max-w-[220px] ml-auto">
          <p className="text-white font-playfairDisplay text-42 sm:text-48 lg:text-[56px] leading-none -ml-16">
            acting
          </p>
          <div className="relative max-w-max ml-auto mr-0 lg:mr-10">
            <p className="text-right font-masker text-gold text-48 sm:text-[56px] lg:text-[72px] leading-none max-w-max">
              local
            </p>
            <CustomDraggable>
              <img
                src="/images/scratches/gold-underline-2.svg"
                alt="drag-me"
                className="min-w-[110%] lg:min-w-[130%] absolute top-[100%] -left-[5%] lg:-left-[15%]"
                draggable={false}
              />
            </CustomDraggable>
          </div>
        </div>
        <FadeIn delay={0.4} className="h-full">
          <img
            src="/images/about/acting-local/5.jpg"
            alt="Acting Local"
            className="w-full h-full object-cover rounded"
          />
        </FadeIn>
      </div>
    </div>
  );
};
