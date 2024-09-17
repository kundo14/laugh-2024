import * as React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Link from "next/link";
import { useMedia } from "use-media";
import { cn } from "@/lib/cn";

export const EmblaCarouselAutoScroll = ({
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
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 3 }),
  ]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const isMobile = useMedia({ maxWidth: "768px" });

  const toggleAutoplay = React.useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  React.useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  // Handle mobile-specific behavior
  React.useEffect(() => {
    if (isMobile) {
      // Stop carousel auto-scroll on mobile
      emblaApi?.plugins()?.autoScroll?.stop();
      // Set the first project as playing on mobile
      setPlayingProject(0);

      // Create an interval to switch projects every 3 seconds
      const interval = setInterval(() => {
        setPlayingProject((prevProject) => {
          // Cycle through the slides
          const nextProject =
            prevProject !== null && prevProject < slides.length - 1
              ? prevProject + 1
              : 0;
          return nextProject;
        });
      }, 3000);

      // Clean up the interval on unmount
      return () => clearInterval(interval);
    }
  }, [isMobile, slides.length, emblaApi, setPlayingProject]);

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex group">
          {slides.map((item, idx) => (
            <div
              className="embla__slide"
              key={item.title}
              onMouseEnter={() => {
                if (!isMobile) {
                  setPlayingProject(idx);
                  toggleAutoplay();
                }
              }}
              onMouseLeave={() => {
                if (!isMobile) {
                  setPlayingProject(null);
                  toggleAutoplay();
                }
              }}
            >
              <Link
                href={item.link}
                className={`slide text-black group-hover:text-gray-600/30 ${
                  playingProject === idx ? "text-yellow" : ""
                } hover:!text-yellow`}
                key={item.title}
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
