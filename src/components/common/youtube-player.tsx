import { cn } from "@/lib/cn";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";

export const VideoPlayer = ({
  video,
  className,
}: {
  video: string;
  className?: string;
}) => {
  const [ref, inView] = useInView();
  //video path

  return (
    <div
      className={cn(
        "w-full !max-w-full h-[280px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[640px]",
        className
      )}
      ref={ref}
    >
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        style={{
          width: "100%",
          minWidth: "100%",
          maxWidth: "100%",
          height: "100%",
          minHeight: "100%",
        }}
        url={video}
        controls={false}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
        playing={inView}
      />
      <source src={video} type="video/mp4" />
    </div>
  );
};
