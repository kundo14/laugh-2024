import FadeIn from "@/components/common/animations/fade-in";
import ScrollParallax from "@/components/common/animations/parallax";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";
import { NovibetPoster } from "./posters/novibet";
import { EaFcPoster } from "./posters/eafc";
import { CopaAmericaPoster } from "./posters/copa-america";
import { BplayPoster } from "./posters/bplay";

export const PassionTeamsSection = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full min-h-[800px] h-screen max-h-[1024px] relative z-40",
          className
        )}
      >
        <div className="sm:p-2 absolute top-0 left-0 w-full h-full z-0 mt-2 sm:mt-0">
          <div className="absolute top-0 left-0 w-full h-full sm:top-2 sm:left-2 sm:w-[calc(100%-16px)] sm:h-[calc(100%-16px)] bg-black opacity-70 z-0 rounded" />
          <video
            src={`/gifs/passion-love/cover.mp4`}
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
              src="/images/logos/passion-teams-vertical.svg"
              alt="studios"
              className="w-40 md:w-48 lg:w-56 xl:w-64"
            />
          </FadeIn>
          <div className="flex flex-col items-center mt-12">
            <ScrollParallax className="z-10" parallaxSpeed={0.6}>
              <p className="text-center font-playfairDisplay font-medium text-white opacity-80 text-24 sm:text-[28px] md:text-32 leading-tight max-w-max">
                We build <i>engaged</i> communities
              </p>
            </ScrollParallax>
            <CustomDraggable>
              <img
                src="/images/scratches/red-underline-2.svg"
                alt="drag-me"
                className="w-full max-w-[640px] object-cover mt-8"
                draggable={false}
              />
            </CustomDraggable>
          </div>
          <div className="flex flex-col items-center mt-20">
            <ScrollParallax className="z-10" parallaxSpeed={1}>
              <p className="text-center text-white text-18 sm:text-20 font-playfairDisplay leading-tight font-extralight max-w-[820px]">
                We create 100% dedicated teams who seamlessly integrate with
                your brand to understand who you are and what you need like a
                partner, not a supplier.
              </p>
            </ScrollParallax>
          </div>
        </div>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 !pt-12 container lg:min-h-[800px] lg:max-h-[1024px] w-full">
        <CopaAmericaPoster className="lg:absolute top-20 left-0" />

        {/* EA FC */}
        <EaFcPoster className="flex flex-col items-end lg:absolute top-24 lg:left-[380px] xl:left-[460px]" />

        {/* NOVIBET */}
        <NovibetPoster className="lg:absolute top-[480px] left-0" />

        {/* BPLAY */}
        <BplayPoster className="lg:absolute top-20 right-0" />
      </div>
      <div className="container flex flex-col items-center">
        <div className="flex flex-col items-center gap-8 mt-20 max-w-[1024px]">
          <FadeIn>
            <ScrollParallax className="z-10" parallaxSpeed={0.4}>
              <p className="text-center text-white text-16 sm:text-18 md:text-24 leading-tight font-extralight mt-0">
                Our vision is one where client and agency lines are blurred in
                the mutual goal of success.
              </p>
            </ScrollParallax>
          </FadeIn>
          <FadeIn>
            <ScrollParallax className="z-10" parallaxSpeed={0.6}>
              <p className="text-center text-white text-16 sm:text-18 md:text-24 leading-tight font-extralight mt-0">
                As with everything we do, our philosophy is rooted in passion:
                to cooperate, to excel, to succeed.
              </p>
            </ScrollParallax>
          </FadeIn>
        </div>

        {/* RETRO STICKERS */}
        <div className="flex justify-center lg:justify-between items-end flex-wrap w-full flex-1 max-w-max gap-4 sm:gap-6 lg:gap-16 xl:gap-32">
          <FadeIn>
            <CustomDraggable>
              <div className="flex flex-col items-center">
                <img
                  src="/images/stickers/joystick.png"
                  alt="retro-sticker-1"
                  className="w-[80px] md:w-[100px] lg:w-[120px] h-auto"
                  draggable={false}
                />
                <div className="flex flex-col items-center -mt-2">
                  <p className="text-white text-18 sm:text-24 md:text-28 uppercase leading-[1.15] font-archivoBlack">
                    building
                  </p>
                  <p className="text-white text-18 sm:text-24 md:text-28 uppercase leading-[1.15] font-masker">
                    communities
                  </p>
                </div>
              </div>
            </CustomDraggable>
          </FadeIn>
          <FadeIn>
            <CustomDraggable>
              <div className="flex flex-col items-center">
                <img
                  src="/images/stickers/tv.png"
                  alt="retro-sticker-1"
                  className="w-[80px] md:w-[100px] lg:w-[120px] h-auto"
                  draggable={false}
                />
                <div className="flex flex-col items-center">
                  <p className="text-white text-18 sm:text-24 md:text-28 uppercase leading-[1.15] font-archivoBlack">
                    CREATIVE &{" "}
                  </p>
                  <p className="text-white text-18 sm:text-24 md:text-28 uppercase leading-[1.15] font-masker">
                    STRATEGY
                  </p>
                </div>
              </div>
            </CustomDraggable>
          </FadeIn>
          <FadeIn>
            <CustomDraggable>
              <div className="flex flex-col items-center pr-2">
                <img
                  src="/images/stickers/libertadores.png"
                  alt="retro-sticker-1"
                  className="w-[80px] md:w-[100px] lg:w-[120px] h-auto"
                  draggable={false}
                />
                <div className="flex flex-col items-center mt-3">
                  <p className="text-white text-18 sm:text-24 md:text-28 uppercase leading-[1.15] font-archivoBlack">
                    SPORTS{" "}
                  </p>
                  <p className="text-white text-18 sm:text-24 md:text-28 uppercase leading-[1.15] font-masker">
                    MANAGEMENT
                  </p>
                </div>
              </div>
            </CustomDraggable>
          </FadeIn>
        </div>

        <div className="flex flex-col container relative z-50 !mt-20">
          <ScrollParallax className="text-red font-playfairDisplay text-48 md:text-[64px] leading-[0.9]">
            Fueling a fan revolution
          </ScrollParallax>
          <div className="flex flex-wrap justify-end sm:items-start ml-auto -mt-2">
            <p className="text-white font-archivoBlack uppercase leading-none text-32 md:text-48 lg:text-[64px]">
              Cultivating
            </p>
            <div className="relative text-white font-archivoBlack uppercase leading-none ml-6 text-32 md:text-48 lg:text-[64px]">
              Fandoms.
              <CustomDraggable>
                <img
                  src="/images/scratches/red-underline-2.svg"
                  alt="drag-me"
                  className="absolute top-[100%] left-[-5%] min-w-[110%]"
                  draggable={false}
                />
              </CustomDraggable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
