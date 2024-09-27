import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import Link from "next/link";
import { toRoman } from "@/lib/helpers/toRoman";
import { Clients } from "@/components/sections/work/clients";
import { FeaturedWorks } from "@/components/sections/work/featured";
import { WorkPreview } from "@/models";
import { ScrollableWorks } from "@/components/sections/work/scrollable-works";
import { CustomDraggable } from "@/components/common/draggable";
import FadeIn from "@/components/common/animations/fade-in";
import ScrollGrow from "@/components/common/animations/glow-up-image";
import { VideoPlayer } from "@/components/common/youtube-player";
import { getWorks } from "@/lib/contentful/api";

const submenu = [
  {
    label: "Clients",
    href: "/work#clients",
  },
  {
    label: "Featured",
    href: "/work#featured",
  },
  {
    label: "Passion Love",
    href: "/work#passion-love",
  },
  {
    label: "360",
    href: "/work#360",
  },
  {
    label: "studios",
    href: "/work#studios",
  },
];

function Work({ works }: { works: WorkPreview[] }) {
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Our Work | Laugh",
      }}
    >
      <div className="container !mt-12 md:!mt-20 z-40 relative">
        <div className="w-full max-w-[1100px]">
          <div className="w-full flex flex-col xl:flex-row xl:items-end xl:justify-between">
            <FadeIn>
              <div className="flex flex-col max-w-[980px]">
                <p className="text-24 md:text-32 xl:text-42 uppercase leading-[1.3]">
                  At <b className="scratch">Laugh</b> we have worked with some
                  of the <b>most ambitious and exciting brands</b> in the world,{" "}
                  <span className="font-extralight">
                    and that is because of one thing and one thing only…
                  </span>
                </p>
                <p className="hidden xl:flex uppercase font-black ml-auto italic text-92 -mt-20">
                  Our work.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex items-end gap-4 lg:gap-8 mt-2 sm:mt-0">
                <p className="flex xl:hidden uppercase font-black ml-auto italic text-[40px] sm:text-48 md:text-[64px]">
                  Our work.
                </p>
                <CustomDraggable>
                  <img
                    src="/images/scratches/yellow-arrow.svg"
                    alt="yellow arrow"
                    className="xl:-mb-4 w-[48px] md:w-[64px] lg:w-[80px] xl:w-auto h-auto"
                    draggable={false}
                  />
                </CustomDraggable>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="w-full flex items-start gap-8 lg:gap-16 mt-4 xl:mt-12">
          <div className="flex-1 flex flex-col gap-2">
            <FadeIn delay={0.3} className="flex">
              <VideoPlayer video="https://www.youtube.com/watch?v=7w4n_gKeFe4" />
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-2">
              <ScrollGrow>
                <img
                  src="/images/assets/work-vertical-1.jpg"
                  alt="work hero"
                  className="w-full h-auto rounded"
                />
              </ScrollGrow>
              <ScrollGrow>
                <img
                  src="/images/assets/work-vertical-2.jpg"
                  alt="work hero"
                  className="hidden md:flex w-full h-auto rounded"
                />
              </ScrollGrow>
            </div>
          </div>
          <div className="hidden sticky top-32 md:flex flex-col gap-3 group">
            {submenu.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link
                  href={item.href}
                  className="text-12 uppercase inline-flex group-hover:opacity-50 hover:!opacity-100 transition-all duration-150"
                >
                  {item.label} <span className="ml-1">.{toRoman(i + 1)}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
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
