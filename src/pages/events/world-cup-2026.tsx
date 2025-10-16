import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { FifaWC2026Hero } from "@/components/sections/events/fwc2026/hero";
import Statement from "@/components/sections/events/fwc2026/statement";

function WorldCup2026() {
  // Scroll to top on route change
  React.useEffect(() => {
    console.log("r-c");
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Fifa World Cup 2026 | Laugh",
        canonical: "https://wearelaugh.com/events/world-cup-2026",
      }}
      textWhite
      withoutBackgroundTexture
      footerWhite
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-texture"></div>
      <FifaWC2026Hero className="-mt-[136px]" />
      <div className="flex relative">
        <Statement className="!pt-24 sm:!pt-32" withStickers />
      </div>
    </PageLayout>
  );
}

export default WorldCup2026;
