import * as React from "react";
import VerticalPageLayout from "@/components/layouts/vertical-page";
import { defaultMeta } from "@/components/common/head";
import { TextAndImages } from "@/components/sections/verticals/text-and-images";

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
          className="w-[200px] h-auto"
          alt="home logo"
        />
      }
      color="red"
    >
      <div className="container !mt-20 z-40">
        <TextAndImages
          images={[
            "/works/boca.jpg",
            "/works/fifa.jpg",
            "/works/heroes.jpg",
            "/works/boca.jpg",
          ]}
          markdown={
            "# Passion Love\n \n \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui nec nunc ultricies ultricies. Sed nec nunc ultricies, ultricies nunc nec, ultricies nunc. Nullam nec dui nec nunc ultricies ultricies. Sed nec nunc ultricies, ultricies nunc nec, ultricies nunc. Nullam nec dui nec nunc ultricies ultricies. Sed nec nunc ultricies, ultricies nunc nec, ultricies nunc."
          }
        />
      </div>
      <img
        src="/images/textures/paper.jpg"
        className="w-full h-full absolute top-0 left-0 opacity-10 z-0"
        alt="texture bg"
      />
    </VerticalPageLayout>
  );
}
