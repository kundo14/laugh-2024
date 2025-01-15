import FadeIn from "@/components/common/animations/fade-in";
import ScrollParallax from "@/components/common/animations/parallax";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";
import { WorkPreview } from "@/models";
import { ScrollableWorks } from "../work/scrollable-works";

export const StudiosSection = ({
  className,
  works,
}: {
  className?: string;
  works: WorkPreview[];
}) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full min-h-[800px] h-screen max-h-[1024px] relative",
          className
        )}
      >
        <div className="sm:p-2 absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-0 left-0 w-full h-full sm:top-2 sm:left-2 sm:w-[calc(100%-16px)] sm:h-[calc(100%-16px)] bg-black opacity-70 z-0 rounded" />
          <video
            src={`/gifs/ways-to-connect.mp4`}
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
              src="/images/logos/studios-gold.svg"
              alt="studios"
              className="w-40 md:w-48 lg:w-56 xl:w-64"
            />
          </FadeIn>
          <div className="flex flex-col items-center">
            <ScrollParallax className="z-10" parallaxSpeed={0.6}>
              <p className="text-center text-white opacity-80 text-24 sm:text-[28px] md:text-32 lg:text-42 leading-tight max-w-max">
                Sparking creativity
              </p>
            </ScrollParallax>
            <ScrollParallax className="z-10" parallaxSpeed={0.8}>
              <div className="relative max-w-max">
                <p className="text-center text-white opacity-80 text-24 sm:text-[28px] md:text-32 lg:text-42 leading-tight font-bold italic">
                  Blowing minds.
                </p>
                <CustomDraggable>
                  <img
                    src="/images/scratches/gold-underline.svg"
                    alt="drag-me"
                    className="absolute top-[150%] left-[15%] w-[70%]"
                    draggable={false}
                  />
                </CustomDraggable>
              </div>
            </ScrollParallax>
          </div>
          <ScrollParallax className="z-10" parallaxSpeed={1}>
            <p className="text-center text-white text-18 sm:text-20 leading-tight font-playfairDisplay font-extralight mt-24">
              In the exciting world of sport, we&apos;re the innovative
              thinkers, making campaigns that surprise and delight. <br />
              With passion driving us, we&apos;re the creators of truly
              compelling stories.
            </p>
          </ScrollParallax>
        </div>
      </div>

      {/* SECOND SECTION OF STUDIOS */}

      <div
        className={cn(
          "flex flex-col items-center w-full min-h-[800px] h-screen max-h-[1024px] relative z-40"
        )}
      >
        <div className="sm:px-2 absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-0 left-0 w-full sm:top-0 sm:left-2 sm:w-[calc(100%-16px)] h-[100%] bg-black opacity-70 z-0 rounded" />
          <img
            src="/images/ways-to-connect/studios/cover.webp"
            alt="studios 2"
            className="rounded object-cover w-full h-full"
          />
        </div>
        <div className="container flex flex-col h-full justify-between relative !py-16">
          <ScrollParallax className="absolute top-[220px] sm:top-[180px] right-2 sm:right-0">
            <video
              src={`/gifs/studios/adidas-marco.mp4`}
              className="rounded object-cover lg:w-[260px] xl:w-[320px] h-auto"
              autoPlay
              loop
              muted
              controls={false}
              playsInline
            />
          </ScrollParallax>
          <ScrollParallax
            className="absolute top-[420px] sm:top-[460px] right-8 sm:right-[12%] z-10"
            parallaxSpeed={2}
          >
            <video
              src={`/gifs/studios/criticadores-marco.mp4`}
              className="rounded object-cover lg:w-[320px] xl:w-[420px] h-auto"
              autoPlay
              loop
              muted
              controls={false}
              playsInline
            />
          </ScrollParallax>
          <ScrollParallax
            className="absolute top-[520px] sm:top-[380px] left-2 sm:left-[15%]"
            parallaxSpeed={0.8}
          >
            <video
              src={`/gifs/studios/la-casa-marco.mp4`}
              className="rounded object-cover lg:w-[420px] xl:w-[520px] h-auto"
              autoPlay
              loop
              muted
              controls={false}
              playsInline
            />
          </ScrollParallax>
          <ScrollParallax
            className="absolute top-[280px] left-4"
            parallaxSpeed={2.8}
          >
            <CustomDraggable>
              <img
                src="/images/ways-to-connect/studios/1.png"
                alt="studios 2"
                draggable={false}
                className="rounded object-cover lg:w-[180px] xl:w-[240px] h-auto"
              />
            </CustomDraggable>
          </ScrollParallax>
          <div className="flex flex-col items-center">
            <CustomDraggable>
              <img
                src="/images/scratches/gold-star.svg"
                alt="drag-me-star"
                className="absolute top-24 right-12 w-10 sm:w-12 lg:w-16 h-auto"
                draggable={false}
              />
            </CustomDraggable>
            <ScrollParallax className="z-10" parallaxSpeed={0.2}>
              <p className="text-white font-playfairDisplay text-center mx-auto text-20 md:text-24 lg:text-32 xl:text-42 italic">
                crafting sports epics
              </p>
            </ScrollParallax>
            <div className="flex mt-12">
              <ScrollParallax className="z-10" parallaxSpeed={0.6}>
                <p className="text-gold font-masker text-48 md:text-[64px] lg:text-[80px] xl:text-[120px] leading-none z-10">
                  frame
                </p>
              </ScrollParallax>
              <ScrollParallax className="z-10" parallaxSpeed={0.2}>
                <p className="text-wrap text-white font-black uppercase text-32 md:text-42 xl:text-[56px] leading-none mt-4 md:mt-8 lg:mt-12 xl:mt-16 -ml-10">
                  by frame
                </p>
              </ScrollParallax>
            </div>
          </div>
          <div className="flex ml-auto lg:pb-8">
            <FadeIn className="text-white text-32  md:text-48 xl:text-[64px]">
              <span className="font-playfairDisplay">story </span>
              <div className="relative max-w-max inline-flex">
                <span className="font-playfairDisplay">
                  by<b className="font-playfairDisplay"> story</b>
                </span>
                <CustomDraggable>
                  <img
                    src="/images/scratches/gold-underline-2.svg"
                    alt="drag-me-star"
                    className="absolute top-[95%] left-0 w-full h-auto"
                    draggable={false}
                  />
                </CustomDraggable>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* WORKS */}
      <div className="flex flex-col">
        <FadeIn className="!py-16 z-40 relative overflow-x-hidden mt-12">
          <ScrollableWorks works={works} title="Works" textWhite />
        </FadeIn>
        {/* <div className="flex flex-col items-center mx-auto mt-8 sm:mt-2">
          <ScrollParallax className="z-10" parallaxSpeed={0.7}>
            <p className="text-gold font-masker text-32 md:text-[56px] lg:text-[64px] leading-none z-10">
              we come to
            </p>
          </ScrollParallax>
          <ScrollParallax className="z-10" parallaxSpeed={0.6}>
            <p className="text-wrap text-center text-white font-black uppercase text-32 md:text-42 xl:text-[56px] leading-tight sm:leading-[1.1]">
              create, produce
            </p>
          </ScrollParallax>
          <ScrollParallax className="z-10" parallaxSpeed={1}>
            <p className="text-wrap text-center text-white font-black uppercase text-32 md:text-42 xl:text-[56px] leading-tight sm:leading-[1.1]">
              spread and laugh
            </p>
          </ScrollParallax>
        </div> */}
      </div>
    </>
  );
};
