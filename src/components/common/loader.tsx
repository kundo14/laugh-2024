import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = React.useState(0);
  const duration = 1500; // 3 seconds in milliseconds

  React.useEffect(() => {
    const increment = 100 / (duration / 10); // Increase progress by this value every 10ms
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return Math.min(prevProgress + increment, 100); // Ensure it doesn't exceed 100
        }
        clearInterval(timer);
        return prevProgress;
      });
    }, 10); // Update progress every 10ms for a smooth effect

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-end justify-end min-h-full z-[999] bg-white">
      <div className="container flex justify-between min-h-full">
        <div className="flex flex-col md:flex-row items-end justify-end gap-32 pb-16 w-full">
          {/* First text animation */}
          <AnimatePresence>
            {progress < 100 && (
              <motion.p
                className="text-24 sm:text-32 font-archivoBlack uppercase leading-none flex-1" // Added class to fix width
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                Laugh is a space where we connect brands and fans.
              </motion.p>
            )}
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row items-end sm:gap-12 sm:w-[420px]">
            <AnimatePresence>
              {progress < 100 && (
                <motion.div
                  className="text-[120px] font-archivoBlack leading-none text-red sm:-mb-5 min-w-[250px] text-right"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3, delay: 0.5 }} // Small delay for exit
                >
                  {Math.floor(progress)}
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {progress < 100 && (
                <motion.p
                  className="text-24 sm:text-32 font-archivoBlack uppercase leading-none w-[122px] text-right" // Added class to fix width
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3, delay: 0.3 }} // Delay exit after progress
                >
                  loading
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
