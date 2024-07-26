import { WorkPreview } from "@/components/common/work-preview";
import { cn } from "@/lib/cn";
import { WorkPreview as WorkPreviewProps } from "@/models";

export const FeaturedWorks = ({
  works,
  className,
}: {
  works: WorkPreviewProps[];
  className?: string;
}) => {
  return (
    <div className={cn("bg-black py-32 w-full", className)}>
      <div className="container flex items-start justify-between gap-32">
        <div className="flex flex-col sticky top-32 w-full max-w-[500px]">
          <img
            src="/images/scratches/yellow-arrow.svg"
            alt="yellow arrow"
            className="absolute -bottom-44 right-0 w-[80px] h-auto"
          />
          <p className="text-16 uppercase text-yellow mb-8">[Featured Works]</p>
          <p className="text-gray-300 text-12 uppercase leading-[1.8]">
            Lorem ipsum dolor sit amet consectetur. Maecenas adipiscing tellus
            non nisi aliquet et diam cursus. Sem quis scelerisque interdum
            turpis placerat.
          </p>
        </div>
        <div className="flex flex-col gap-20 flex-1">
          {works.map((work, index) => (
            <WorkPreview key={index} variant="dark" work={work} size="large" />
          ))}
        </div>
      </div>
    </div>
  );
};
