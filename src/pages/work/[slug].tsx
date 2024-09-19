import PageLayout from "@/components/layouts/page";
import WorkPageLayout from "@/components/layouts/work-page";
import { WorkHeroData } from "@/components/sections/works/hero-data";
import { ImageGallery } from "@/components/sections/works/image-gallery";
import { getWorksRoutes, getWorkTemplate } from "@/lib/contentful/api";
import { WorkTemplateProps } from "@/models";
import { GetStaticPaths, GetStaticProps } from "next";
import { SwitchComponents } from "./switch-components";

const WorkTemplate = ({ data }: { data: WorkTemplateProps }) => {
  console.log("data", data);
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
    >
      <div className="container relative z-40 !mt-16">
        <WorkHeroData work={data} className="!mb-8 sm:!mb-16" />
        <ImageGallery images={data.imageGallery} />
      </div>{" "}
      {data.components.map((component, index) => (
        <SwitchComponents key={index} component={component} />
      ))}
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
