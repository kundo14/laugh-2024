import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { Peep } from "@/models";
import { OurStorySection } from "@/components/sections/about/our-story";

function AboutUsPage({ peeps }: { peeps: Peep[] }) {
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "About Us | Laugh",
        canonical: "https://wearelaugh.com/about",
      }}
      textWhite
      withoutBackgroundTexture
      footerWhite
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-texture"></div>
      <div className="max-w-[1600px] flex flex-col items-center mx-auto relative z-10">
        <div className="max-w-full overflow-x-hidden">
          <h1
            style={{ fontSize: "clamp(1rem, 15vw, 244.448px)" }}
            className="text-gold font-archivoBlack uppercase text-center"
          >
            our&nbsp;story
          </h1>
        </div>
        <div className="container flex flex-col">
          {/* HEADER */}
          <OurStorySection />
        </div>
      </div>
    </PageLayout>
  );
}

export default AboutUsPage;
