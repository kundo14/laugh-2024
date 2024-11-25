import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { Peep } from "@/models";
import { OurStorySection } from "@/components/sections/about/our-story";
import { OurHausSection } from "@/components/sections/about/our-haus";
import { getAboutPage } from "@/lib/contentful/api";
import ScrollParallax from "@/components/common/animations/parallax";
import ScrollGrow from "@/components/common/animations/glow-up-image";
import { AboutMap } from "@/components/sections/about/map";
import { AboutQuote } from "@/components/sections/about/quote";
import { DamianAlexSection } from "@/components/sections/about/damian-alex";
import { Players } from "@/components/sections/about/players";

function AboutUsPage({ peeps }: { peeps: Peep[] }) {
  console.log(peeps);
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
        <OurHausSection className="mt-24 sm:mt-28 md:mt-32" />

        <div className="container flex flex-col items-center">
          {/* MAP */}
          <AboutMap className="mt-24 sm:mt-28 md:mt-32" />

          {/* QUOTE */}
          <AboutQuote className="mt-24 sm:mt-28 md:mt-32" />

          {/* DAMIAN Y ALEX */}
          <DamianAlexSection className="mt-12 sm:mt-16 md:mt-20" />
        </div>

        {/* PLAYERS */}
        <Players className="mt-24 sm:mt-28 md:mt-32" peeps={peeps} />
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const peeps = await getAboutPage();
  return {
    props: { peeps: peeps.peeps },
  };
}

export default AboutUsPage;
