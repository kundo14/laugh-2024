import ScrollParallax from "@/components/common/animations/parallax";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";

export const BplayPoster = ({ className }: { className?: string }) => {
  return (
    <ScrollParallax
      parallaxSpeed={0.8}
      className={cn("flex flex-col items-end sm:items-start", className)}
    >
      <div className="flex items-end">
        <CustomDraggable>
          <img
            src="/images/scratches/white-curl-arrow.svg"
            alt="drag-me"
            className="w-[100px] xl:w-[120px] h-auto object-cover mb-2 !rotate-[30deg]"
            draggable={false}
          />
        </CustomDraggable>
        <CustomDraggable>
          <img
            src="/images/ways-to-connect/passion-love/3.png"
            alt="drag-me"
            className="w-[200px] md:w-[280px] lg:w-[380px] xl:w-[420px] h-auto object-cover"
            draggable={false}
          />
        </CustomDraggable>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-white uppercase font-archivoBlack text-24 md:text-32 lg:text-42 xl:text-48 leading-nonte">
          bplay
        </p>
        <CustomDraggable>
          <img
            src="/images/logos/passion-teams-horizontal.svg"
            alt="drag-me"
            className="w-[200px] md:w-[240px] lg:w-[320px] xl:w-[360px] h-auto object-cover ml-8 -mt-4 lg:-mt-6"
            draggable={false}
          />
        </CustomDraggable>
      </div>
    </ScrollParallax>
  );
};
