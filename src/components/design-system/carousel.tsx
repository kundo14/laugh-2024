import * as React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { WorkPreview as WorkPreviewProps } from "@/models";
import { WorkPreview } from "@/components/common/work-preview";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import pickRandomColor from "@/lib/helpers/pick-random-color";

export const EmblaCarouselWorks = ({
  slides,
  options,
  textWhite,
  title,
}: {
  slides: WorkPreviewProps[];
  options?: EmblaOptionsType;
  textWhite?: boolean;
  title?: string;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(false);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setNextBtnDisabled(!emblaApi.canScrollNext());
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
    }
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    }
  }, [emblaApi]);

  const svgColor = React.useMemo(() => {
    return pickRandomColor();
  }, []);

  return (
    <div className="flex flex-col container">
      <div className="flex items-center w-full justify-between">
        {title && (
          <p
            className={cn("uppercase text-16", {
              "text-white": textWhite,
              "text-black": !textWhite,
            })}
          >
            {title}
          </p>
        )}
        <div className="flex gap-6">
          <button
            onClick={scrollPrev}
            className={cn(
              "text-12 uppercase p-2 rounded-full transition-all duration-150",
              {
                "opacity-50": prevBtnDisabled,
                "text-white": textWhite,
                "text-black": !textWhite,
              }
            )}
            disabled={prevBtnDisabled}
            name="prev"
          >
            Prev
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            name="next"
            className={cn(
              "text-12 uppercase p-2 rounded-full transition-all duration-150 relative",
              {
                "opacity-50": nextBtnDisabled,
                "text-white": textWhite,
                "text-black": !textWhite,
              }
            )}
          >
            Next
            <AnimatePresence>
              {!nextBtnDisabled && (
                <motion.svg
                  key="next"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  width="70"
                  height="21"
                  viewBox="0 0 70 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-[100%]"
                >
                  <path
                    d="M68.625 7.53641C64.5093 8.43394 60.3855 9.29105 56.2617 10.1158C52.1137 10.9487 48.0626 11.7249 44.0359 12.4607C35.7802 13.9728 27.5084 15.3554 19.2123 16.6007C16.8916 16.9484 14.571 17.288 12.2422 17.6114C12.9134 17.4012 13.5845 17.1909 14.2556 16.9807C17.2474 16.067 20.2553 15.2261 23.2875 14.4579C26.3036 13.6978 29.3439 13.0025 32.3922 12.3879C35.1252 11.8381 37.8502 11.3529 40.7207 10.9082C41.4646 10.8193 42.2004 10.7222 42.9443 10.6333C45.9603 10.2533 48.9763 9.87323 51.9924 9.50128C52.4614 9.44468 53.2376 9.18593 53.3265 8.63609C53.3346 8.56332 53.3346 8.49863 53.3265 8.44203C54.5152 8.27223 55.6957 8.09434 56.8843 7.92453C57.3533 7.85176 58.1296 7.61727 58.2185 7.05934C58.3155 6.50142 57.5393 6.42056 57.1673 6.4529C51.0706 6.99466 44.9738 7.53641 38.8771 8.08625C34.7048 8.4582 30.5244 8.83015 26.3521 9.2021C30.5082 8.4582 34.6644 7.72239 38.8205 6.97849C40.0981 6.75208 41.3837 6.52568 42.6613 6.29119C42.9928 6.26693 43.3243 6.24267 43.6478 6.21842C45.8552 6.08904 48.0707 5.95967 50.2782 5.8303C50.7472 5.80604 51.5234 5.49877 51.6123 4.96511C51.7094 4.39101 50.925 4.33441 50.5612 4.35867C49.793 4.39101 49.0249 4.43144 48.2648 4.47187C48.1678 4.09183 47.5371 4.01097 47.2136 4.0514C45.273 4.33441 43.3405 4.60933 41.3999 4.89233C39.6533 4.99745 37.9068 5.09448 36.1683 5.19959C34.1388 5.32088 32.1092 5.44217 30.0716 5.55537C30.3061 5.52303 30.5487 5.4826 30.7831 5.45026C36.5969 4.60124 42.4106 3.76031 48.2244 2.91129C51.4991 2.43423 54.7739 1.95716 58.0487 1.4801C58.5177 1.41541 59.2939 1.17283 59.3829 0.614907C59.4799 0.0569821 58.7037 -0.0319625 58.3317 0.00846685C50.8927 0.800882 43.4618 1.5933 36.0228 2.37763C28.6323 3.16196 21.2418 3.94629 13.8432 4.7387C9.67903 5.18343 5.50671 5.62815 1.34249 6.06478C0.873508 6.1133 0.0972641 6.38013 0.00831949 6.92997C-0.0887109 7.4879 0.687532 7.57684 1.05948 7.53641C7.88396 6.80868 14.7084 6.08904 21.5329 5.36131C18.8727 5.74943 16.2205 6.13756 13.5602 6.52568C13.0913 6.59037 12.315 6.83294 12.2261 7.39087C12.129 7.95688 12.9134 8.02157 13.2772 7.99731C15.4119 7.86793 17.5547 7.74664 19.6893 7.61727C19.4306 7.6577 19.1718 7.70621 18.9131 7.74664C15.9051 8.25605 12.8972 8.82207 9.90543 9.43659C9.52539 9.51745 8.86235 9.86514 8.89469 10.3341C8.91895 10.6737 9.25856 10.8193 9.58199 10.8516C9.30707 10.9891 9.07258 11.1831 9.02406 11.4823C8.92703 12.0402 9.70328 12.1211 10.0752 12.0888C16.172 11.547 22.2687 11.0052 28.3655 10.4554C29.5217 10.3503 30.678 10.2452 31.8343 10.1481C28.3331 10.6576 24.8319 11.1751 21.3308 11.6845C17.9751 12.1777 14.6195 12.6709 11.2558 13.1561C10.7868 13.2289 10.0105 13.4634 9.9216 14.0213C9.83266 14.5711 10.6008 14.6762 10.9728 14.6277C14.8702 14.1426 18.7675 13.6493 22.6649 13.1642C20.0451 13.8272 17.4415 14.5549 14.854 15.3312C11.3932 16.3662 7.96482 17.5063 4.56875 18.7353C4.2534 18.8485 3.76017 19.2286 3.87337 19.6248C3.97849 20.0291 4.58493 20.0857 4.92453 20.0453C13.2934 18.9456 21.638 17.7003 29.9665 16.3338C38.3515 14.9512 46.7123 13.431 55.0408 11.7815C59.6901 10.8597 64.3395 9.89749 68.9727 8.88675C69.3689 8.79781 70.1209 8.4016 69.9834 7.89219C69.846 7.35853 69.0051 7.45555 68.625 7.53641Z"
                    fill={svgColor}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
      <div className="overflow-x-visible mt-8">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex gap-4">
              {slides.map((item, idx) => (
                <div
                  key={idx}
                  className="embla__slide !max-w-[340px] sm:!max-w-[420px]"
                >
                  <WorkPreview
                    size="small"
                    variant={textWhite ? "dark" : "light"}
                    work={item}
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
