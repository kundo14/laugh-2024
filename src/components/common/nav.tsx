import { cn } from "@/lib/cn";
import Link from "next/link";

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
  {
    label: "Contact",
    url: "/#contact",
  },
];

export const Nav = () => {
  return (
    <header className={cn("container !mt-10 !py-6")}>
      <Link href="/" aria-label="logo home">
        <img
          src="/images/logos/black.svg"
          className="w-24 h-auto"
          alt="home logo"
        />
      </Link>
      <div className="flex items-center gap-6 group">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="text-12 uppercase text-white group-hover:opacity-50 hover:!opacity-100 transition-all duration-150"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};
