import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { getWorks } from "@/lib/contentful/api";
import { WorkPreview as WorkPreviewProps } from "@/models";
import { WorkPreview } from "@/components/common/work-preview";

function Work({ works }: { works: WorkPreviewProps[] }) {
  // Scroll to top on route change
  React.useEffect(() => {
    console.log("r-c");
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "All Our Work | Laugh",
        canonical: "https://wearelaugh.com/work/all",
      }}
      textWhite
      withoutBackgroundTexture
      footerWhite
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-texture"></div>
      <div className="flex flex-col container relative z-50 !pt-20">
        <h1 className="text-[56px] sm:text-[64px] md:text-[80px] uppercase font-archivo font-black text-yellow leading-none">
          All <i>our work</i>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-x-4 gap-y-12">
          {works.map((work, index) => (
            <WorkPreview
              key={index}
              work={work}
              size="large"
              variant="dark"
              smallTitle
            />
          ))}
        </div>
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
