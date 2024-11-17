import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { WorkPreview } from "@/models";
import { getWorks } from "@/lib/contentful/api";
import { StudiosSection } from "@/components/sections/ways-to-connect/studios";
import { Section360 } from "@/components/sections/ways-to-connect/360";
import { PassionTeamsSection } from "@/components/sections/ways-to-connect/passion-love";

function WaysToConnect({ works }: { works: WorkPreview[] }) {
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Ways to Connect | Laugh",
        canonical: "https://wearelaugh.com/ways-to-connect",
      }}
      textWhite
      withoutBackgroundTexture
      footerWhite
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-texture"></div>
      <StudiosSection className="-mt-[136px]" works={works} />
      <Section360 />
      <PassionTeamsSection />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const works = await getWorks();
  return {
    props: { works },
  };
}

export default WaysToConnect;
