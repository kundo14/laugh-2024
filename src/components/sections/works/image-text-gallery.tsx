import * as React from "react";
import { ImageTextGalleryProps } from "@/models";
import FadeIn from "@/components/common/animations/fade-in";
import { renderBody } from "@/lib/contentful/renderer";
import { cn } from "@/lib/cn";
import ScrollParallax from "@/components/common/animations/parallax";
import ScrollGrow from "@/components/common/animations/glow-up-image";
import { useRouter } from "next/router";
import { CustomDraggable } from "@/components/common/draggable";

export const ImageTextGallery = ({
  component,
  textWhite,
}: {
  component: ImageTextGalleryProps;
  textWhite?: boolean;
}) => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const { images } = component;

  const router = useRouter();

  const { pathname } = router;

  const stickers = React.useMemo(() => {
    const possibleImages = [
      "/images/stickers/botines.png",
      "/images/stickers/joystick.png",
      "/images/stickers/pelota.png",
      "/images/stickers/tv.png",
      "/images/stickers/camara.png",
      "/images/stickers/cervezas.png",
      "/images/stickers/copa-america.png",
      "/images/stickers/libertadores.png",
      "/images/stickers/mundial.png",
      "/images/stickers/sifon.png",
      "/images/stickers/maradona.png",
      "/images/stickers/pinguino.png",
      "/images/stickers/cerveza.png",
    ];

    // pick 2 randoms that shound't be the same
    const randomImage1 =
      possibleImages[Math.floor(Math.random() * possibleImages.length)];

    const randomImage2 = possibleImages.filter(
      (image) => image !== randomImage1
    )[Math.floor(Math.random() * (possibleImages.length - 1))];

    return {
      first: randomImage1,
      second: randomImage2,
    };
  }, [pathname]);

  return (
    <div className="flex items-start flex-col-reverse sm:flex-col container gap-2">
      <div className="flex flex-col w-full sm:flex-row items-center gap-16 sm:gap-8 lg:gap-16">
        {/* current selected image */}
        <ScrollGrow className="w-full min-w-full max-w-full sm:min-w-[420px] sm:max-w-[420px] lg:min-w-[600px] lg:max-w-[600px]">
          <img
            src={images[selectedImage].image}
            alt={`images[selectedImage] ${selectedImage}`}
            className="w-full h-[504px] lg:h-[720px] object-cover rounded border border-gray-800"
          />
        </ScrollGrow>

        {/* text */}
        <ScrollParallax className="flex-1 sm:max-w-[520px] relative">
          {/* sticker 1 */}
          <CustomDraggable>
            <img
              src={stickers.first}
              alt="sticker"
              className="hidden md:flex w-[160px] sm:w-[180px] md:w-[220px] h-auto absolute top-[120%] right-0 z-40"
              draggable={false}
            />
          </CustomDraggable>

          {renderBody(images[selectedImage].text, "dark")}
        </ScrollParallax>
      </div>
      {/* image thumbnails */}
      <div className="flex gap-2 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "w-[80px] h-[96px] sm:w-[120px] sm:h-[144px] relative cursor-pointer transition-all duration-150 transform hover:scale-105",
              {
                "z-50": index === selectedImage,
              }
            )}
          >
            <img
              src={image.image}
              alt={`images[selectedImage] ${index}`}
              className={cn("w-full h-full object-cover rounded", {
                // black and white the not selected images
                "filter grayscale": index !== selectedImage,
                selected_image: index === selectedImage,
              })}
            />
            {index === selectedImage && (
              <FadeIn className="absolute top-[-15%] left-[-15%]">
                <img
                  src="/images/scratches/selected-image-scratch.svg"
                  alt="selected"
                  className="min-w-[130%] min-h-[130%]"
                />
              </FadeIn>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
