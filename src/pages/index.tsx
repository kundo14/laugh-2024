import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { EmblaCarouselAutoScroll } from "@/components/design-system/carousel-autoscroll";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "@/components/common/animations/fade-in";

const projects = [
  {
    title: "Adidas",
    description: "Adidas Perú",
    video: "/gifs/adidas.mp4",
    link: "/work/la-casa-oficial",
  },
  {
    title: "BPLAY",
    description: "Description 2",
    video: "/gifs/adidas.mp4",
    link: "/work/bplay-corazon-argento",
  },
  {
    title: "Concacaf",
    description: "Description 3",
    video: "/gifs/adidas.mp4",
    link: "/work/la-casa-oficial",
  },
  {
    title: "Ea Sports",
    description: "Description 3",
    video: "/gifs/adidas.mp4",
    link: "/work/bplay-corazon-argento",
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
      isPlaying={playingProject !== null}
    >
      <img
        src="/images/textures/texture.jpg"
        className="w-full h-[100svh] absolute top-0 left-0 opacity-10"
      />
      <AnimatePresence>
        {playingProject !== null && (
          <motion.video
            autoPlay
            loop
            muted
            src={projects[playingProject].video}
            className="w-full h-[100svh] absolute top-0 left-0 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* so we get the full screen. We dont take into account the nav */}
      <div className="h-[calc(100svh-140px)] max-h-[calc(100svh-140px)] sm:h-[calc(100vh-137px)] sm:max-h-[calc(100vh-137px)] w-full overflow-hidden flex flex-col relative">
        <div className="container">
          <div
            className={cn(
              "flex flex-col gap-6 !max-w-[420px] !text-12 uppercase leading-[1.8] mt-20 sm:mt-32 transition-all duration-300",
              {
                "text-white": playingProject !== null,
              }
            )}
          >
            <FadeIn>
              <p>
                <i className="custom_underline">WE POWER PASSION</i>
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p>
                <b>Welcome to Laugh.</b> An <b>award winning</b> sports
                marketing agency delivering <b>first class results.</b> We
                specialize in formulating, building, and scaling strategies
                across key verticals,{" "}
                <b>generating revenue from the passion of sports.</b>
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
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
            </FadeIn>
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0 mb-4">
          <EmblaCarouselAutoScroll
            slides={projects}
            options={{ direction: "ltr", loop: true }}
            setPlayingProject={setPlayingProject}
            playingProject={playingProject}
          />
        </div>
      </div>
    </PageLayout>
  );
}
