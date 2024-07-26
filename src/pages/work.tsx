import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import Link from "next/link";
import { toRoman } from "@/lib/helpers/toRoman";
import { Clients } from "@/components/sections/work/clients";
import { FeaturedWorks } from "@/components/sections/work/featured";
import { WorkPreview } from "@/models";
import { ScrollableWorks } from "@/components/sections/work/scrollable-works";

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

export default function Work() {
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Our Work | Laugh",
      }}
    >
      <div className="container !mt-20 z-40 relative">
        <div className="w-full max-w-[1100px]">
          <div className="w-full flex items-end justify-between">
            <div className="flex flex-col max-w-[980px]">
              <p className="text-42 uppercase leading-[1.3]">
                At <b className="scratch">Laugh</b> we have worked with some of
                the <b>most ambitious and exciting brands</b> in the world,{" "}
                <span className="font-extralight">
                  and that is because of one thing and one thing only…
                </span>
              </p>
              <p className="uppercase font-black ml-auto italic text-92 -mt-20">
                Our work.
              </p>
            </div>
            <img
              src="/images/scratches/yellow-arrow.svg"
              alt="yellow arrow"
              className="-mb-4"
            />
          </div>
        </div>
        <div className="w-full flex items-start gap-16 mt-12">
          <div className="flex-1 flex flex-col gap-2">
            <div className="h-[800px] w-full bg-red" />
            <div className="grid grid-cols-2 gap-2 h-[800px]">
              <div className="h-[800px] w-full bg-gold" />
              <div className="h-[800px] w-full bg-yellow" />
            </div>
          </div>
          <div className="sticky top-32 flex flex-col gap-3 group">
            {submenu.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-12 uppercase inline-flex group-hover:opacity-50 hover:!opacity-100 transition-all duration-150"
              >
                {item.label} <span className="ml-1">.{toRoman(i + 1)}</span>
              </Link>
            ))}
          </div>
        </div>
        <Clients className="!py-40 " />
      </div>
      <FeaturedWorks works={featuredStaticWorks} className="z-40 relative" />
      <div className="!py-40 z-40 relative overflow-x-hidden">
        <ScrollableWorks
          works={allWorks.filter((w) => w.tags.includes("passion love"))}
          title="Passion Love"
        />
      </div>
      {/* <ScrollableWorks
        works={allWorks.filter((w) => w.tags.includes("studios"))}
        title="studios"
      />
      <ScrollableWorks
        works={allWorks.filter((w) => w.tags.includes("360"))}
        title="360"
      /> */}
    </PageLayout>
  );
}
