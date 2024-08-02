import { EmblaCarouselWorks } from "@/components/design-system/carousel";
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
    <div id="passion-love" className={cn("flex flex-col", className)}>
      <EmblaCarouselWorks
        slides={works}
        title={title}
        options={{ slidesToScroll: "auto" }}
      />
    </div>
  );
};
