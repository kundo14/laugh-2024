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
    <div
      className={cn(
        "flex items-center justify-between container !mt-10 sticky top-0 !py-6 z-50"
      )}
    >
      <img
        src="/images/logos/black.svg"
        className="w-24 h-auto"
        alt="home logo"
      />
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="text-12 text-black uppercase"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
