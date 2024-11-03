import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "@/components/common/animations/fade-in";
import { VideoPlayer } from "@/components/common/youtube-player";
import { CustomDraggable } from "@/components/common/draggable";

export default function Home() {
  const ref = React.useRef<HTMLVideoElement>(null);

  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Laugh | share laughs, share sports",
      }}
      withoutBackgroundTexture
      isPlaying={true}
      textWhite
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-texture"></div>
      <AnimatePresence>
        <motion.div
          className="w-full h-[100svh] absolute top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover absolute top-0 left-0"
            ref={ref}
            src={"/gifs/tvs.mp4"}
            controls={false}
          />
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70" />
        </motion.div>
      </AnimatePresence>

      {/* so we get the full screen. We dont take into account the nav */}
      <div className="flex flex-col relative">
        <div className="container">
          <div
            className={cn(
              "flex flex-col items-center font-extralight mx-auto gap-1 leading-[1.8] mt-40 transition-all duration-300 text-white"
            )}
          >
            <FadeIn>
              <p className="font-archivo text-center text-24 md:text-32 inline-flex items-center leading-none">
                We are <b className="ml-2">fans</b>.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="font-archivo text-center text-24 md:text-32 inline-flex items-center leading-none">
                We are <b className="ml-2">passion</b>.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="font-archivo text-center text-24 md:text-32 inline-flex items-center leading-none">
                We are a
                <span className="text-yellow italic ml-2">
                  creative power haus,
                </span>
              </p>
            </FadeIn>
            <FadeIn>
              <p className="font-playfairDisplay text-center text-24 md:text-32 inline-flex items-center leading-none">
                Where ideas come to life.
              </p>
            </FadeIn>
          </div>
          <div className="flex flex-col mx-auto mt-40 items-center">
            <CustomDraggable>
              <img
                src={"/images/scratches/gold-line-arrow.svg"}
                alt="sticker"
                className="w-[64px] sm:w-[72px] h-auto"
                draggable={false}
              />
            </CustomDraggable>
            <FadeIn
              delay={0.3}
              className="flex w-full xl:w-[1144px] mt-12 sm:mt-20"
            >
              <VideoPlayer
                video="https://www.youtube.com/watch?v=7w4n_gKeFe4"
                className="rounded overflow-hidden border border-solid border-gray-800"
              />
            </FadeIn>
          </div>
        </div>
        {/* <div className="w-full absolute bottom-0 left-0 pb-2 lg:pb-6">
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
        </div> */}
      </div>
    </PageLayout>
  );
}
