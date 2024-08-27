import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { EmblaCarouselAutoScroll } from "@/components/design-system/carousel-autoscroll";

const projects = [
  {
    title: "La bombonera regresa",
    description: "Description 1",
    image: "/images/projects/project1.jpg",
    link: "/work-la-bombonera-regresa",
  },
  {
    title: "México manda",
    description: "Description 2",
    image: "/images/projects/project2.jpg",
    link: "/work-mexico-manda",
  },
  {
    title: "Heroes",
    description: "Description 3",
    image: "/images/projects/project3.jpg",
    link: "/work-heroes",
  },
];

export default function Home() {
  const [playingProject, setPlayingProject] = React.useState<null | number>(
    null
  );
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Laugh | share laughs, share sports",
      }}
      withoutFooter
      withoutBackgroundTexture
    >
      <img
        src="/images/textures/texture.jpg"
        className="w-full h-screen absolute top-0 left-0 opacity-10"
      />
      {/* so we get the full screen. We dont take into account the nav */}
      <div className="h-[calc(100vh-90px)] max-h-[calc(100vh-90px)] sm:h-[calc(100vh-137px)] sm:max-h-[calc(100vh-137px)] w-full overflow-hidden flex flex-col relative">
        <div className="container">
          <div className="flex flex-col gap-6 !max-w-[420px] text-12 uppercase leading-[1.8] mt-20 sm:mt-32">
            <p>
              <i>WE POWER PASSION</i>
            </p>
            <p>
              <b>Welcome to Laugh.</b> An <b>award winning</b> sports marketing
              agency delivering <b>first class results.</b> We specialize in
              formulating, building, and scaling strategies across key
              verticals, <b>generating revenue from the passion of sports.</b>
            </p>
            <p>
              At Laugh, our profound understanding of fans enables us to{" "}
              <b>enhance the commercial value of sports</b>, from{" "}
              <b>
                maximizing your sponsorship rights, upscaling your online
                presence
              </b>
              , capitalize on key market opportunities with{" "}
              <b>premium content production.</b>
            </p>
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0 mb-12 sm:mb-4">
          <EmblaCarouselAutoScroll
            slides={projects}
            options={{ direction: "ltr", loop: true }}
            setPlayingProject={setPlayingProject}
          />
        </div>
      </div>
    </PageLayout>
  );
}
