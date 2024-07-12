import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { EmblaCarousel } from "@/design-system/carousel";

const projects = [
  {
    title: "La bombonera regresa",
    description: "Description 1",
    image: "/images/projects/project1.jpg",
  },
  {
    title: "México manda",
    description: "Description 2",
    image: "/images/projects/project2.jpg",
  },
  {
    title: "Heroes",
    description: "Description 3",
    image: "/images/projects/project3.jpg",
  },
];

export default function Home() {
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Laugh | share laughs, share sports",
      }}
      rootClassName="bg-gray-400"
    >
      {/* so we get the full screen. We dont take into account the nav */}
      <div className="h-[calc(100vh-137px)] w-full flex justify-end items-end">
        <EmblaCarousel
          slides={projects}
          options={{ direction: "ltr", loop: true }}
        />
      </div>
    </PageLayout>
  );
}
