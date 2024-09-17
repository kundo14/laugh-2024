import * as React from "react";
import FadeIn from "@/components/common/fadeIn";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMedia } from "use-media";

export const TextAndImages = ({
  images,
  markdown,
}: {
  images: string[];
  markdown: string;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isMobile = useMedia({ maxWidth: "768px" });

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

  return (
    <div className="flex flex-col-reverse md:flex-row items-start gap-16">
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
        className="sticky top-16 flex flex-col py-16 flex-1 transition-all duration-300"
      >
        <Markdown
          remarkPlugins={[remarkGfm]}
          className={"leading-relaxed text-16 text-black font-archivo"}
          components={{
            p: ({ children }) => (
              <FadeIn>
                <p className="mb-4">{children}</p>
              </FadeIn>
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
              src="/images/scratches/red-underline.svg"
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
