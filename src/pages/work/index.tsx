import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { Clients } from "@/components/sections/work/clients";
import { FeaturedWorks } from "@/components/sections/work/featured";
import { WorkPreview } from "@/models";
import { ScrollableWorks } from "@/components/sections/work/scrollable-works";
import { getWorks } from "@/lib/contentful/api";
import { cn } from "@/lib/cn";
import ScrollParallax from "@/components/common/animations/parallax";
import CarouselRow from "@/components/common/carousel-row";

function Work({ works }: { works: WorkPreview[] }) {
  function shuffleArray(array: string[]) {
    const shuffled = array.slice(); // Create a copy to avoid mutating the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const images = React.useMemo(() => {
    const possibleImages = [
      "/images/carousel/1.png",
      "/images/carousel/2.png",
      "/images/carousel/3.png",
      "/images/carousel/4.png",
      "/images/carousel/5.png",
      "/images/carousel/6.png",
      "/images/carousel/7.png",
      "/images/carousel/8.png",
      "/images/carousel/9.png",
      "/images/carousel/10.png",
      "/images/carousel/11.png",
      "/images/carousel/12.png",
      "/images/carousel/13.png",
      "/images/carousel/14.png",
      "/images/carousel/15.png",
      "/images/carousel/16.png",
      "/images/carousel/17.png",
      "/images/carousel/18.png",
      "/images/carousel/19.png",
      "/images/carousel/20.png",
      "/images/carousel/21.png",
      "/images/carousel/22.png",
      "/images/carousel/23.png",
      "/images/carousel/24.png",
      "/images/carousel/25.png",
      "/images/carousel/26.png",
      "/images/carousel/27.png",
      "/images/carousel/28.png",
      "/images/carousel/29.png",
      "/images/carousel/30.png",
      "/images/carousel/31.png",
      "/images/carousel/32.png",
      "/images/carousel/33.png",
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
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Our Work | Laugh",
      }}
      textWhite
    >
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full h-screen -mt-[136px] relative z-40"
        )}
      >
        <div className="p-2 absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] bg-black opacity-70 z-0 rounded" />
          <img
            src={`/images/assets/work-bg.jpg`}
            alt={`bg - work`}
            className="rounded object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="mx-auto px-4 max-w-[1024px] flex flex-col gap-8 mt-32 sm:mt-20 lg:mt-28 xl:mt-32">
          <ScrollParallax className="z-10" parallaxSpeed={0.8}>
            <p className="text-center text-white text-18 sm:text-20 md:text-24 lg:text-[28px] leading-tight font-extralight">
              Laugh is a space where <b>we connect brands and fans.</b> <br />{" "}
              Our passion and dedication to the world of sports define our
              existence.
            </p>
          </ScrollParallax>
          <ScrollParallax className="z-10" parallaxSpeed={1}>
            <p className="text-center text-white text-18 sm:text-20 md:text-24 lg:text-[28px] leading-tight italic font-extralight">
              We live for the thrill of the game, the roar of the crowd,
              <br /> and the celebration of sporting achievements.
            </p>
          </ScrollParallax>
          <div className="flex flex-col items-center">
            <ScrollParallax className="z-10" parallaxSpeed={0.6}>
              <p className="text-center text-white text-24 sm:text-[28px] md:text-32 lg:text-42 leading-tight font-playfairDisplay custom_underline max-w-max">
                Welcome to Laugh,
              </p>
            </ScrollParallax>
            <ScrollParallax className="z-10" parallaxSpeed={0.8}>
              <p className="text-center text-white text-24 sm:text-[28px] md:text-32 lg:text-42 leading-tight font-extralight mt-2">
                where sports is not just a passion;
              </p>
            </ScrollParallax>
            <ScrollParallax className="z-10" parallaxSpeed={1.2}>
              <p className="text-center text-yellow font-archivo italic font-black text-24 sm:text-[28px] md:text-32 lg:text-42 leading-tight">
                IT&apos;S A WAY OF LIFE.
              </p>
            </ScrollParallax>
          </div>
        </div>
      </div>
      <div className="relative z-40 mt-40">
        <CarouselRow images={images.first} />
        <CarouselRow
          images={images.second}
          size="large"
          direction={-1}
          speed={0.1}
          className="hidden md:flex"
        />
        <CarouselRow images={images.third} speed={0.5} />
      </div>
      <div className="container !mt-12 md:!mt-20 z-40 relative">
        <Clients className="!py-40" />
      </div>
      {/* <WorkHeroData work={works[0]} className="relative z-40" /> */}
      <FeaturedWorks
        works={works.filter((w) => w.featured)}
        className="z-40 relative mb-20"
      />
      <div id="passion-love" className="!py-16 z-40 relative overflow-x-hidden">
        <ScrollableWorks
          works={works.filter((w) => w.tags.includes("passion love"))}
          title="Passion Love"
        />
      </div>
      <div id="studios" className="!py-16 z-40 relative overflow-x-hidden">
        <ScrollableWorks
          works={works.filter((w) => w.tags.includes("studios"))}
          title="Studios"
        />
      </div>
      <div id="360" className="!py-16 z-40 relative overflow-x-hidden">
        <ScrollableWorks
          works={works.filter((w) => w.tags.includes("360"))}
          title="360"
        />
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const works = await getWorks();
  return {
    props: { works },
  };
}

export default Work;
