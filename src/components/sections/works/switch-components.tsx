import FadeIn from "@/components/common/animations/fade-in";
import { Quote as QuoteComponent } from "@/components/common/dynamic-sections/quote";
import { TextMarquee } from "@/components/common/text-marquee";
import { CustomComponent } from "@/models";
import { ImageTextGallery } from "./image-text-gallery";

export const SwitchComponents = ({
  component,
}: {
  component: CustomComponent;
}) => {
  if (!component || !component.type) return null;

  switch (component.type) {
    case "quote":
      return (
        <FadeIn>
          <div className="container !mb-16 !mt-24 sm:!my-40 flex items-center justify-center">
            <QuoteComponent
              textWhite
              quote={{
                quote: component.quote,
                author: component.author,
                type: "quote",
              }}
            />
          </div>
        </FadeIn>
      );
    case "text-slider":
      return <TextMarquee text={component.text} color="white" />;
    case "image-text-gallery":
      return <ImageTextGallery component={component} />;
  }
};
