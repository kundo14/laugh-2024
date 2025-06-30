import * as React from "react";
import FadeIn from "@/components/common/animations/fade-in";
import { cn } from "@/lib/cn";
import { CustomDraggable } from "@/components/common/draggable";
import { useMedia } from "use-media";
import Marquee from "react-fast-marquee";
import { Client } from "@/models";
import ScrollParallax from "@/components/common/animations/parallax";

export const Clients = ({
  className,
  clients,
}: {
  className?: string;
  clients: Client[];
}) => {
  const [index, setIndex] = React.useState(0);

  const isMobile = useMedia({ maxWidth: "1024px" });

  return (
    <div
      id="clients"
      className={cn("flex flex-col w-full items-center relative", className)}
    >
      <CustomDraggable>
        <img
          src={"/images/stickers/pelota.png"}
          alt="sticker"
          className="w-[160px] sm:w-[180px] h-auto absolute -top-8 md:top-0 lg:top-12 right-0"
          draggable={false}
        />
      </CustomDraggable>
      <div className="flex flex-col items-center text-18 md:text-24 italic uppercase leading-[1.8] md:leading-relaxed text-center">
        <FadeIn>
          <p className="font-light">proud to collaborate with</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="relative max-w-max">
            <CustomDraggable>
              <img
                src="/images/scratches/yellow-underline.svg"
                alt="underline clients"
                className="w-full h-auto absolute -bottom-5 left-0"
                draggable={false}
              />
            </CustomDraggable>
            <span className="font-bold">sport&apos;s greatest brands</span>
          </div>
        </FadeIn>
      </div>
      {isMobile ? (
        <Marquee speed={150}>
          {clients.map((client, i) => (
            <img
              key={i}
              src={client.logo}
              alt={client.name}
              className="w-32 h-auto ml-4 mt-12"
            />
          ))}
        </Marquee>
      ) : (
        <div className="flex flex-wrap mt-12 gap-x-2 items-center justify-center">
          {clients.map((client, i) => (
            <FadeIn key={i} delay={i * 0.01} className="">
              <ScrollParallax parallaxSpeed={i * 0.05}>
                <img
                  key={client.logo}
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-auto"
                />
              </ScrollParallax>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
};
