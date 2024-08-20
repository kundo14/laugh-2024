import { cn } from "@/lib/cn";
import Link from "next/link";
import { ContactDropdown } from "./contact/contact-nav-dropdown";
import { ContactFooterDropdown } from "./contact/contact-footer-dropdow";

const links = [
  {
    label: "work",
    url: "/work",
  },
  {
    label: "passion love",
    url: "/passion-love",
  },
  {
    label: "360",
    url: "/360",
  },
  {
    label: "studios",
    url: "/studios",
  },
];

export const Footer = ({
  className,
  color,
}: {
  className?: string;
  color?: "red" | "gold" | "yellow";
}) => {
  return (
    <footer
      className={cn(
        "flex flex-col lg:flex-row justify-between lg:items-end gap-8 lg:gap-16 !mt-80 container !pb-10",
        className
      )}
    >
      <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row lg:flex-col justify-between w-full flex-1">
        <div className="flex flex-col lg:mb-14">
          <Link
            href="https://www.instagram.com/weare_laugh/"
            target="_blank"
            className="uppercase text-16 sm:text-18 text-black mb-1.5 hover:underline"
          >
            instagram
          </Link>
          <Link
            href=""
            target="_blank"
            className="uppercase text-16 sm:text-18 text-black hover:underline"
          >
            youtube
          </Link>
        </div>
        <div className="flex justify-between lg:w-full">
          <p className="hidden lg:flex text-14 uppercase">
            ©{new Date().getFullYear()}
          </p>
          <div className="flex items-end lg:items-center gap-6 group">
            {links.map((link, index) => (
              <Link
                href={link.url}
                key={index}
                className={cn(
                  "text-12 sm:text-14 uppercase group-hover:opacity-50 hover:!opacity-100 transition-all duration-150"
                )}
              >
                {link.label}
              </Link>
            ))}
            <ContactFooterDropdown color={color} />
          </div>
        </div>
      </div>
      <p
        className={cn(
          "font-archivoBlack text-[25vw] sm:text-[26.20vw] lg:text-[120px] xl:text-[180px] tracking-[-0.08em] uppercase min-w-max leading-none -mb-6",
          {
            "text-red": color === "red",
            "text-yellow": color === "yellow",
            "text-gold": color === "gold",
            "text-black": !color,
          }
        )}
      >
        Laugh
      </p>
    </footer>
  );
};
