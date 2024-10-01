import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { EmblaCarouselAutoScroll } from "@/components/sections/home/carousel-autoscroll";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "@/components/common/animations/fade-in";
import { useMedia } from "use-media";
import { EmblaCarouselMobile } from "@/components/sections/home/mobile-carousel";

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
    video: "/gifs/bplay.mp4",
    link: "/work/bplay-corazon-argento",
  },
  {
    title: "Corona",
    description: "Description 3",
    video: "/gifs/corona.mp4",
    link: "/work/la-casa-oficial",
  },
  {
    title: "Ea",
    description: "Description 3",
    video: "/gifs/ea.mp4",
    link: "/work/bplay-corazon-argento",
  },
  {
    title: "Netflix",
    description: "Description 3",
    video: "/gifs/netflix.mp4",
    link: "/work/bplay-corazon-argento",
  },
  {
    title: "Puma",
    description: "Description 3",
    video: "/gifs/puma.mp4",
    link: "/work/bplay-corazon-argento",
  },
];

export default function Home() {
  const [playingProject, setPlayingProject] = React.useState<null | number>(
    null
  );
  const ref = React.useRef<HTMLVideoElement>(null);

  const isMobile = useMedia({ maxWidth: "768px" });

  React.useEffect(() => {
    // play project video in mobile screens by default
    if (isMobile && playingProject !== null) {
      ref.current?.play();
    }
  }, []);

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
            playsInline
            ref={ref}
            src={projects[playingProject].video}
            className="w-full h-[100svh] absolute top-0 left-0 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            controls={false}
          />
        )}
      </AnimatePresence>

      {/* so we get the full screen. We dont take into account the nav */}
      <div className="h-[calc(100svh-182px)] max-h-[calc(100svh-182px)] sm:h-[calc(100vh-170px)] sm:max-h-[calc(100vh-170px)] w-full overflow-hidden flex flex-col relative">
        <div className="container">
          <div
            className={cn(
              "flex flex-col gap-6 !max-w-[520px] !text-12 uppercase leading-[1.8] mt-8 sm:mt-32 transition-all duration-300",
              {
                "text-white": playingProject !== null,
              }
            )}
          >
            <FadeIn>
              <p className="uppercase font-archivoBlack text-24 md:text-48 inline-flex items-center leading-none">
                We power
                <span className="font-masker text-yellow text-48 md:text-[72px] ml-6">
                  PASSION
                </span>
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p>
                Laugh is a space{" "}
                <b className="italic">where we connect brands and fans.</b>
                <br />
                Our passion and dedication to the world of sports define our
                existence.
                <br />
                <b>
                  We live for the thrill of the game, the roar of the crowd, and
                  the celebration of sporting achievements.
                </b>
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                Welcome to <b>Laugh,</b>
                <br />{" "}
                <b className="italic">
                  where sports is not just a passion; It&#39;s a way of Life.
                </b>
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="custom_underline">
                WE COME TO CREATE, PRODUCE, SPREAD AND <b>LAUGH</b>
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0 pb-2 lg:pb-6">
          {!isMobile ? (
            <EmblaCarouselAutoScroll
              slides={projects}
              options={{ direction: "ltr", loop: true }}
              setPlayingProject={setPlayingProject}
              playingProject={playingProject}
            />
          ) : (
            <EmblaCarouselMobile
              slides={projects}
              options={{ direction: "ltr", loop: true }}
              setPlayingProject={setPlayingProject}
              playingProject={playingProject}
            />
          )}
        </div>
      </div>
    </PageLayout>
  );
}
