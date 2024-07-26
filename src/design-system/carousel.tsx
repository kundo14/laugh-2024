import * as React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { WorkPreview as WorkPreviewProps } from "@/models";
import { WorkPreview } from "@/components/common/work-preview";

export const EmblaCarouselWorks = ({
  slides,
  options,
}: {
  slides: WorkPreviewProps[];
  options?: EmblaOptionsType;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {slides.map((item, idx) => (
            <div key={idx} className="embla__slide !max-w-[420px]">
              <WorkPreview
                size="small"
                variant="light"
                work={item}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
