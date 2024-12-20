import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import FadeIn from "@/components/common/animations/fade-in";
import { CustomDraggable } from "@/components/common/draggable";
import Link from "next/link";

function ContactPage() {
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Contact Us | Laugh",
        canonical: "https://wearelaugh.com/contact",
      }}
      textWhite
      withoutBackgroundTexture
      footerWhite
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-texture"></div>
      <div className="contain flex flex-col items-center z-10 relative mt-40">
        <CustomDraggable>
          <img
            src="/images/stickers/sifon.png"
            alt="drag-me-star"
            className="hidden sm:flex w-[180px] h-auto absolute top-20 right-20"
            draggable={false}
          />
        </CustomDraggable>
        <CustomDraggable>
          <img
            src="/images/stickers/argentina.png"
            alt="drag-me-star"
            className="hidden sm:flex w-[180px] h-auto absolute left-10 bottom-10"
            draggable={false}
          />
        </CustomDraggable>
        <div className="flex flex-col items-center">
          <FadeIn>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              We are fans.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              We are passion.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              We are a <b>creative power haus,</b>
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-16 lg:text-18 xl:text-20 text-white leading-relaxed">
              Where ideas come to life.
            </p>
          </FadeIn>
          <FadeIn className="relative !pt-14" delay={0.8}>
            <CustomDraggable>
              <img
                src="/images/scratches/yellow-arrow-2.svg"
                alt="drag-me-star"
                className="w-[64px] sm:w-[80px] h-auto absolute -top-6 left-[110%] sm:left-[120%]"
                draggable={false}
              />
            </CustomDraggable>
            <Link
              href="mailto:info@wearelaugh.com"
              className="text-yellow text-16 lg:text-18 xl:text-20 hover:underline"
            >
              info@wearelaugh.com
            </Link>
          </FadeIn>
        </div>
      </div>
    </PageLayout>
  );
}

export default ContactPage;
