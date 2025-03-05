import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { getWorks } from "@/lib/contentful/api";
import { WorkPreview as WorkPreviewProps } from "@/models";
import { WorkPreview } from "@/components/common/work-preview";

const WORKS_PER_PAGE = 12;

function Work({ initialWorks }: { initialWorks: WorkPreviewProps[] }) {
  const [works, setWorks] = React.useState<WorkPreviewProps[]>(initialWorks);
  const [isLoading, setIsLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(WORKS_PER_PAGE);
  const [hasMore, setHasMore] = React.useState(true); // Track if there's more data to fetch

  const loaderRef = React.useRef(null);

  // Load more works when reaching the bottom
  React.useEffect(() => {
    if (!hasMore) return; // Stop if no more works

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !isLoading) {
          setIsLoading(true);
          const newWorks = await getWorks(WORKS_PER_PAGE, offset);

          if (newWorks.length === 0 || !newWorks) {
            setHasMore(false); // No more works to fetch
            setIsLoading(false);
          } else {
            setWorks((prev) => [...prev, ...(newWorks as WorkPreviewProps[])]);
            setOffset((prevOffset) => prevOffset + WORKS_PER_PAGE);
            setIsLoading(false);
          }
        }
      },
      { rootMargin: "100px" }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [offset, isLoading]);

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
        <div
          ref={loaderRef}
          className="h-10 w-full flex justify-center items-center"
        >
          {isLoading && <p>Loading more works...</p>}
        </div>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const initialWorks = await getWorks(WORKS_PER_PAGE, 0);
  return {
    props: { initialWorks },
  };
}

export default Work;
