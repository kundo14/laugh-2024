import { EmblaCarouselWorks } from "@/design-system/carousel";
import { cn } from "@/lib/cn";
import { WorkPreview as WorkPreviewProps } from "@/models";

export const ScrollableWorks = ({
  works,
  title,
  className,
}: {
  works: WorkPreviewProps[];
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center w-full justify-between !mb-8 container">
        <p className="text-black uppercase text-16">{title}</p>
      </div>
      <div className="overflow-x-visible container">
        <EmblaCarouselWorks
          slides={works}
          options={{ slidesToScroll: "auto" }}
        />
      </div>
    </div>
  );
};
