import FadeIn from "@/components/common/animations/fade-in";
import { Quote as QuoteComponent } from "@/components/common/dynamic-sections/quote";
import { TextMarquee } from "@/components/common/text-marquee";
import { CustomComponent } from "@/models";

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
          <div className="container !my-40 flex items-center justify-center">
            <QuoteComponent
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
      return <TextMarquee text={component.text} color="black" />;
    case "image-text-gallery":
      return (
        <div>
          {component.images.map((image, index) => (
            <div key={index}>
              <img src={image.image} alt="" />
              <p>{image.text}</p>
            </div>
          ))}
        </div>
      );
  }
};
