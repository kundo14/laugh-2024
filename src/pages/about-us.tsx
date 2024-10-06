import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "@/components/common/animations/fade-in";
import { useMedia } from "use-media";

export default function AboutUs() {
  const isMobile = useMedia({ maxWidth: "768px" });

  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "About Us | Laugh",
      }}
      withoutBackgroundTexture
    >
      <img
        src="/images/textures/black-bg.jpg"
        className="w-full h-[100svh] absolute top-0 left-0 opacity-10"
      />

      <div className="container">aca</div>
    </PageLayout>
  );
}
