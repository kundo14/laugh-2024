import * as React from "react";
import VerticalPageLayout from "@/components/layouts/vertical-page";
import { defaultMeta } from "@/components/common/head";
import { TextAndImages } from "@/components/sections/verticals/text-and-images";
import FadeIn from "@/components/common/fadeIn";
import { TextMarquee } from "@/components/common/text-marquee";
import ScrollGrow from "@/components/common/glow-up-image";

export default function PassionLove() {
  return (
    <VerticalPageLayout
      headProps={{
        ...defaultMeta,
        title: "Passion Love | Laugh",
      }}
      logo={
        <img
          src="/images/logos/passion-love.svg"
          className="w-[160px] sm:w-[200px] h-auto"
          alt="home logo"
        />
      }
      color="red"
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
            "**Our passion for projects is unmatched.**\n\nWe're fans at heart, bringing our love for the game into everything we do.\n\nWe create special teams for our partners with an unwavering commitment.\n\nWe build engaging communities on social media, craft creative strategy and high-quality productions, and provide expert management for sports sponsorships.\n\nEach partner shows how much we care about the game and giving our best every time."
          }
          color="red"
        />
      </div>
      <TextMarquee
        text="We create exclusive passion love teams for each partner, offering various services to enhance their interaction with fans."
        color="red"
      />
      <div className="container">
        <div className="flex-1 flex flex-col gap-2">
          <ScrollGrow>
            <img
              src="/images/assets/work-1.jpg"
              alt="work hero"
              className="w-full max-w-full h-auto"
            />
          </ScrollGrow>
          <div className="grid sm:grid-cols-2 gap-2">
            <ScrollGrow>
              <img
                src="/images/assets/work-vertical-1.jpg"
                alt="work hero"
                className="w-full max-w-full h-auto"
              />
            </ScrollGrow>
            <ScrollGrow>
              <img
                src="/images/assets/work-vertical-2.jpg"
                alt="work hero"
                className="hidden sm:flex w-full max-w-full h-auto"
              />
            </ScrollGrow>
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
