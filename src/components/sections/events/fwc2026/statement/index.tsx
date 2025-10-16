"use client";

import * as React from "react";
import { StatementText } from "./text";
import { cn } from "@/lib/cn";

const Statement = ({
  textColor,
  className,
}: {
  textColor?: "black" | "white";
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full h-auto justify-center items-center overflow-hidden relative sm:pt-32 pb-12",
        className
      )}
    >
      <div className="relative">
        <StatementText textColor={textColor} />
      </div>
    </div>
  );
};

export default Statement;
