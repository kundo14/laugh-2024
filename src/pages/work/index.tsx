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
import FadeIn from "@/components/common/fadeIn";
import { getWorksRoutes } from "@/lib/contentful/api";

const featuredStaticWorks: WorkPreview[] = [
  {
    name: "La Bombonera Regresa",
    date: {
      start: 2021,
      end: 2021,
    },
    imagePreview: "/works/boca.jpg",
    slug: "la-bombonera-regresa",
    tags: ["buenos aires", "studios"],
  },
  {
    name: "EA Sports FIFA",
    date: {
      start: 2023,
      end: 2023,
    },
    imagePreview: "/works/fifa.jpg",
    slug: "ea-sports-fifa",
    tags: ["caba", "360"],
  },
  {
    name: "La Bombonera Regresa",
    date: {
      start: 2021,
      end: 2021,
    },
    imagePreview: "/works/boca.jpg",
    slug: "la-bombonera-regresa",
    tags: ["buenos aires", "passion love"],
  },
  {
    name: "Adidas",
    date: {
      start: 2023,
      end: 2023,
    },
    imagePreview: "/works/heroes.jpg",
    slug: "adidas",
    tags: ["madrid", "passion love"],
  },
  {
    name: "EA Sports FIFA",
    date: {
      start: 2023,
      end: 2023,
    },
    imagePreview: "/works/fifa.jpg",
    slug: "ea-sports-fifa",
    tags: ["caba", "studios"],
  },
];

const allWorks = featuredStaticWorks
  .concat(featuredStaticWorks)
  .concat(featuredStaticWorks);

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

function Work() {
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
            <FadeIn delay={0.3}>
              <img
                src="/images/assets/work-1.jpg"
                alt="work hero"
                className="w-full h-auto"
              />
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-2">
              <FadeIn delay={0.3}>
                <img
                  src="/images/assets/work-vertical-1.jpg"
                  alt="work hero"
                  className="w-full h-auto"
                />
              </FadeIn>
              <FadeIn delay={0.6}>
                <img
                  src="/images/assets/work-vertical-2.jpg"
                  alt="work hero"
                  className="hidden sm:flex w-full h-auto"
                />
              </FadeIn>
            </div>
          </div>
          <div className="hidden sticky top-32 sm:flex flex-col gap-3 group">
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
        works={featuredStaticWorks}
        className="z-40 relative mb-20"
      />
      <div className="!py-16 z-40 relative overflow-x-hidden">
        <ScrollableWorks
          works={allWorks.filter((w) => w.tags.includes("passion love"))}
          title="Passion Love"
        />
      </div>
      <div className="!py-16 z-40 relative overflow-x-hidden">
        <ScrollableWorks
          works={allWorks.filter((w) => w.tags.includes("studios"))}
          title="Studios"
        />
      </div>
      <div className="!py-16 z-40 relative overflow-x-hidden">
        <ScrollableWorks
          works={allWorks.filter((w) => w.tags.includes("360"))}
          title="360"
        />
      </div>
    </PageLayout>
  );
}

export default Work;
