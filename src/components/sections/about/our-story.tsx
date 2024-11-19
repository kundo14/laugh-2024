import FadeIn from "@/components/common/animations/fade-in";
import ScrollGrow from "@/components/common/animations/glow-up-image";
import ScrollParallax from "@/components/common/animations/parallax";
import { CustomDraggable } from "@/components/common/draggable";

export const OurStorySection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-16 xl:gap-32 mt-4 lg:mt-0">
      <div className="flex flex-col flex-1 gap-12">
        <div className="flex flex-col w-full gap-4">
          <FadeIn>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              “In July 2020, we chose to take a new direction and give life to
              Laugh. At that moment, we realized that “laugh” is not just a
              moment; it&apos;s a way of life.{" "}
            </p>
          </FadeIn>
          <FadeIn>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              The more we laugh, the more we feel, and the more we feel, the
              happier we become.
            </p>
          </FadeIn>
          <FadeIn>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              Our passion for sports goes beyond grand events and packed
              stadiums. It resides in the streets, in the joy of play, in the
              authentic connection with every fan, in the simple moments that
              turn into unforgettable memories.
            </p>
          </FadeIn>
          <FadeIn>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              Laugh is a vibrant space, an open book filled with incredible
              stories. It&apos;s a shared journey, a bridge that connects fans
              with experiences that touch the heart.
            </p>
          </FadeIn>
        </div>
        <div className="flex flex-col w-full">
          <FadeIn>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              We are fans.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              We are passion.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              We are a creative powerhouse,
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              where ideas come to life.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              We believe, we connect, we have fun.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              We are Laugh.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              And that means a lot...
            </p>
          </FadeIn>
        </div>
        <FadeIn>
          <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed italic">
            The passion and love we pour into every project define our very
            existence. Thanks to all who were, are, and will be part of this
            beautiful and exciting roller coaster.”
          </p>
        </FadeIn>
        <FadeIn>
          <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
            Nacho Bernardo and Juli Carneiro.
          </p>
        </FadeIn>
      </div>

      <div className="flex flex-col items-end pt-8">
        <div className="relative">
          <FadeIn delay={1}>
            <img
              src="/images/about/juli-nacho-2.jpg"
              alt="Our Story"
              className="rounded -rotate-3 md:w-[320px] lg:w-[400px] xl:w-[420px] h-auto object-cover max-h-[420px]"
            />
          </FadeIn>

          <ScrollParallax
            parallaxSpeed={-0.5}
            className="absolute top-[90%] right-0 xl:-right-12"
          >
            <CustomDraggable>
              <img
                src="/images/scratches/gold-star.svg"
                alt="drag-me-star"
                className="w-[80px] h-auto"
                draggable={false}
              />
            </CustomDraggable>
          </ScrollParallax>
        </div>

        <div className="relative mt-20">
          <ScrollGrow>
            <img
              src="/images/about/juli-nacho-1.jpg"
              alt="Our Story 2"
              className="rounded rotate-2 w-[280px] h-auto object-cover max-h-[320px]"
            />
          </ScrollGrow>

          <ScrollParallax parallaxSpeed={1.2} className="">
            <CustomDraggable>
              <img
                src="/images/scratches/gold-arrow-2.svg"
                alt="drag-me-arrow"
                className="w-[80px] md:w-[120px] h-auto rotate-90 md:!rotate-45 absolute top-[100%] md:bottom-0 left-0 md:right-[100%]"
                draggable={false}
              />
            </CustomDraggable>
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};
