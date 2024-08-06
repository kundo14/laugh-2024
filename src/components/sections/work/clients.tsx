import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/common/fadeIn";
import { FeaturedWorks } from "./featured";
import { cn } from "@/lib/cn";
import { CustomDraggable } from "@/components/common/draggable";

const clients = [
  {
    name: "adidas",
    logo: "/images/clients/1.svg",
  },
  {
    name: "easports",
    logo: "/images/clients/2.svg",
  },
  {
    name: "arg",
    logo: "/images/clients/3.svg",
  },
  {
    name: "netflix",
    logo: "/images/clients/4.svg",
  },
  {
    name: "nike",
    logo: "/images/clients/5.svg",
  },
  {
    name: "arg2",
    logo: "/images/clients/3.svg",
  },
  {
    name: "adidas2",
    logo: "/images/clients/1.svg",
  },
  {
    name: "nike2",
    logo: "/images/clients/5.svg",
  },
  {
    name: "easports2",
    logo: "/images/clients/2.svg",
  },
  {
    name: "netflix2",
    logo: "/images/clients/4.svg",
  },
];

export const Clients = ({ className }: { className?: string }) => {
  const [visibleClients, setVisibleClients] = React.useState(
    clients.slice(0, 5)
  );
  const [index, setIndex] = React.useState(0);

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
        <p className="font-bold relative max-w-max">
          <CustomDraggable>
            <img
              src="/images/scratches/yellow-underline.svg"
              alt="underline clients"
              className="w-full h-auto absolute -bottom-5 left-0"
              draggable={false}
            />
          </CustomDraggable>
          ambitious and exciting brands
        </p>
      </div>
      <div className="grid grid-cols-5 gap-x-20 mt-12 h-[160px]">
        {visibleClients.map((client, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <AnimatePresence mode="wait">
              <motion.img
                key={client.logo}
                src={client.logo}
                alt={client.name}
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
    </div>
  );
};
