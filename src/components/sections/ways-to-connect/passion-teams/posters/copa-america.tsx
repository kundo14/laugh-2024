import ScrollGrow from "@/components/common/animations/glow-up-image";
import { cn } from "@/lib/cn";

export const CopaAmericaPoster = ({ className }: { className?: string }) => {
  return (
    <ScrollGrow className={cn("", className)}>
      <div className="flex flex-col">
        <video
          src={`/gifs/passion-love/copa-america.mp4`}
          className="rounded object-cover md:w-[280px] lg:w-[320px] xl:w-[380px] h-auto"
          autoPlay
          loop
          muted
          controls={false}
          playsInline
        />
        <p className="text-white uppercase font-archivoBlack text-24 lg:text-32 xl:text-48">
          copa américa
        </p>
      </div>
    </ScrollGrow>
  );
};
