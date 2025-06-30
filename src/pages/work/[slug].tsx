import * as React from "react";
import WorkPageLayout from "@/components/layouts/work-page";
import { WorkHeroData } from "@/components/sections/works/hero-data";
import { ImageGallery } from "@/components/sections/works/image-gallery";
import { getWorksRoutes, getWorkTemplate } from "@/lib/contentful/api";
import { WorkTemplateProps } from "@/models";
import { GetStaticPaths, GetStaticProps } from "next";
import { SwitchComponents } from "../../components/sections/works/switch-components";
import FadeIn from "@/components/common/animations/fade-in";
import { VideoPlayer } from "@/components/common/youtube-player";
import { useRouter } from "next/router";
import { cn } from "@/lib/cn";

const WorkTemplate = ({ data }: { data: WorkTemplateProps }) => {
  const router = useRouter();
  const { asPath } = router;

  // Scroll to top on route change
  React.useEffect(() => {
    console.log("r-c");
    window.scrollTo(0, 0);
  }, [asPath]);

  return (
    <WorkPageLayout
      headProps={{
        title: `${data.name} | Laugh`,
        description: "by Laugh",
        ogImage: data.imagePreview,
        canonical: `https://wearelaugh.com/work/${data.slug}`,
      }}
      bg={data.heroVideo}
      name={data.name}
      textWhite
    >
      <div className="container relative z-40 !mt-16">
        <WorkHeroData work={data} className="!mb-8 sm:!mb-16" textWhite />
        {data.imageGallery && data.imageGallery.length && (
          <ImageGallery images={data.imageGallery} />
        )}
      </div>{" "}
      {data.components &&
        data.components.map((component, index) => (
          <SwitchComponents key={index} component={component} />
        ))}
      <div
        className={cn("container relative z-40", {
          // if last component has mb, we dont need to add mt here
          "!mt-16 sm:!mt-20 lg:!mt-32":
            !data.components?.length ||
            (data.components[data.components.length - 1].type !== "quote" &&
              data.components[data.components.length - 1].type !==
                "text-slider"),
        })}
      >
        {data.bottomVideoLink && (
          <FadeIn delay={0.3} className="flex">
            <VideoPlayer video={data.bottomVideoLink} />
          </FadeIn>
        )}
        {data.bottomVideoLink2 && (
          <FadeIn delay={0.3} className="flex mt-12 md:mt-20">
            <VideoPlayer video={data.bottomVideoLink2} />
          </FadeIn>
        )}
      </div>
    </WorkPageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { slug: string } }[] = [];
  const routes = await getWorksRoutes();

  routes.forEach((route) => {
    paths.push({ params: { slug: route as string } });
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  if (typeof slug !== "string") {
    return {
      notFound: true,
    };
  }

  const data = await getWorkTemplate(slug);

  return {
    props: { data },
  };
};

export default WorkTemplate;
