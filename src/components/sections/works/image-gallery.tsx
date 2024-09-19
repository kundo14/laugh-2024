import ScrollGrow from "@/components/common/animations/glow-up-image";
import { WorkTemplateProps } from "@/models";

export const ImageGallery = ({
  images,
}: {
  images: {
    url: string;
    description: string;
  }[];
}) => {
  const renderImages = () => {
    switch (images.length) {
      case 1:
        return (
          <div className="grid grid-cols-1 gap-2">
            <ScrollGrow>
              <img
                src={images[0].url}
                alt="gallery image"
                className="w-full h-auto"
              />
            </ScrollGrow>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {images.map((image, index) => (
              <ScrollGrow key={index}>
                <img
                  src={image.url}
                  alt={`gallery image ${index}`}
                  className="w-full h-auto"
                />
              </ScrollGrow>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <ScrollGrow className="sm:col-span-3">
              <img
                src={images[0].url}
                alt="gallery image"
                className="w-full h-auto max-h-[820px] object-cover"
              />
            </ScrollGrow>
            {images.slice(1).map((image, index) => (
              <ScrollGrow key={index}>
                <img
                  src={image.url}
                  alt={`gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </ScrollGrow>
            ))}
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {images.map((image, index) => (
              <ScrollGrow key={index}>
                <img
                  src={image.url}
                  alt={`gallery image ${index}`}
                  className="w-full h-auto"
                />
              </ScrollGrow>
            ))}
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {images.map((image, index) => (
              <ScrollGrow key={index}>
                <img
                  src={image.url}
                  alt={`gallery image ${index}`}
                  className="w-full h-auto"
                />
              </ScrollGrow>
            ))}
          </div>
        );
    }
  };

  return <div className="flex-1 flex flex-col gap-2">{renderImages()}</div>;
};
