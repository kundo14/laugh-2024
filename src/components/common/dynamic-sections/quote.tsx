import { cn } from "@/lib/cn";
import { Quote as QuoteProps } from "@/models";
import { QuoteIcon } from "@radix-ui/react-icons";

export const Quote = ({
  quote,
  className,
}: {
  quote: QuoteProps;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center relative px-20 max-w-max",
        className
      )}
    >
      <QuoteIcon className="w-10 h-10 text-gray-700 absolute top-0 left-0 transform rotate-180" />
      <QuoteIcon className="w-10 h-10 text-gray-700 absolute top-0 right-0" />
      <p className="font-playfairDisplay text-black text-24 leading-normal max-w-[760px]">
        {quote.quote}
      </p>
      <p className="font-archivo text-14 uppercase text-gray-700 mt-8">
        {quote.author}
      </p>
    </div>
  );
};
