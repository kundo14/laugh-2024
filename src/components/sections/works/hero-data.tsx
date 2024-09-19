import { CustomDraggable } from "@/components/common/draggable";
import { cn } from "@/lib/cn";
import { WorkTemplateProps } from "@/models";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const WorkHeroData = ({
  work,
  className,
}: {
  work: WorkTemplateProps;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex gap-32 items-start container relative", className)}
    >
      <div className="flex flex-col w-max min-w-[140px]">
        <div className="flex flex-col border-t border-gray-500 pt-4">
          <p className="uppercase text-12 text-gray-500 mb-3">year</p>
          <p className="uppercase text-12 text-gray-500">
            {work.date.start} - {work.date.end || "Present"}
          </p>
        </div>
        <div className="flex flex-col border-t border-gray-500 pt-4 mt-12">
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
          <ul className="text-12 text-gray-500">
            {work.deliverables.map((deliverable) => (
              <li className="uppercase leading-loose" key={deliverable}>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col pl-12 border-l border-gray-500 max-w-[800px] pb-44">
        <div className="text-48 leading-tight mb-14">
          <Markdown remarkPlugins={[remarkGfm]}>{work.heroTitle}</Markdown>
        </div>
        <div className="text-16 text-gray-800 leading-[1.8]">
          <Markdown remarkPlugins={[remarkGfm]}>
            {work.heroDescription}
          </Markdown>
        </div>
      </div>
      <CustomDraggable>
        <img
          src="/images/scratches/yellow-arrow-2.svg"
          className="absolute bottom-20 right-0"
          draggable={false}
        />
      </CustomDraggable>
    </div>
  );
};
