import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import Statement from "@/components/sections/events/fwc2026/statement";
import { FifaWC2026HeroV2 } from "@/components/sections/events/fwc2026/hero2";

function WorldCup2026V2() {
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
      withoutBackgroundTexture
    >
      <FifaWC2026HeroV2 className="-mt-[136px]" />
      <Statement textColor="black" className="!pt-8 sm:!pt-32" />
    </PageLayout>
  );
}

export default WorldCup2026V2;
