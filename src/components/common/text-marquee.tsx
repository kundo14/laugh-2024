import { cn } from "@/lib/cn";
import Marquee from "react-fast-marquee";

const Text = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "red" | "gold" | "yellow" | "black";
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
  color: "red" | "gold" | "yellow" | "black";
}) => {
  return (
    <Marquee speed={200} className="py-8">
      <Text color={color}>{text}</Text>
      <Text color={color}>{text}</Text>
      <Text color={color}>{text}</Text>
    </Marquee>
  );
};
