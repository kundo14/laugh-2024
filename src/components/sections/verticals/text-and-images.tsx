import * as React from "react";
import FadeIn from "@/components/common/fadeIn";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMedia } from "use-media";
import { useRouter } from "next/router";
import { CustomDraggable } from "@/components/common/draggable";

export const TextAndImages = ({
  images,
  markdown,
  color,
}: {
  images: string[];
  markdown: string;
  color: "red" | "gold" | "yellow";
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
    <div className="relative flex flex-col-reverse md:flex-row items-start gap-16">
      {/* STICKERS */}
      <CustomDraggable>
        <img
          src={stickers.first}
          alt="sticker"
          className="w-[160px] sm:w-[180px] md:w-[220px] h-auto absolute -top-20 md:top-16 right-0 md:right-auto md:-left-20 z-40"
          draggable={false}
        />
      </CustomDraggable>

      <div className="flex flex-col gap-2 w-full max-w-[640px] z-10">
        {images.map((image, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <img
              src={image}
              alt={`vertical - ${index}`}
              className="w-full h-auto"
            />
          </FadeIn>
        ))}
      </div>
      <div
        ref={ref}
        className="sticky top-16 flex flex-col py-16 md:py-24 flex-1 transition-all duration-300 min-w-[320px]"
      >
        <CustomDraggable>
          <img
            src={stickers.second}
            alt="sticker"
            className="w-[160px] sm:w-[180px] md:w-[220px] h-auto absolute -bottom-32 right-32 md:right-0 z-40"
            draggable={false}
          />
        </CustomDraggable>
        <Markdown
          remarkPlugins={[remarkGfm]}
          className={"leading-relaxed text-16 text-black font-archivo"}
          components={{
            p: ({ children }) => (
              <FadeIn>
                <p className="mb-4 text-gray-600">{children}</p>
              </FadeIn>
            ),
            strong: ({ children }) => (
              <b className="font-bold !text-black">{children}</b>
            ),
          }}
        >
          {markdown}
        </Markdown>
        <FadeIn delay={0.3}>
          <Link
            href="/"
            className="inline-flex items-center uppercase text-14 mt-8 group relative max-w-max"
          >
            Contact us
            <ArrowTopRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-all duration-150" />
            <img
              src={
                color === "red"
                  ? "/images/scratches/red-underline.svg"
                  : color === "gold"
                  ? "/images/scratches/gold-underline.svg"
                  : "/images/scratches/yellow-curl-underline.svg"
              }
              alt="underline clients"
              className="w-full h-auto absolute -bottom-6 left-0"
              draggable={false}
            />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};
