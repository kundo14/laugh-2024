import { cn } from "@/lib/cn";
import Marquee from "react-fast-marquee";

const Text = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "red" | "gold" | "yellow" | "black" | "white";
}) => {
  return (
    <div
      className={cn(
        "text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-archivoBlack uppercase mr-12",
        {
          "text-red": color === "red",
          "text-gold": color === "gold",
          "text-yellow": color === "yellow",
          "text-black": color === "black",
          "text-white": color === "white",
        }
      )}
    >
      {children}
    </div>
  );
};

export const TextMarquee = ({
  text,
  color,
}: {
  text: string;
  color: "red" | "gold" | "yellow" | "black" | "white";
}) => {
  return (
    <Marquee speed={200} className="py-16">
      <Text color={color}>{text}</Text>
      <Text color={color}>{text}</Text>
      <Text color={color}>{text}</Text>
    </Marquee>
  );
};
