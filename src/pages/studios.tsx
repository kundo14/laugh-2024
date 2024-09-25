import * as React from "react";
import VerticalPageLayout from "@/components/layouts/vertical-page";
import { defaultMeta } from "@/components/common/head";
import { TextAndImages } from "@/components/sections/verticals/text-and-images";
import { TextMarquee } from "@/components/common/text-marquee";
import ScrollGrow from "@/components/common/animations/glow-up-image";
import { GetStaticProps } from "next";
import { getWorksByTag } from "@/lib/contentful/api";
import { WorkPreview } from "@/models";
import { ScrollableWorks } from "@/components/sections/work/scrollable-works";

export default function StudiosPage({ works }: { works: WorkPreview[] }) {
  return (
    <VerticalPageLayout
      headProps={{
        ...defaultMeta,
        title: "Studios | Laugh",
      }}
      logo={
        <img
          src="/images/logos/studios.svg"
          className="w-[160px] sm:w-[200px] h-auto"
          alt="home logo"
        />
      }
      noBg
      color="gold"
      textWhite
    >
      <div className="container relative !mt-20 z-40">
        <TextAndImages
          textWhite
          images={[
            "/images/assets/film.jpg",
            "/images/assets/mexico.jpg",
            "/images/assets/mexico-1.jpg",
            "/images/assets/beach.jpg",
          ]}
          markdown={
            "**In the exciting world of sports,**\n\nwe're the innovative thinkers, making campaigns that surprise and impress. With passion driving us, we're the creators of the most exciting experiences."
          }
          color="gold"
        />
      </div>
      <TextMarquee
        text="Crafting Sports Epics, Frame by Frame, Story by Story"
        color="gold"
      />
      <div className="container z-50 relative">
        <div className="flex-1 flex flex-col gap-2">
          <ScrollGrow>
            <img
              src="/images/assets/work-1.jpg"
              alt="work hero"
              className="w-full max-w-full h-auto border border-gray-800"
            />
          </ScrollGrow>
          <div className="grid sm:grid-cols-2 gap-2">
            <ScrollGrow>
              <img
                src="/images/assets/work-vertical-1.jpg"
                alt="work hero"
                className="w-full max-w-full h-auto border border-gray-800"
              />
            </ScrollGrow>
            <ScrollGrow>
              <img
                src="/images/assets/work-vertical-2.jpg"
                alt="work hero"
                className="hidden sm:flex w-full max-w-full h-auto border border-gray-800"
              />
            </ScrollGrow>
          </div>
        </div>
      </div>
      <div className="!py-16 z-40 relative overflow-x-hidden mt-20">
        <ScrollableWorks works={works} title="Works" textWhite />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-texture"></div>
    </VerticalPageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const works = await getWorksByTag("studios");

  return {
    props: { works },
  };
};
