import * as React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export const EmblaCarousel = ({
  slides,
  options,
}: {
  slides: { title: string; description: string; image: string }[];
  options?: EmblaOptionsType;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, stopOnMouseEnter: true, speed: 5000 }),
  ]);
  const [isPlaying, setIsPlaying] = React.useState(false);

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

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((item) => (
            <div className="embla__slide" key={item.title}>
              <p
                className="font-archivoBlack uppercase leading-none"
                key={item.title}
                style={{
                  fontSize: "180px",
                  marginRight: "120px",
                  letterSpacing: "-0.08em",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__controls">
        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? "Stop" : "Start"}
        </button>
      </div> */}
    </div>
  );
};
