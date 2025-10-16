"use client";

import * as React from "react";
import { StatementText } from "./text";
import { cn } from "@/lib/cn";
import { CustomDraggable } from "@/components/common/draggable";
import ScrollParallax from "@/components/common/animations/parallax";

const Statement = ({
  textColor,
  className,
  withStickers = true,
}: {
  textColor?: "black" | "white";
  className?: string;
  withStickers?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex w-full h-auto justify-center items-center overflow-hidden relative sm:pt-32 pb-12",
        className
      )}
    >
      <div className="relative w-full">
        {withStickers && (
          <>
            <ScrollParallax
              parallaxSpeed={0}
              className="hidden xl:flex absolute top-[0%] right-[2%] z-50"
            >
              <CustomDraggable>
                <img
                  src="/images/stickers/mundial.png"
                  alt="gold arrow"
                  className="w-20 md:w-32 xl:w-40 h-auto mb-8"
                  draggable="false"
                />
              </CustomDraggable>
            </ScrollParallax>
            <ScrollParallax
              parallaxSpeed={1}
              className="hidden xl:flex absolute top-[10%] left-[8%] z-50"
            >
              <CustomDraggable>
                <img
                  src="/images/stickers/argentina.png"
                  alt="gold arrow"
                  className="w-20 md:w-32 xl:w-40 h-auto mb-8"
                  draggable="false"
                />
              </CustomDraggable>
            </ScrollParallax>
            <ScrollParallax
              parallaxSpeed={0.5}
              className="hidden xl:flex absolute top-[20%] right-[12%] z-50"
            >
              <CustomDraggable>
                <img
                  src="/images/stickers/tv.png"
                  alt="gold arrow"
                  className="w-20 md:w-32 xl:w-40 h-auto mb-8"
                  draggable="false"
                />
              </CustomDraggable>
            </ScrollParallax>
            <ScrollParallax
              parallaxSpeed={-0.1}
              className="hidden xl:flex absolute bottom-[10%] left-[8%] z-50"
            >
              <CustomDraggable>
                <img
                  src="/images/stickers/botines.png"
                  alt="gold arrow"
                  className="w-20 md:w-32 xl:w-40 h-auto mb-8"
                  draggable="false"
                />
              </CustomDraggable>
            </ScrollParallax>
            <ScrollParallax
              parallaxSpeed={-0.4}
              className="hidden xl:flex absolute top-[90%] right-[10%] z-50"
            >
              <CustomDraggable>
                <img
                  src="/images/stickers/camara.png"
                  alt="gold arrow"
                  className="w-20 md:w-32 xl:w-40 h-auto mb-8"
                  draggable="false"
                />
              </CustomDraggable>
            </ScrollParallax>
          </>
        )}
        <StatementText textColor={textColor} />
      </div>
    </div>
  );
};

export default Statement;
