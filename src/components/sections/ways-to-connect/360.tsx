import FadeIn from "@/components/common/animations/fade-in";
import ScrollParallax from "@/components/common/animations/parallax";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";

export const Section360 = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full min-h-[800px] h-screen max-h-[1024px] relative z-40",
          className
        )}
      >
        <div className="p-2 absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] bg-white opacity-50 z-0 rounded" />
          <video
            src={`/gifs/360/cover.mp4`}
            className="rounded object-cover w-full h-full"
            autoPlay
            loop
            muted
            controls={false}
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
            <p className="text-center text-black text-18 sm:text-20 md:text-24 leading-tight mt-24 max-w-[420px]">
              Our DNA is to create impactful 360 campaigns That reach, connect &
              interact with all worldwide fans
            </p>
          </ScrollParallax>
        </div>
      </div>

      {/* 360 SECOND SECTION */}
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full min-h-[800px] h-screen max-h-[1024px] relative z-40",
          className
        )}
      >
        <div className="px-2 absolute top-0 left-0 w-full h-full z-0">
          <img
            src={`/images/textures/paper.jpg`}
            className="rounded object-cover w-full h-full"
            alt="white paper"
          />
        </div>
      </div>
    </>
  );
};
