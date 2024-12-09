import * as React from "react";
import FlareCursor from "@/components/common/cursor";
import Loader from "@/components/common/loader";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 3.8 seconds
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }} // Only transition on exit
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[999] w-full h-full"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      <FlareCursor />
      <ReactLenis root options={{ lerp: 0.09, duration: 1.5 }}>
        <Component {...pageProps} />
      </ReactLenis>
    </>
  );
}
