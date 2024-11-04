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

function Work({ works }: { works: WorkPreview[] }) {
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
