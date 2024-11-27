import { cn } from "@/lib/cn";
import { Quote as QuoteProps } from "@/models";
import { QuoteIcon } from "@radix-ui/react-icons";

export const Quote = ({
  quote,
  textWhite,
  className,
}: {
  quote: QuoteProps;
  className?: string;
  textWhite?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center relative px-2 sm:px-8 md:px-16 lg:px-20 max-w-max",
        className
      )}
    >
      <QuoteIcon
        className={cn(
          "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 absolute -top-8 sm:top-0 left-0 transform rotate-180",
          {
            "text-white": textWhite,
            "text-gray-700": !textWhite,
          }
        )}
      />
      <QuoteIcon
        className={cn(
          "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 absolute -top-8 sm:top-0 right-0",
          {
            "text-white": textWhite,
            "text-gray-700": !textWhite,
          }
        )}
      />
      <p
        className={cn(
          "font-playfairDisplay text-20 sm:text-24 leading-normal max-w-[760px]",
          {
            "text-white": textWhite,
            "text-black": !textWhite,
          }
        )}
      >
        {quote.quote}
      </p>
      {quote.author && (
        <p
          className={cn("font-archivo text-14 uppercase  mt-6 sm:mt-8", {
            "text-gray-300": textWhite,
            " text-gray-700": !textWhite,
          })}
        >
          {quote.author}
        </p>
      )}
    </div>
  );
};
