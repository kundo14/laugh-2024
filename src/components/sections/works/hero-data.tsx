import * as React from "react";
import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";
import { WorkTemplateProps } from "@/models";
import { renderBody } from "@/lib/contentful/renderer";
import FadeIn from "@/components/common/animations/fade-in";
import { useRouter } from "next/router";

export const WorkHeroData = ({
  work,
  textWhite,
  className,
}: {
  work: WorkTemplateProps;
  textWhite?: boolean;
  className?: string;
}) => {
  const router = useRouter();
  const { pathname } = router;

  const stickers = React.useMemo(() => {
    const possibleImages = [
      "/images/stickers/botines.png",
      "/images/stickers/joystick.png",
      "/images/stickers/pelota.png",
      "/images/stickers/tv.png",
      "/images/stickers/camara.png",
      "/images/stickers/cervezas.png",
      "/images/stickers/copa-america.png",
      "/images/stickers/libertadores.png",
      "/images/stickers/mundial.png",
      "/images/stickers/sifon.png",
      "/images/stickers/maradona.png",
    ];

    // pick 2 randoms that shound't be the same
    const randomImage1 =
      possibleImages[Math.floor(Math.random() * possibleImages.length)];

    const randomImage2 = possibleImages.filter(
      (image) => image !== randomImage1
    )[Math.floor(Math.random() * (possibleImages.length - 1))];

    return {
      first: randomImage1,
      second: randomImage2,
    };
  }, [pathname]);

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row gap-12 sm:gap-16 lg:gap-24 xl:gap-32 items-start container relative",
        className
      )}
    >
      <div className="relative flex items-start justify-between sm:flex-col w-full sm:w-max min-w-[140px]">
        {/* STICKERS */}
        <CustomDraggable>
          <img
            src={stickers.first}
            alt="sticker"
            className="hidden md:flex w-[160px] sm:w-[180px] md:w-[220px] h-auto absolute top-[150%] left-0 z-40"
            draggable={false}
          />
        </CustomDraggable>

        <div className="flex flex-col border-t border-gray-500 pt-4">
          <p className="uppercase text-12 text-gray-500 mb-3">year</p>
          <p className="uppercase text-12 text-gray-500">
            {work.date.start} - {work.date.end ? work.date.end : "present"}
          </p>
        </div>
        <div className="flex flex-col border-t border-gray-500 pt-4 sm:mt-12">
          <FadeIn delay={0.3}>
            <div className="mb-3 relative max-w-max">
              <p className="uppercase text-12 text-gray-500">deliverables</p>
              <CustomDraggable>
                <img
                  src="/images/scratches/yellow-scratch.svg"
                  className="absolute -left-[30%] -bottom-[45%] min-w-[160%]"
                  draggable={false}
                />
              </CustomDraggable>
            </div>
          </FadeIn>
          <ul className="text-12 text-gray-500">
            {work.deliverables.map((deliverable, idx) => (
              <FadeIn key={deliverable} delay={idx * 0.15}>
                <li className="uppercase leading-loose" key={deliverable}>
                  {deliverable}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col pl-4 sm:pl-8 lg:pl-12 border-l border-gray-500 max-w-[920px] pb-8 sm:pb-16 md:pb-32 lg:pb-44">
        <FadeIn>
          <div className="text-[38px] sm:text-42 lg:text-48 leading-[1.1] mb-6 sm:mb-8 md:mb-12 lg:mb-14 uppercase">
            {/* <Markdown remarkPlugins={[remarkGfm]}>{work.heroTitle}</Markdown> */}
            {renderBody(work.heroTitle)}
          </div>
        </FadeIn>
        {work.heroDescription && (
          <FadeIn delay={0.3}>
            <div
              className={cn("text-16 leading-[1.8]", {
                "text-gray-400": textWhite,
                "text-gray-800": !textWhite,
              })}
            >
              {renderBody(work.heroDescription)}
            </div>
          </FadeIn>
        )}
      </div>
      <CustomDraggable>
        <img
          src={stickers.second}
          alt="sticker"
          className="w-[160px] sm:w-[180px] md:w-[220px] h-auto absolute bottom-8 right-64 z-40"
          draggable={false}
        />
      </CustomDraggable>
      <CustomDraggable>
        <img
          src="/images/scratches/yellow-arrow-2.svg"
          className="absolute -bottom-12 sm:bottom-0 md:bottom-20 right-0"
          draggable={false}
        />
      </CustomDraggable>
    </div>
  );
};
