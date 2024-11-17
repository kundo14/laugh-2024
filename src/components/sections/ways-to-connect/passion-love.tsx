import FadeIn from "@/components/common/animations/fade-in";
import ScrollGrow from "@/components/common/animations/glow-up-image";
import ScrollParallax from "@/components/common/animations/parallax";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";

export const PassionTeamsSection = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full min-h-[800px] h-screen max-h-[1024px] relative z-40",
          className
        )}
      >
        <div className="p-2 absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] bg-black opacity-70 z-0 rounded" />
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
              <p className="text-center font-medium text-white opacity-80 text-24 sm:text-[28px] md:text-32 lg:text-42 leading-tight max-w-max">
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
              <p className="text-center text-white text-18 sm:text-20 md:text-24 leading-tight font-extralight">
                We create exclusive passion teams for each partner,
              </p>
            </ScrollParallax>
            <ScrollParallax className="z-10" parallaxSpeed={1}>
              <p className="text-center text-white text-18 sm:text-20 md:text-24 leading-tight font-extralight mt-0">
                offering various services to enhance their interaction with
                fans.
              </p>
            </ScrollParallax>
          </div>
        </div>
      </div>
      <div className="relative container min-h-[800px] max-h-[1024px] w-full">
        <ScrollGrow className="absolute top-20 left-0">
          <div className="flex flex-col">
            <video
              src={`/gifs/passion-love/copa-america.mp4`}
              className="rounded object-cover w-[280px] sm:w-[320px] md:w-[380px] h-auto"
              autoPlay
              loop
              muted
              controls={false}
              playsInline
            />
            <p className="text-white uppercase font-archivoBlack text-32 md:text-48">
              copa américa
            </p>
          </div>
        </ScrollGrow>
        <ScrollParallax parallaxSpeed={1.2}>
          <CustomDraggable>
            <img
              src="/images/ways-to-connect/passion-love/1.png"
              alt="drag-me"
              className="w-[280px] h-auto object-cover mt-8 absolute top-[200px] left-[560px]"
              draggable={false}
            />
          </CustomDraggable>
        </ScrollParallax>
        <ScrollParallax parallaxSpeed={0.2}>
          <CustomDraggable>
            <img
              src="/images/ways-to-connect/passion-love/2.png"
              alt="drag-me"
              className="w-[200px] md:w-[320px] h-auto object-cover mt-8 absolute top-[480px] left-32"
              draggable={false}
            />
          </CustomDraggable>
        </ScrollParallax>
        <ScrollParallax parallaxSpeed={0.8}>
          <CustomDraggable>
            <img
              src="/images/ways-to-connect/passion-love/3.png"
              alt="drag-me"
              className="w-[200px] md:w-[420px] h-auto object-cover absolute top-20 right-0"
              draggable={false}
            />
          </CustomDraggable>
        </ScrollParallax>
        {/* <ScrollParallax
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
        </ScrollParallax> */}
      </div>
      <div className="container flex flex-col items-center">
        <div className="flex flex-col items-center gap-8 mt-20 max-w-[1024px]">
          <FadeIn>
            <ScrollParallax className="z-10" parallaxSpeed={0.5}>
              <p className="text-center text-white text-18 sm:text-20 md:text-24 leading-tight font-extralight">
                We create 100% dedicated teams who seamlessly integrate with
                your brand to understand who you are and what you need like a
                partner, not a supplier.
              </p>
            </ScrollParallax>
          </FadeIn>
          <FadeIn>
            <ScrollParallax className="z-10" parallaxSpeed={0.4}>
              <p className="text-center text-white text-18 sm:text-20 md:text-24 leading-tight font-extralight mt-0">
                Our vision is one where client and agency lines are blurred in
                the mutual goal of success.
              </p>
            </ScrollParallax>
          </FadeIn>
          <FadeIn>
            <ScrollParallax className="z-10" parallaxSpeed={0.6}>
              <p className="text-center text-white text-18 sm:text-20 md:text-24 leading-tight font-extralight mt-0">
                As with everything we do, our philosophy is rooted in passion:
                to cooperate, to excel, to succeed.
              </p>
            </ScrollParallax>
          </FadeIn>
        </div>

        {/* RETRO STICKERS */}
        <div className="flex justify-center lg:justify-between items-end max-w-full flex-wrap w-full flex-1 xl:max-w-[1200px] gap-4 sm:gap-6 lg:gap-12 xl:gap-20">
          <FadeIn>
            <CustomDraggable>
              <div className="flex flex-col items-center">
                <img
                  src="/images/stickers/joystick.png"
                  alt="retro-sticker-1"
                  className="w-[120px] md:w-[140px] lg:w-[200px] h-auto"
                  draggable={false}
                />
                <div className="flex flex-col items-center -mt-4">
                  <p className="text-white text-24 sm:text-32 md:text-42 uppercase leading-none font-archivoBlack">
                    building
                  </p>
                  <p className="text-white text-24 sm:text-32 md:text-42 uppercase leading-none font-masker">
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
                  className="w-[120px] md:w-[140px] lg:w-[200px] h-auto"
                  draggable={false}
                />
                <div className="flex flex-col items-center -mt-2">
                  <p className="text-white text-24 sm:text-32 md:text-42 uppercase leading-none font-archivoBlack">
                    CREATIVE &{" "}
                  </p>
                  <p className="text-white text-24 sm:text-32 md:text-42 uppercase leading-none font-masker">
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
                  className="w-[120px] md:w-[140px] lg:w-[200px] h-auto"
                  draggable={false}
                />
                <div className="flex flex-col items-center mt-3">
                  <p className="text-white text-24 sm:text-32 md:text-42 uppercase leading-none font-archivoBlack">
                    SPORTS{" "}
                  </p>
                  <p className="text-white text-24 sm:text-32 md:text-42 uppercase leading-none font-masker">
                    MANAGEMENT
                  </p>
                </div>
              </div>
            </CustomDraggable>
          </FadeIn>
        </div>

        <div className="flex flex-col container relative z-50 !mt-20">
          <p className="text-red font-masker text-48 md:text-[64px] lg:text-[80px] xl:text-[90px] leading-[0.9]">
            Fueling a fan revolution
          </p>
          <div className="flex flex-wrap justify-end sm:items-start ml-auto mt-2">
            <p className="text-white font-archivoBlack uppercase leading-none text-32 md:text-48 lg:text-[64px] xl:text-[72px]">
              Cultivating
            </p>
            <div className="relative text-white font-archivoBlack uppercase leading-none ml-6 text-32 md:text-48 lg:text-[64px] xl:text-[72px]">
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
