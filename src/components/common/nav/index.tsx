import * as React from "react";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import { ContactDropdown } from "../contact/contact-nav-dropdown";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { BigLogo, Logo } from "../logos/laugh";
import { AnimatePresence, motion } from "framer-motion";
import { MobileMenu } from "./mobile";

export const links = [
  {
    label: "Projects",
    url: "/work",
  },
  {
    label: "Ways to connect",
    url: "/ways-to-connect",
  },
  {
    label: "About us",
    url: "/about",
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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
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

  const lenis = useLenis();

  React.useEffect(() => {
    if (lenis) {
      if (mobileMenuOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [mobileMenuOpen, lenis]);

  return (
    <>
      <header
        style={{
          zIndex: 1000,
        }}
        className={cn("container sm:!mt-4 md:!mt-10 !py-6", className, {
          contrast: hasScrolled || isPlaying,
          "text-white": color === "white",
          "text-black": color === "black",
        })}
      >
        <div
          className={cn(
            "flex items-center justify-between relative flex-1 text-current"
          )}
        >
          <Link
            href="/"
            aria-label="logo home"
            className={cn("", {
              contrast: hasScrolled || isPlaying,
              "text-white": color === "white",
              "text-black": color === "black",
            })}
          >
            {router.asPath === "/" ? (
              <BigLogo className="text-current" />
            ) : (
              <Logo className="text-current" />
            )}
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
            <button
              name="open menu"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              {mobileMenuOpen ? (
                <Cross1Icon className="text-current w-5 h-5" />
              ) : (
                <HamburgerMenuIcon className="text-current w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 900 }}
            className="fixed sm:hidden top-0 left-0 w-full h-full bg-black bg-opacity-95 pt-56 flex flex-col items-center px-4"
          >
            <MobileMenu links={links} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
