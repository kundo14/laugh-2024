import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import clsx from "clsx";
import Link from "next/link";

const renderBody = (document, size) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-archivoBlack">{text}</b>,
      [MARKS.ITALIC]: (text) => <i className="italic font-extralight">{text}</i>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="font-archivo font-normal">{children}</p>
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
