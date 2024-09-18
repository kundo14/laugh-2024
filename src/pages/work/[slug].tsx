import PageLayout from "@/components/layouts/page";
import { getWorksRoutes, getWorkTemplate } from "@/lib/contentful/api";
import { WorkTemplateProps } from "@/models";
import { GetStaticPaths, GetStaticProps } from "next";

const WorkTemplate = ({ data }: { data: WorkTemplateProps }) => {
  return (
    <PageLayout>
      <div className="container">aca</div>
    </PageLayout>
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
