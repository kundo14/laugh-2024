import ScrollParallax from "@/components/common/animations/parallax";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";

export const EaFcPoster = ({ className }: { className?: string }) => {
  return (
    <div className={cn("", className)}>
      <div className="flex flex-col">
        <p className="text-white uppercase font-archivoBlack text-24 leading-none -mb-2">
          ea fc
        </p>
        <CustomDraggable>
          <img
            src="/images/logos/passion-teams-horizontal.svg"
            alt="drag-me"
            className="w-[180px] lg:w-[200px] xl:w-[220px] h-auto object-cover"
            draggable={false}
          />
        </CustomDraggable>
      </div>
      <ScrollParallax parallaxSpeed={-0.4}>
        <CustomDraggable>
          <img
            src="/images/ways-to-connect/passion-love/1.jpg"
            alt="drag-me"
            className="w-[220px] xl:w-[280px] h-auto object-cover"
            draggable={false}
          />
        </CustomDraggable>
      </ScrollParallax>
    </div>
  );
};
