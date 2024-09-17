import * as React from "react";
import { cn } from "@/lib/cn";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../design-system/dropdown";
import { ContactDropdown } from "./contact/contact-nav-dropdown";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { Logo } from "./logos/laugh";

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

export const Nav = ({
  className,
  isPlaying,
  color = "black",
}: {
  className?: string;
  isPlaying?: boolean;
  color?: "black" | "white";
}) => {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn("container sm:!mt-4 md:!mt-10 !py-6", className, {
        contrast: hasScrolled || isPlaying,
        "text-white": color === "white",
        "text-black": color === "black",
      })}
    >
      <div className="flex items-center justify-between relative flex-1 text-current">
        <Link
          href="/"
          aria-label="logo home"
          className={cn("", {
            contrast: hasScrolled || isPlaying,
            "text-white": color === "white",
            "text-black": color === "black",
          })}
        >
          <Logo className="text-current" />
        </Link>
        <div className="hidden sm:flex flex-col absolute top-0 right-0 sm:relative sm:flex-row items-end sm:items-center gap-2 sm:gap-6 group">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-12 uppercase text-current group-hover:opacity-50 hover:!opacity-100"
            >
              {link.label}
            </Link>
          ))}
          <ContactDropdown />
        </div>
        <div className="flex sm:hidden text-current">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <HamburgerMenuIcon className="text-current w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={10}>
              {links.map((link) => (
                <DropdownMenuItem
                  key={link.url}
                  onSelect={() => {
                    router.push(link.url);
                  }}
                >
                  {link.label}
                </DropdownMenuItem>
              ))}
              {/* in mobile, the contact item redirects to the footer */}
              <DropdownMenuItem
                onSelect={() => {
                  router.push("#contact");
                }}
              >
                CONTACT
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
