import * as React from "react";
import { cn } from "@/lib/cn";
import { WorkPreview as WorkPreviewProps } from "@/models";
import Link from "next/link";

export const WorkPreview = ({
  size = "small",
  work,
  variant = "light",
  className,
  smallTitle,
}: {
  size: "small" | "large";
  work: WorkPreviewProps;
  variant: "light" | "dark";
  className?: string;
  smallTitle?: boolean;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered && videoLoaded) {
      video.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered, videoLoaded]);

  return (
    <Link
      href={`/work/${work.slug}`}
      className={cn("flex flex-col w-full font-archivo", className, {
        "gap-3": size === "small",
        "gap-3 lg:gap-4": size === "large",
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn("border rounded relative", {
          "border-gray-700": variant === "dark",
          "border-gray-300": variant === "light",
          "min-w-[320px] w-full md:w-[420px] h-[180px] sm:h-[220px]":
            size === "small",
          "w-full h-auto": size === "large",
        })}
      >
        <img
          src={work.imagePreview}
          alt={`work image for ${work.name}`}
          className={cn("w-full object-cover rounded", {
            "h-full": size === "small",
            "h-auto": size === "large",
          })}
        />
        {work.heroVideo && (
          <video
            ref={videoRef}
            src={work.heroVideo}
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onLoadStart={() => setVideoLoaded(false)}
            className={cn(
              "absolute top-0 left-0 w-full h-full object-cover rounded transition-opacity duration-300",
              {
                "opacity-100": isHovered && videoLoaded,
                "opacity-0": !isHovered || !videoLoaded,
              }
            )}
          />
        )}
      </div>
      <p
        className={cn("!text-16 leading-none", {
          "text-gray-300": variant === "dark",
          "text-gray-600": variant === "light",
        })}
      >
        [{work.date.start}]
      </p>
      <p
        className={cn("font-semibold uppercase leading-tight", {
          "!text-white": variant === "dark",
          "!text-black": variant === "light",
          "text-24 lg:text-32": size === "large" && !smallTitle,
          "text-20 sm:text-24": size === "small" || smallTitle,
        })}
      >
        {work.name}
      </p>
      <div
        className={cn(
          "flex gap-y-1 gap-x-2 items-center flex-wrap pr-8 flex-1",
          {
            "lg:mt-1": size === "large" && !smallTitle,
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
