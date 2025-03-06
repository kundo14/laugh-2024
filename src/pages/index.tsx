import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "@/components/common/animations/fade-in";
import { VideoPlayer } from "@/components/common/youtube-player";
import ScrollParallax from "@/components/common/animations/parallax";
import ScrollGrow from "@/components/common/animations/glow-up-image";
import { WorkQuote } from "@/components/sections/work/quote";
import Link from "next/link";

export default function Home() {
  const ref = React.useRef<HTMLVideoElement>(null);
  // Scroll to top on route change
  // React.useEffect(() => {
  //   console.log("r-c");
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Laugh | We power passion",
      }}
      withoutBackgroundTexture
      isPlaying={true}
      textWhite
      footerWhite
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-texture"></div>
      <AnimatePresence>
        <motion.div
          className="w-full h-[100svh] md:h-[200svh] max-h-[1800px] absolute top-0 left-0"
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
            // we should preload this cover video
            preload="auto"
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
              <p className="font-archivo text-center text-18 sm:text-20 md:text-24 inline-flex items-center leading-none">
                We are <b className="ml-2">fans</b>.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="font-archivo text-center text-18 sm:text-20 md:text-24 inline-flex items-center leading-none">
                We are <b className="ml-2">passion</b>.
              </p>
            </FadeIn>
            <FadeIn>
              <p className="font-archivo text-center text-18 sm:text-20 md:text-24 inline-flex items-center leading-none">
                We are a{" "}
                <span className="text-gold italic ml-2">
                  creative power haus,
                </span>
              </p>
            </FadeIn>
            <FadeIn>
              <p className="font-playfairDisplay text-center text-18 sm:text-20 md:text-24 inline-flex items-center leading-none">
                Where ideas come to life.
              </p>
            </FadeIn>
          </div>
          <div className="flex flex-col mx-auto mt-32 sm:mt-56 md:mt-72 items-center">
            {/* <CustomDraggable>
              <img
                src={"/images/scratches/gold-line-arrow.svg"}
                alt="sticker"
                className="w-[64px] sm:w-[72px] h-auto"
                draggable={false}
              />
            </CustomDraggable> */}
            <ScrollParallax>
              <p className="text-[40px] sm:text-48 md:text-[80px] xl:text-[120px] uppercase font-archivo font-black text-gold leading-none">
                our show<span className="italic">reel</span>
              </p>
            </ScrollParallax>
            <FadeIn
              delay={0.3}
              className="flex w-full xl:w-[1144px] mt-6 sm:mt-12"
            >
              <VideoPlayer
                video="https://youtu.be/lgi3nZ0fhmI?si=urZQ1ePsJq8X8vEm"
                className="rounded overflow-hidden border border-solid border-gray-800"
              />
            </FadeIn>
            <ScrollGrow>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="mt-24 sm:mt-32 md:mt-40 w-full max-w-[640px]"
                src={"/gifs/home-gif.mp4"}
                controls={false}
              />
            </ScrollGrow>
          </div>
        </div>
        <WorkQuote className="mt-32" />
        <div className="flex items-center gap-4 mt-12 md:mt-20 mx-auto">
          <Link
            href="/work/all"
            aria-label="contact us"
            className="max-w-max text-gold text-18 sm:text-20 px-6 font-playfairDisplay transition-all duration-300 hover:text-white"
          >
            All our work
          </Link>
          <div className="h-[32px] w-px bg-gold" />
          <Link
            href="/contact"
            aria-label="contact us"
            className="max-w-max text-gold text-18 sm:text-20 px-6 font-playfairDisplay transition-all duration-300 hover:text-white"
          >
            Get in touch
          </Link>
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
