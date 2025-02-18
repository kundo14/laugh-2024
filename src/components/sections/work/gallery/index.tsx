import { GalleryRow } from "@/models";
import { Row } from "./row";

export const Gallery = ({ gallery }: { gallery: GalleryRow[] }) => {
  console.log("gallery", gallery);
  return (
    <div className="flex flex-col gap-2 mt-20 container">
      {gallery.map((row, index) => (
        <Row key={index} row={row} />
      ))}
    </div>
  );
};
