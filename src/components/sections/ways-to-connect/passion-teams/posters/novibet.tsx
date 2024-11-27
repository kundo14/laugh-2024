import ScrollParallax from "@/components/common/animations/parallax";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";

export const NovibetPoster = ({ className }: { className?: string }) => {
  return (
    <div className={cn("", className)}>
      <ScrollParallax
        parallaxSpeed={0.2}
        className="flex flex-col-reverse lg:flex-row lg:items-end"
      >
        <div className="flex flex-col items-start mt-4 pb-8">
          <div className="flex items-end">
            <p className="text-white uppercase font-archivoBlack text-24 leading-none -mb-2">
              novibet
            </p>
            <CustomDraggable>
              <img
                src="/images/scratches/white-curl-arrow-2.svg"
                alt="drag-me"
                className="w-[120px] h-auto object-cover -ml-4"
                draggable={false}
              />
            </CustomDraggable>
          </div>
          <CustomDraggable>
            <img
              src="/images/logos/passion-teams-horizontal.svg"
              alt="drag-me"
              className="w-[220px] h-auto object-cover"
              draggable={false}
            />
          </CustomDraggable>
        </div>

        <CustomDraggable>
          <img
            src="/images/ways-to-connect/passion-love/2.png"
            alt="drag-me"
            className="w-[200px] md:w-[280px] h-auto object-cover"
            draggable={false}
          />
        </CustomDraggable>
      </ScrollParallax>
    </div>
  );
};
