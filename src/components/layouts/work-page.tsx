import { Archivo, Archivo_Black, Playfair_Display } from "next/font/google";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { motion } from "framer-motion";
import Head, { HeadProps } from "../common/head";
import { Nav } from "../common/nav";
import { Footer } from "../common/footer";
import ScrollParallax from "../common/animations/parallax";

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

const WorkPageLayout = ({
  headProps,
  children,
  className,
  rootClassName,
  name,
  bg,
  textWhite,
}: {
  headProps?: HeadProps;
  children: ReactNode;
  className?: string;
  rootClassName?: string;
  textWhite?: boolean;
  bg: string;
  name: ReactNode;
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
      <div className="h-px" />
      <Nav color={textWhite ? "white" : "black"} />
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full h-screen -mt-[136px] relative"
        )}
      >
        <div className="sm:p-2 absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-0 left-0 w-full h-full sm:top-2 sm:left-2 sm:w-[calc(100%-16px)] sm:h-[calc(100%-16px)] bg-black opacity-50 z-0 rounded" />
          <img
            src={bg}
            alt={`bg - ${name}`}
            className="rounded object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <ScrollParallax className="z-10" parallaxSpeed={0.8}>
          <p className="text-white text-24 sm:text-32 uppercase font-archivo text-center px-4 leading-tight">
            {name}
          </p>
        </ScrollParallax>
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
      <Footer className="z-50 relative" color="white" textWhite />
    </div>
  );
};

export default WorkPageLayout;
