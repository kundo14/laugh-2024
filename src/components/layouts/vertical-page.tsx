import { Archivo, Archivo_Black, Playfair_Display } from "next/font/google";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { motion } from "framer-motion";
import Head, { HeadProps } from "../common/head";
import { Nav } from "../common/nav";
import { Footer } from "../common/footer";
import SmoothScrolling from "../common/scroll";
import FadeIn from "../common/animations/fade-in";
import { CustomDraggable } from "../common/draggable";

const noNavPaths = ["/404"];

const archivo = Archivo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const VerticalPageLayout = ({
  headProps,
  children,
  className,
  textWhite,
  rootClassName,
  logo,
  color,
  noBg,
}: {
  headProps?: HeadProps;
  children: ReactNode;
  className?: string;
  rootClassName?: string;
  textWhite?: boolean;
  noBg?: boolean;
  logo: ReactNode;
  color?: "red" | "gold" | "yellow";
}) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      className={cn("text-16 relative", rootClassName, {
        "text-white bg-black": textWhite,
        "text-black bg-white": !textWhite,
      })}
    >
      <style jsx global>{`
        :root {
          --font-archivo: ${archivo.style.fontFamily};
          --font-archivoBlack: ${archivoBlack.style.fontFamily};
          --font-playfairDisplay: ${playfairDisplay.style.fontFamily};
        }
      `}</style>
      <Head headProps={headProps} />
      <SmoothScrolling>
        <div className="h-px" />
        <Nav color={color === "red" || textWhite ? "white" : "black"} />
        <div
          className={cn(
            "relative flex flex-col items-center justify-center w-full h-screen -mt-[136px]",
            {
              "bg-red": color === "red" && !noBg,
              "bg-gold": color === "gold" && !noBg,
              "bg-yellow": color === "yellow" && !noBg,
            }
          )}
        >
          <CustomDraggable>
            <img
              src={"/images/scratches/gold-arrow.svg"}
              alt="sticker"
              className="w-[100px] sm:w-[120px] lg:w-[160px] h-auto absolute bottom-16 right-24 z-40"
              draggable={false}
            />
          </CustomDraggable>
          <FadeIn className="z-50">{logo}</FadeIn>
        </div>
        <motion.main
          className={cn("", className)}
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          {children}
        </motion.main>
        <Footer className="z-50 relative" color={color} textWhite={textWhite} />
      </SmoothScrolling>
    </div>
  );
};

export default VerticalPageLayout;
