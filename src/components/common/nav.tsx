import { cn } from "@/lib/cn";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../design-system/dropdown";
import { ContactDropdown } from "./contact-dropdown";

export const links = [
  {
    label: "Work",
    url: "/work",
  },
  {
    label: "Passion Love",
    url: "/passion-love",
  },
  {
    label: "360",
    url: "/360",
  },
  {
    label: "Studios",
    url: "/studios",
  },
];

export const Nav = () => {
  return (
    <header className={cn("container !mt-10 !py-6")}>
      <div className="flex justify-between relative flex-1">
        <Link href="/" aria-label="logo home">
          <img
            src="/images/logos/black.svg"
            className="w-24 h-auto"
            alt="home logo"
          />
        </Link>
        <div className="flex flex-col absolute top-0 right-0 sm:relative sm:flex-row items-end sm:items-center gap-2 sm:gap-6 group">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-12 uppercase text-white group-hover:opacity-50 hover:!opacity-100 transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
          <ContactDropdown />
        </div>
      </div>
    </header>
  );
};
