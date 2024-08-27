import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/common/fadeIn";
import { FeaturedWorks } from "./featured";
import { cn } from "@/lib/cn";
import { CustomDraggable } from "@/components/common/draggable";
import { useMedia } from "use-media";
import Marquee from "react-fast-marquee";
import { CarouselSlideProps } from "@/models";

const clients: CarouselSlideProps[] = [
  {
    title: "adidas",
    image: "/images/clients/1.svg",
    description: "adidas",
    link: "/work/adidas",
  },
  {
    title: "easports",
    image: "/images/clients/2.svg",
    description: "easports",
    link: "/work/easports",
  },
  {
    title: "arg",
    image: "/images/clients/3.svg",
    description: "arg",
    link: "/work/arg",
  },
  {
    title: "netflix",
    image: "/images/clients/4.svg",
    description: "netflix",
    link: "/work/netflix",
  },
  {
    title: "nike",
    image: "/images/clients/5.svg",
    description: "netflix",
    link: "/work/netflix",
  },
  {
    title: "arg2",
    image: "/images/clients/3.svg",
    description: "netflix",
    link: "/work/netflix",
  },
  {
    title: "adidas2",
    image: "/images/clients/1.svg",
    description: "netflix",
    link: "/work/netflix",
  },
  {
    title: "nike2",
    image: "/images/clients/5.svg",
    description: "netflix",
    link: "/work/netflix",
  },
  {
    title: "easports2",
    image: "/images/clients/2.svg",
    description: "netflix",
    link: "/work/netflix",
  },
  {
    title: "netflix2",
    image: "/images/clients/4.svg",
    description: "netflix",
    link: "/work/netflix",
  },
];

export const Clients = ({ className }: { className?: string }) => {
  const [visibleClients, setVisibleClients] = React.useState(
    clients.slice(0, 5)
  );
  const [index, setIndex] = React.useState(0);
  const [playingClient, setPlayingClient] = React.useState<null | number>(null);

  const isMobile = useMedia({ maxWidth: "768px" });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 5) % clients.length);
      setVisibleClients(clients.slice(index, index + 5));
    }, 3000); // Change logos every 3 seconds
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      id="clients"
      className={cn("flex flex-col w-full items-center", className)}
    >
      <div className="flex flex-col items-center text-18 italic uppercase leading-[1.8] text-center">
        <p className="font-light">we have worked with some of the most</p>
        <div className="relative max-w-max">
          <CustomDraggable>
            <img
              src="/images/scratches/yellow-underline.svg"
              alt="underline clients"
              className="w-full h-auto absolute -bottom-5 left-0"
              draggable={false}
            />
          </CustomDraggable>
          {""}
          <span className="font-bold">ambitious and exciting brands</span>
        </div>
      </div>
      {isMobile ? (
        <Marquee>
          {clients.map((client, i) => (
            <img
              key={i}
              src={client.image}
              alt={client.title}
              className="w-32 h-auto ml-12 mt-12"
            />
          ))}
        </Marquee>
      ) : (
        <div className="grid grid-cols-5 gap-x-12 lg:gap-x-16 xl:gap-x-20 mt-12 h-[160px]">
          {visibleClients.map((client, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={client.image}
                  src={client.image}
                  alt={client.title}
                  className="w-full h-auto"
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: -90, opacity: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                />
              </AnimatePresence>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
};
