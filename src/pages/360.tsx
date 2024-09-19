import * as React from "react";
import VerticalPageLayout from "@/components/layouts/vertical-page";
import { defaultMeta } from "@/components/common/head";
import { TextAndImages } from "@/components/sections/verticals/text-and-images";
import FadeIn from "@/components/common/fadeIn";
import { TextMarquee } from "@/components/common/text-marquee";

export default function StudiosPage() {
  return (
    <VerticalPageLayout
      headProps={{
        ...defaultMeta,
        title: "360 | Laugh",
      }}
      logo={
        <img
          src="/images/logos/360.svg"
          className="w-[160px] sm:w-[200px] h-auto"
          alt="home logo"
        />
      }
      color="yellow"
    >
      <div className="container relative !mt-20 z-40">
        <TextAndImages
          images={[
            "/images/assets/film.jpg",
            "/images/assets/mexico.jpg",
            "/images/assets/mexico-1.jpg",
            "/images/assets/beach.jpg",
          ]}
          markdown={
            "**Sparking Creativity, Blowing Minds.**\n\nIn the exciting world of sports, we're the innovative thinkers, making campaigns that surprise and impress. With passion driving us, we're the creators of the most exciting experiences. Crafting Sports Epics, Frame by Frame, Story by Story."
          }
          color="yellow"
        />
      </div>
      <TextMarquee
        text="We know how to connect with the fan through an authentic, fresh, original strategy that enhances this bond between our partner and its target audience."
        color="yellow"
      />
      <div className="container">
        <div className="flex-1 flex flex-col gap-2">
          <FadeIn delay={0.3}>
            <img
              src="/images/assets/work-1.jpg"
              alt="work hero"
              className="w-full h-auto"
            />
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-2">
            <FadeIn delay={0.6}>
              <img
                src="/images/assets/work-vertical-1.jpg"
                alt="work hero"
                className="w-full h-auto"
              />
            </FadeIn>
            <FadeIn delay={0.9}>
              <img
                src="/images/assets/work-vertical-2.jpg"
                alt="work hero"
                className="hidden sm:flex w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>
      </div>
      <img
        src="/images/textures/paper.jpg"
        className="w-full h-full absolute top-0 left-0 opacity-10 z-0"
        alt="texture bg"
      />
    </VerticalPageLayout>
  );
}
