import { Archivo, Archivo_Black, Playfair_Display } from "next/font/google";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { motion } from "framer-motion";
import Head, { HeadProps } from "../common/head";
import { Nav } from "../common/nav";
import { Footer } from "../common/footer";
import SmoothScrolling from "../common/scroll";

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
  rootClassName,
  logo,
  color,
  noBg,
}: {
  headProps?: HeadProps;
  children: ReactNode;
  className?: string;
  rootClassName?: string;
  noBg?: boolean;
  logo: ReactNode;
  color?: "red" | "gold" | "yellow";
}) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className={cn("text-16 text-black relative", rootClassName)}>
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
        <Nav color={color === "red" ? "white" : "black"} />
        <div
          className={cn(
            "flex flex-col items-center justify-center w-full h-screen -mt-[136px]",
            {
              "bg-red": color === "red" && !noBg,
              "bg-gold": color === "gold" && !noBg,
              "bg-yellow": color === "yellow" && !noBg,
            }
          )}
        >
          {logo}
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
        <Footer className="z-50 relative" color={color} />
        <img
          src="/images/textures/paper.jpg"
          className="w-full h-full absolute top-0 left-0 opacity-10 z-0"
          alt="texture bg"
        />
      </SmoothScrolling>
    </div>
  );
};

export default VerticalPageLayout;
