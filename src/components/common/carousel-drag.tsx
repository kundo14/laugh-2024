import { cn } from "@/lib/cn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../design-system/carousel-components";
import FadeIn from "./animations/fade-in";

export const CarouselDragImages = ({
  images,
  size = "small",
}: {
  images: string[];
  size?: "xs" | "small" | "large";
}) => {
  return (
    <Carousel
      opts={{
        dragFree: true,
        loop: true,
      }}
    >
      <CarouselContent className="contain flex items-start gap-2 sm:gap-4">
        {/* we first sort them and place the promoted stores on top */}
        {images.map((src, idx) => {
          const delay = (idx + 1) * 0.1;
          return (
            <CarouselItem key={`${src} - ${idx}`} className="max-w-max">
              <FadeIn delay={idx < 5 ? delay : 0} className="">
                <img
                  src={src}
                  alt={`Slide ${idx}`}
                  className={cn("object-cover rounded-md", {
                    "w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[480px] md:h-[420px]":
                      size === "large",
                    "w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[360px] md:h-[320px]":
                      size === "small",
                  })}
                />
              </FadeIn>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
