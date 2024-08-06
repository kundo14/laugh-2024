import { cn } from "@/lib/cn";
import Link from "next/link";

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
  {
    label: "contact",
    url: "/#contact",
    underline: true,
  },
];

export const Footer = ({ className }: { className?: string }) => {
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
            href=""
            className="uppercase text-16 sm:text-18 text-black mb-1.5"
          >
            instagram
          </Link>
          <Link href="" className="uppercase text-16 sm:text-18 text-black">
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
                  "text-12 sm:text-14 uppercase group-hover:opacity-50 hover:!opacity-100 transition-all duration-150",
                  {
                    scratch: link.underline,
                  }
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="font-archivoBlack text-[25vw] sm:text-[26.20vw] lg:text-[120px] xl:text-[180px] tracking-[-0.08em] uppercase text-black min-w-max leading-none -mb-6">
        Laugh
      </p>
    </footer>
  );
};
