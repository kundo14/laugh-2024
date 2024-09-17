import { CustomDraggable } from "@/components/common/draggable";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const TextAndImages = ({
  images,
  markdown,
}: {
  images: string[];
  markdown: string;
}) => {
  return (
    <div className="flex items-start gap-16">
      <div className="flex flex-col gap-2 w-[640px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`vertical - ${index}`}
            className="w-full h-auto"
          />
        ))}
      </div>
      <div className="sticky top-16 flex flex-col py-16 flex-1">
        <Markdown
          remarkPlugins={[remarkGfm]}
          className={"leading-relaxed text-16 text-black font-archivo"}
          components={{
            p: ({ children }) => <p className="mb-4">{children}</p>,
          }}
        >
          {markdown}
        </Markdown>
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
      </div>
    </div>
  );
};
