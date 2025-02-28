import { EmblaCarouselWorks } from "@/components/design-system/carousel-works";
import { cn } from "@/lib/cn";
import { WorkPreview as WorkPreviewProps } from "@/models";

export const ScrollableWorks = ({
  works,
  title,
  className,
  textWhite,
}: {
  works: WorkPreviewProps[];
  title?: string;
  className?: string;
  textWhite?: boolean;
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <EmblaCarouselWorks
        textWhite={textWhite}
        slides={works}
        title={title}
        options={{ slidesToScroll: "auto" }}
      />
    </div>
  );
};
