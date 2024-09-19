import { cn } from "@/lib/cn";
import { WorkPreview as WorkPreviewProps } from "@/models";
import Link from "next/link";

export const WorkPreview = ({
  size = "small",
  work,
  variant = "light",
  className,
}: {
  size: "small" | "large";
  work: WorkPreviewProps;
  variant: "light" | "dark";
  className?: string;
}) => {
  return (
    <Link
      href={`/work/${work.slug}`}
      className={cn("flex flex-col w-full font-archivo", className, {
        "gap-3": size === "small",
        "gap-3 lg:gap-4": size === "large",
      })}
    >
      <img
        src={work.imagePreview}
        alt={`work image for ${work.name}`}
        className={cn("border object-cover", {
          "border-gray-700": variant === "dark",
          "border-gray-300": variant === "light",
          "min-w-[320px] w-full md:w-[420px] h-[180px] sm:h-[220px]":
            size === "small",
          "w-full h-auto": size === "large",
        })}
      />
      <p
        className={cn("!text-16 leading-none", {
          "text-gray-300": variant === "dark",
          "text-gray-600": variant === "light",
        })}
      >
        [{work.date.start}]
      </p>
      <p
        className={cn("font-semibold uppercase", {
          "!text-white": variant === "dark",
          "!text-black": variant === "light",
          "text-24 lg:text-32": size === "large",
          "text-20 sm:text-24": size === "small",
        })}
      >
        {work.name}
      </p>
      <div
        className={cn(
          "flex gap-y-1 gap-x-2 items-center flex-wrap pr-8 flex-1",
          {
            "lg:mt-1": size === "large",
          }
        )}
      >
        {work.tags.map((tag, index) => (
          <span
            key={index}
            className={cn("!text-12 uppercase px-3 py-1 border min-w-max", {
              "text-gray-300 border-gray-700 bg-black": variant === "dark",
              "text-black border-black": variant === "light",
            })}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};
