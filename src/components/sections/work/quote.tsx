import FadeIn from "@/components/common/animations/fade-in";
import ScrollParallax from "@/components/common/animations/parallax";
import { cn } from "@/lib/cn";
import { QuoteIcon } from "@radix-ui/react-icons";

export const WorkQuote = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center text-center relative px-2 sm:px-8 md:px-16 lg:px-20 max-w-max mx-auto z-40",
        className
      )}
    >
      <ScrollParallax className="absolute bottom-[90%] left-0 sm:left-[unset] sm:bottom-[unset] sm:right-[95%]">
        <QuoteIcon
          className={cn(
            "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 text-gold transform rotate-180"
          )}
        />
      </ScrollParallax>
      <ScrollParallax className="absolute bottom-[90%] right-0 sm:right-[unset]  sm:bottom-[unset] sm:left-[95%]">
        <QuoteIcon
          className={cn(
            "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 text-gold"
          )}
        />
      </ScrollParallax>
      <FadeIn>
        <p
          className={cn(
            "font-playfairDisplay !text-20 md:!text-24 lg:!text-32 leading-normal max-w-max xl:max-w-[920px] italic font-extralight text-white"
          )}
        >
          No one understands <b>sport</b> like{" "}
          <b>
            fans,
            <br /> and as true fanatics
          </b>
          <br /> we&apos;re ready to bring that <b>energy</b> to your brand.
        </p>
      </FadeIn>
    </div>
  );
};
