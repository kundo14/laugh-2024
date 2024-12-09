import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/common/animations/fade-in";
import { FeaturedWorks } from "./featured";
import { cn } from "@/lib/cn";
import { CustomDraggable } from "@/components/common/draggable";
import { useMedia } from "use-media";
import Marquee from "react-fast-marquee";
import { CarouselSlideProps } from "@/models";
import ScrollParallax from "@/components/common/animations/parallax";

const clients: CarouselSlideProps[] = [
  {
    title: "first",
    image: "/images/clients/clientes-01.svg",
  },
  {
    title: "second",
    image: "/images/clients/clientes-02.svg",
  },
  {
    title: "third",
    image: "/images/clients/clientes-03.svg",
  },
  {
    title: "fourth",
    image: "/images/clients/clientes-04.svg",
  },
  {
    title: "fifth",
    image: "/images/clients/clientes-05.svg",
  },
  {
    title: "sixth",
    image: "/images/clients/clientes-06.svg",
  },
  {
    title: "seventh",
    image: "/images/clients/clientes-07.svg",
  },
  {
    title: "eighth",
    image: "/images/clients/clientes-08.svg",
  },
  {
    title: "ninth",
    image: "/images/clients/clientes-09.svg",
  },
  {
    title: "tenth",
    image: "/images/clients/clientes-10.svg",
  },
  {
    title: "eleventh",
    image: "/images/clients/clientes-11.svg",
  },
  {
    title: "twelfth",
    image: "/images/clients/clientes-12.svg",
  },
  {
    title: "thirteenth",
    image: "/images/clients/clientes-13.svg",
  },
  {
    title: "fourteenth",
    image: "/images/clients/clientes-14.svg",
  },
  {
    title: "fifteenth",
    image: "/images/clients/clientes-15.svg",
  },
  {
    title: "sixteenth",
    image: "/images/clients/clientes-16.svg",
  },
  {
    title: "seventeenth",
    image: "/images/clients/clientes-17.svg",
  },
  {
    title: "eighteenth",
    image: "/images/clients/clientes-18.svg",
  },
  {
    title: "nineteenth",
    image: "/images/clients/clientes-19.svg",
  },
  {
    title: "twentieth",
    image: "/images/clients/clientes-20.svg",
  },
  {
    title: "twenty-first",
    image: "/images/clients/clientes-21.svg",
  },
];

export const Clients = ({ className }: { className?: string }) => {
  const [visibleClients, setVisibleClients] = React.useState(
    clients.slice(0, 7)
  );
  const [index, setIndex] = React.useState(0);
  const [playingClient, setPlayingClient] = React.useState<null | number>(null);

  const isMobile = useMedia({ maxWidth: "1024px" });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 7) % clients.length);
      setVisibleClients(clients.slice(index, index + 7));
    }, 3000); // Change logos every 3 seconds
    return () => clearInterval(interval);
  }, [index]);

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
            <span className="font-bold">sport&apos;s greatest fans</span>
          </div>
        </FadeIn>
      </div>
      {isMobile ? (
        <Marquee speed={150}>
          {clients.map((client, i) => (
            <img
              key={i}
              src={client.image}
              alt={client.title}
              className="w-24 sm:w-28 md:w-32 h-auto ml-12 mt-12"
            />
          ))}
        </Marquee>
      ) : (
        <div className="grid grid-cols-7 gap-x-12 lg:gap-x-16 xl:gap-x-20 gap-y-6 mt-12 items-center">
          {clients.map((client, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <ScrollParallax parallaxSpeed={i * 0.05}>
                <img
                  key={client.image}
                  src={client.image}
                  alt={client.title}
                  className="w-full h-auto"
                />
              </ScrollParallax>
            </FadeIn>
          ))}
        </div>
        // <div className="grid grid-cols-7 gap-x-12 lg:gap-x-16 xl:gap-x-20 mt-12 h-[180px] items-center">
        //   {visibleClients.map((client, i) => (
        //     <FadeIn key={i} delay={i * 0.1}>
        //       <AnimatePresence mode="wait">
        //         <motion.img
        //           key={client.image}
        //           src={client.image}
        //           alt={client.title}
        //           className="w-full h-auto"
        //           initial={{ rotateX: 90, opacity: 0 }}
        //           animate={{ rotateX: 0, opacity: 1 }}
        //           exit={{ rotateX: -90, opacity: 0 }}
        //           transition={{ duration: 0.6, delay: i * 0.1 }}
        //         />
        //       </AnimatePresence>
        //     </FadeIn>
        //   ))}
        // </div>
      )}
    </div>
  );
};
