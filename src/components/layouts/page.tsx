import { Archivo, Archivo_Black, Playfair_Display } from "next/font/google";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { motion } from "framer-motion";
import Head, { HeadProps } from "../common/head";
import { Nav } from "../common/nav";

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
}: {
  headProps?: HeadProps;
  children: ReactNode;
  withoutFooter?: boolean;
  className?: string;
  rootClassName?: string;
}) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      className={cn("text-16 text-black relative bg-gray-200", rootClassName)}
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
      {!noNavPaths.includes(pathname) && <Nav />}
      <motion.main
        className={cn("", className)}
        key={pathname}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        {children}
      </motion.main>
      {/* {!withoutFooter && <Footer />} */}
    </div>
  );
};

export default PageLayout;
