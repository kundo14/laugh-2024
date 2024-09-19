import * as React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useMedia } from "use-media";

export const EmblaCarouselMobile = ({
  slides,
  options,
  setPlayingProject,
  playingProject,
}: {
  slides: { title: string; description: string; video: string; link: string }[];
  options?: EmblaOptionsType;
  setPlayingProject: React.Dispatch<React.SetStateAction<number | null>>;
  playingProject: number | null;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const isMobile = useMedia({ maxWidth: "768px" });

  // Handle mobile-specific behavior
  React.useEffect(() => {
    if (isMobile && emblaApi) {
      setPlayingProject(0); // Start with the first project

      const interval = setInterval(() => {
        emblaApi.scrollNext(); // Scroll to the next slide

        // Update the playing project
        const selectedIndex = emblaApi.selectedScrollSnap();
        setPlayingProject(selectedIndex);
      }, 5000); // Change slide every 5 seconds

      // Clean up the interval on unmount
      return () => clearInterval(interval);
    }
  }, [isMobile, emblaApi, setPlayingProject]);

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((item, idx) => (
            <div className="embla__slide" key={item.title}>
              <Link
                href={item.link}
                className={`slide text-black ${
                  playingProject === idx ? "text-yellow" : ""
                }`}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
