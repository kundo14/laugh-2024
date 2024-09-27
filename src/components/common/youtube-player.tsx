import ReactPlayer from "react-player";

export const VideoPlayer = ({ video }: { video: string }) => {
  //video path

  return (
    <div className="w-full !max-w-full h-[280px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[640px]">
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
        playing={true}
      />
      <source src={video} type="video/mp4" />
    </div>
  );
};
