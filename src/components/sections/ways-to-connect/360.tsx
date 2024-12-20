import FadeIn from "@/components/common/animations/fade-in";
import ScrollParallax from "@/components/common/animations/parallax";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";
import Counters from "../verticals/360/counters";

export const Section360 = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full min-h-[800px] h-screen max-h-[1024px] relative z-40",
          className
        )}
      >
        <div className="sm:p-2 absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-0 left-0 w-full h-full sm:top-2 sm:left-2 sm:w-[calc(100%-16px)] sm:h-[calc(100%-16px)] bg-white opacity-50 z-0 rounded" />
          <video
            src={`/gifs/360/cover.mp4`}
            className="rounded object-cover w-full h-full"
            autoPlay
            loop
            muted
            controls={false}
            playsInline
          />
        </div>
        <div className="mx-auto px-4 items-center max-w-[1200px] flex flex-col gap-8 mt-32 sm:mt-20 lg:mt-28 xl:mt-32">
          <FadeIn className="z-10">
            <img
              src="/images/logos/360.svg"
              alt="studios"
              className="w-28 sm:w-32 md:w-40 h-auto"
            />
          </FadeIn>
          <div className="flex flex-col items-center">
            <ScrollParallax className="z-10" parallaxSpeed={0.6}>
              <p className="text-center text-black text-24 sm:text-[28px] md:text-32 lg:text-42 leading-none max-w-max">
                Where incredible
              </p>
            </ScrollParallax>
            <ScrollParallax className="z-10" parallaxSpeed={0.6}>
              <p className="text-center text-black text-24 sm:text-[28px] md:text-32 lg:text-42 leading-none max-w-max">
                stories meet
              </p>
            </ScrollParallax>
            <ScrollParallax className="z-10" parallaxSpeed={0.8}>
              <div className="relative max-w-max">
                <p className="text-center text-black text-24 sm:text-[28px] md:text-32 lg:text-42 leading-none font-black">
                  their perfect{" "}
                  <span className="font-masker text-yellow text-[28px] md:text-42 lg:text-48">
                    fans
                  </span>
                </p>
                <CustomDraggable>
                  <img
                    src="/images/scratches/yellow-curl-underline.svg"
                    alt="drag-me"
                    className="absolute top-[120%] left-[15%] w-[70%]"
                    draggable={false}
                  />
                </CustomDraggable>
              </div>
            </ScrollParallax>
          </div>
          <ScrollParallax className="z-10" parallaxSpeed={1}>
            <p className="text-center text-black text-18 sm:text-20 font-playfairDisplay leading-tight mt-24 max-w-[420px]">
              Our DNA is to create impactful 360 campaigns which reach, connect
              & resonate with fans around the world
            </p>
          </ScrollParallax>
        </div>
      </div>

      {/* 360 SECOND SECTION */}
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full relative z-40 mt-2 sm:mt-0",
          className
        )}
      >
        <div className="sm:px-2 absolute top-0 left-0 w-full h-full z-0">
          <img
            src={`/images/textures/paper.jpg`}
            className="rounded object-cover w-full h-full"
            alt="white paper"
          />
        </div>
        <div className="container !py-20 flex flex-col items-center z-50 relative">
          <ScrollParallax className="z-10" parallaxSpeed={0.2}>
            <p className="text-yellow text-center uppercase text-24 md:text-32 lg:text-42 xl:text-48 leading-none font-black">
              legends, influencers & communities
            </p>
          </ScrollParallax>
          <ScrollParallax className="z-10" parallaxSpeed={0.6}>
            <p className="text-black font-masker text-42 sm:text-[56px] md:text-[64px] xl:text-[72px] leading-none">
              network
            </p>
          </ScrollParallax>
          <Counters className="my-2" />

          <div className="h-[720px] relative w-full">
            <ScrollParallax parallaxSpeed={0.6}>
              <video
                src={`/gifs/360/enzo-marco.mp4`}
                className="absolute top-20 left-0 rounded object-cover w-[50vw] sm:w-[320px] lg:w-[420px] xl:w-[520px] h-auto"
                autoPlay
                loop
                muted
                controls={false}
                playsInline
              />
            </ScrollParallax>
            <ScrollParallax parallaxSpeed={0.8}>
              <video
                src={`/gifs/360/tevez-marco.mp4`}
                className="absolute top-[220px] sm:top-32 right-0 rounded object-cover w-[50vw] sm:w-[280px] xl:w-[420px] h-auto"
                autoPlay
                loop
                muted
                controls={false}
                playsInline
              />
            </ScrollParallax>
            <ScrollParallax parallaxSpeed={1}>
              <video
                src={`/gifs/360/zico-marco.mp4`}
                className="absolute top-[440px] lg:top-[560px] right-2 sm:right-[30%] rounded object-cover w-[40vw] sm:w-[220px] xl:w-[320px] h-auto"
                autoPlay
                loop
                muted
                controls={false}
                playsInline
              />
            </ScrollParallax>
            <ScrollParallax parallaxSpeed={0.2}>
              <img
                src="/images/ways-to-connect/360/1.png"
                alt="drag-me"
                className="absolute top-[220px] lg:top-[320px] left-0 sm:left-10 w-[30vw] xl:w-[280px]"
                draggable={false}
              />
            </ScrollParallax>
            <ScrollParallax parallaxSpeed={2}>
              <img
                src="/images/ways-to-connect/360/2.png"
                alt="drag-me"
                className="absolute top-[580px] left-10 sm:left-48 lg:left-80 w-[180px] xl:w-[220px]"
                draggable={false}
              />
            </ScrollParallax>
            <ScrollParallax parallaxSpeed={0}>
              <img
                src="/images/ways-to-connect/360/3.png"
                alt="drag-me"
                className="absolute hidden lg:flex top-12 right-[35%] lg:right-[30%] w-[260px] xl:w-[320px]"
                draggable={false}
              />
            </ScrollParallax>
            <ScrollParallax parallaxSpeed={0.8}>
              <img
                src="/images/ways-to-connect/360/4.png"
                alt="drag-me"
                className="absolute top-[560px] sm:top-[380px] right-0 w-[20vw] sm:w-[220px] xl:w-[280px]"
                draggable={false}
              />
            </ScrollParallax>
            <ScrollParallax parallaxSpeed={0.1}>
              <img
                src="/images/ways-to-connect/360/5.png"
                alt="drag-me"
                className="absolute hidden lg:flex top-64 right-[40%] w-[160px] xl:w-[220px]"
                draggable={false}
              />
            </ScrollParallax>
          </div>
          <div className="flex flex-col items-center gap-2 mt-20">
            <FadeIn>
              <p className="text-black text-24 sm:text-32 md:text-42 lg:text-48 leading-none">
                Content is <span className="font-playfairDisplay">king</span>
              </p>
            </FadeIn>
            <ScrollParallax className="z-10" parallaxSpeed={0.2}>
              <p className="text-black font-bold italic text-24 sm:text-32 md:text-42 lg:text-48 leading-none">
                Distribution is
                <span className="ml-4 scratch">queen.</span>
              </p>
            </ScrollParallax>
          </div>
        </div>
      </div>
    </>
  );
};
