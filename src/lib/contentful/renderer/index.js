import { cn } from "@/lib/cn";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import clsx from "clsx";
import Link from "next/link";

const renderBody = (document, theme) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-archivoBlack text-current">{text}</b>,
      [MARKS.ITALIC]: (text) => <i className="italic font-extralight text-current">{text}</i>,
      [MARKS.UNDERLINE]: (text) => <span className="richtext_underline text-current">{text}</span>,
    },
    
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={cn("font-archivo font-normal mb-6", {
          'text-white': theme === 'dark',
          'text-gray-800': theme === 'light',
        })}>{children}</p>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Link
          className={clsx("text-red underline")} // Ensure link styles are applied
          target="_blank"
          href={node.data.uri}
          rel="noreferrer"
          aria-label={node.data.uri}
        >
          {children}
        </Link>
      ),
    },
  };

  return documentToReactComponents(document, options);
};

export { renderBody };
