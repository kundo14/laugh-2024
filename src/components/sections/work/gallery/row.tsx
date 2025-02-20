import ScrollGrow from "@/components/common/animations/glow-up-image";
import { cn } from "@/lib/cn";
import { GalleryRow } from "@/models";

export const Row = ({ row }: { row: GalleryRow }) => {
  const cols = row.assets.length;
  return (
    <div className="flex flex-col">
      <div
        className={cn("grid gap-2", {
          "grid-cols-1": cols === 1,
          "grid-cols-2": cols === 2,
          "grid-cols-1 sm:grid-cols-3": cols === 3,
          "grid-cols-2 sm:grid-cols-4": cols === 4,
        })}
      >
        {row.assets.map((asset, idx) => {
          const isVideo = asset.includes(".mp4");
          return (
            <ScrollGrow key={idx} className="w-full">
              {isVideo ? (
                <video
                  src={asset}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="auto"
                  className="object-cover w-full rounded border border-gray-800 h-full"
                />
              ) : (
                <img
                  src={asset}
                  className="object-cover w-full rounded border border-gray-800 h-full"
                />
              )}
            </ScrollGrow>
          );
        })}
      </div>
      {row.caption && (
        <p className="my-4 text-16 text-right max-w-[1024px] ml-auto text-gray-400">
          {row.caption}
        </p>
      )}
    </div>
  );
};
