import { cn } from "@/lib/cn";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../design-system/dropdown";
import { ContactDropdown } from "./contact/contact-nav-dropdown";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

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

export const Nav = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <header className={cn("container sm:!mt-4 md:!mt-10 !py-6", className)}>
      <div className="flex items-center justify-between relative flex-1">
        <Link href="/" aria-label="logo home">
          <img
            src="/images/logos/black.svg"
            className="w-24 h-auto"
            alt="home logo"
          />
        </Link>
        <div className="hidden sm:flex flex-col absolute top-0 right-0 sm:relative sm:flex-row items-end sm:items-center gap-2 sm:gap-6 group">
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
        <div className="flex sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HamburgerMenuIcon className="text-white w-5 h-5" />
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
