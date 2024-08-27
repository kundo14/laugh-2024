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

const PageLayout = ({
  headProps,
  children,
  withoutFooter,
  className,
  rootClassName,
  withoutBackgroundTexture,
}: {
  headProps?: HeadProps;
  children: ReactNode;
  withoutFooter?: boolean;
  className?: string;
  rootClassName?: string;
  withoutBackgroundTexture?: boolean;
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
        {!noNavPaths.includes(pathname) && <Nav />}
        <motion.main
          className={cn("", className)}
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          {children}
        </motion.main>
        {!withoutFooter && <Footer className="z-50 relative" />}
        {!withoutBackgroundTexture && (
          <img
            src="/images/textures/paper.jpg"
            className="w-full h-full absolute top-0 left-0 opacity-20 z-0"
            alt="texture bg"
          />
        )}
      </SmoothScrolling>
    </div>
  );
};

export default PageLayout;
