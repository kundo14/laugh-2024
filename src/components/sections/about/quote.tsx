import FadeIn from "@/components/common/animations/fade-in";
import ScrollParallax from "@/components/common/animations/parallax";
import { cn } from "@/lib/cn";

export const AboutQuote = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("flex items-center gap-4 sm:gap-8 md:gap-12", className)}
    >
      <ScrollParallax parallaxSpeed={0.4}>
        <img
          src="/images/stickers/quote.svg"
          alt="Quote"
          className="w-8 min-w-8 sm:w-12 sm:min-w-12 md:w-16 md:min-w-16 h-auto"
        />
      </ScrollParallax>
      <div className="flex flex-col">
        <FadeIn>
          <p className="text-gold leading-none font-masker text-24 sm:text-42 md:text-48">
            we&apos;re on a mission
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-white leading-tight font-playfairDisplay text-18 sm:text-24 md:text-32">
            to share our passion and laughter with fans,
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="ml-auto">
          <p className="text-gold leading-none font-masker text-24 sm:text-42 md:text-48">
            everywhere
          </p>
        </FadeIn>
      </div>
      <ScrollParallax parallaxSpeed={-0.2}>
        <img
          src="/images/stickers/quote.svg"
          alt="Quote"
          className="w-8 min-w-8 sm:w-12 sm:min-w-12 md:w-16 md:min-w-16 h-auto transform rotate-180"
        />
      </ScrollParallax>
    </div>
  );
};
