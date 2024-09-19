import * as React from "react";

import { CustomDraggable } from "@/components/common/draggable";
import { WorkPreview } from "@/components/common/work-preview";
import { cn } from "@/lib/cn";
import { WorkPreview as WorkPreviewProps } from "@/models";
import useMedia from "use-media";
import FadeIn from "@/components/common/fadeIn";
import { useRouter } from "next/router";
import ScrollGrow from "@/components/common/glow-up-image";

export const FeaturedWorks = ({
  works,
  className,
}: {
  works: WorkPreviewProps[];
  className?: string;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isMobile = useMedia({ maxWidth: "768px" });
  const router = useRouter();

  const { pathname } = router;

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current;
        const top = element.getBoundingClientRect().top;
        if (top <= 130) {
          element.style.opacity = "0.4";
        } else {
          element.style.opacity = "1";
        }
      }
    };

    if (!isMobile) return;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const stickers = React.useMemo(() => {
    const possibleImages = [
      "/images/stickers/botines.png",
      "/images/stickers/pelota.png",
      "/images/stickers/pinguino.png",
      "/images/stickers/maradona.png",
      "/images/stickers/colombia.png",
      "/images/stickers/argentina.png",
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
      id="featured"
      className={cn(
        "bg-black py-20 sm:py-28 md:py-32 w-full relative",
        className
      )}
    >
      {/* STICKERS */}
      <CustomDraggable>
        <img
          src={stickers.first}
          alt="sticker"
          className="hidden md:flex w-[160px] sm:w-[180px] md:w-[220px] h-auto absolute top-[420px] left-12"
          draggable={false}
        />
      </CustomDraggable>
      <CustomDraggable>
        <img
          src={stickers.second}
          alt="sticker"
          className="hidden md:flex w-[160px] sm:w-[180px] md:w-[220px] h-auto absolute top-[70%] left-32 lg:left-64"
          draggable={false}
        />
      </CustomDraggable>
      <div className="container flex flex-col md:flex-row items-start justify-between md:gap-12 lg:gap-20 xl:gap-32">
        <div
          ref={ref}
          className="flex flex-col sticky top-32 w-full md:max-w-[320px] lg:max-w-[420px] xl:max-w-[500px]"
        >
          <CustomDraggable>
            <img
              src="/images/scratches/yellow-arrow.svg"
              alt="yellow arrow"
              className="absolute -top-10 md:top-auto md:-bottom-32 lg:-bottom-44 right-0 w-[44px] sm:w-[80px] h-auto"
              draggable={false}
            />
          </CustomDraggable>
          <FadeIn>
            <p className="text-16 uppercase text-yellow mb-8">
              [Featured Works]
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-gray-300 text-12 uppercase leading-[1.8]">
              Lorem ipsum dolor sit amet consectetur. Maecenas adipiscing tellus
              non nisi aliquet et diam cursus. Sem quis scelerisque interdum
              turpis placerat.
            </p>
          </FadeIn>
        </div>
        <div className="flex flex-col gap-12 xl:gap-20 flex-1 z-10 mt-12 pb-40 md:pb-0 md:mt-0">
          {works.map((work, index) => (
            <ScrollGrow key={index} delay={index * 0.1}>
              <WorkPreview variant="dark" work={work} size="large" />
            </ScrollGrow>
          ))}
        </div>
      </div>
    </div>
  );
};
