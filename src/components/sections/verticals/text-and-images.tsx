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
      <div className="sticky top-0 flex flex-col pt-32 flex-1 max-w-[480px]">
        <Markdown
          remarkPlugins={[remarkGfm]}
          className={"leading-loose text-16 text-black"}
          components={{
            p: ({ children }) => <p className="mb-4">{children}</p>,
          }}
        >
          {markdown}
        </Markdown>
        <Link
          href="/"
          className="inline-flex items-center uppercase underline text-12 mt-8"
        >
          Contact us
          <ArrowTopRightIcon className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};
