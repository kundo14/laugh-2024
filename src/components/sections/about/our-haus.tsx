import * as React from "react";
import FadeIn from "@/components/common/animations/fade-in";
import ScrollParallax from "@/components/common/animations/parallax";
import CarouselRow from "@/components/common/carousel-row";
import { cn } from "@/lib/cn";
import { shuffleArray } from "@/lib/helpers/shuffle-array";

export const OurHausSection = ({ className }: { className?: string }) => {
  const images = React.useMemo(() => {
    const possibleImages = [
      "/images/about/carousel/1.jpg",
      "/images/about/carousel/2.jpg",
      "/images/about/carousel/3.jpg",
      "/images/about/carousel/4.jpg",
      "/images/about/carousel/5.jpg",
      "/images/about/carousel/6.jpg",
      "/images/about/carousel/7.jpg",
      "/images/about/carousel/8.jpg",
      "/images/about/carousel/9.jpg",
      "/images/about/carousel/10.jpg",
      "/images/about/carousel/11.jpg",
      "/images/about/carousel/12.jpg",
      "/images/about/carousel/13.jpg",
      "/images/about/carousel/14.jpg",
      "/images/about/carousel/15.jpg",
      "/images/about/carousel/16.jpg",
      "/images/about/carousel/17.jpg",
      "/images/about/carousel/18.jpg",
      "/images/about/carousel/19.jpg",
      "/images/about/carousel/20.jpg",
    ];

    // Shuffle the possible images array
    const shuffledImages = shuffleArray(possibleImages);

    // Divide the shuffled array into three parts
    const chunkSize = Math.ceil(shuffledImages.length / 3);
    const first = shuffledImages.slice(0, chunkSize);
    const second = shuffledImages.slice(chunkSize, chunkSize * 2);
    const third = shuffledImages.slice(chunkSize * 2);

    return {
      first,
      second,
      third,
    };
  }, []);

  return (
    <div className={cn("flex flex-col items-center w-full", className)}>
      <div className="container relative flex justify-between md:justify-center">
        <div className="flex items-center gap-3 sm:gap-6 text-center">
          <FadeIn>
            <p className="text-32 sm:text-[64px] text-white font-masker leading-none mt-2 sm:mt-8">
              our
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gold font-playfairDisplay text-[56px] sm:text-[120px] leading-none">
              haus
            </p>
          </FadeIn>
        </div>
        <div className="absolute right-0 top-[70%] flex flex-col items-end text-white">
          <ScrollParallax>
            <p className="text-16 sm:text-18 font-bold">BUENOS AIRES</p>
          </ScrollParallax>
          <ScrollParallax parallaxSpeed={0.5}>
            <p className="text-14 opacity-90">O58° 22&apos; 38.03&quot;</p>
          </ScrollParallax>
          <ScrollParallax parallaxSpeed={0.4}>
            <p className="text-14 opacity-90">S34° 36&apos; 47.34&quot;</p>
          </ScrollParallax>
        </div>
      </div>
      <div className="relative z-40 mt-12">
        <FadeIn>
          <CarouselRow images={images.first} />
        </FadeIn>
        <FadeIn>
          <CarouselRow
            images={images.second}
            size="large"
            direction={-1}
            speed={0.1}
          />
        </FadeIn>
        <FadeIn>
          <CarouselRow images={images.third} speed={0.5} />
        </FadeIn>
      </div>
    </div>
  );
};
