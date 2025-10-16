"use client";

import * as React from "react";
import { motion, stagger, useAnimate } from "motion/react";
import Floating, {
  FloatingElement,
} from "@/components/fancy/parallax-floating";
import { exampleImages } from "../../info/fwc-2026-imgs";
import { StatementText } from "./text";

const Statement = () => {
  const [scope, animate] = useAnimate();

  // React.useEffect(() => {
  //   animate(
  //     "img",
  //     { opacity: [0, 1] },
  //     { duration: 0.5, delay: stagger(0.15) }
  //   );
  // }, []);

  return (
    <div
      className="flex w-full h-auto justify-center items-center overflow-hidden relative"
      ref={scope}
    >
      <div className="relative">
        <StatementText />

        {/* <Floating sensitivity={-1} className="overflow-hidden">
          <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[0].url}
              className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[10%] left-[32%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[1].url}
              className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[2%] left-[53%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[2].url}
              className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[0%] left-[83%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[3].url}
              className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>

          <FloatingElement depth={1} className="top-[40%] left-[2%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[4].url}
              className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[70%] left-[77%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[7].url}
              className="w-28 h-28 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>

          <FloatingElement depth={4} className="top-[73%] left-[15%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[5].url}
              className="w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[80%] left-[50%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[6].url}
              className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
        </Floating> */}
      </div>
    </div>
  );
};

export default Statement;
