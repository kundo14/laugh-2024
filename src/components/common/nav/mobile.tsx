import Link from "next/link";

export const MobileMenu = ({
  links,
}: {
  links: { label: string; url: string }[];
}) => {
  return (
    <>
      <div className=" flex flex-col items-center">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="text-24 uppercase text-white font-archivoBlack"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-start w-full mt-32">
        <p className="text-24 uppercase text-yellow font-archivoBlack">
          Contact
        </p>
        <div className="flex items-center flex-wrap gap-x-8 gap-y-2 mt-6">
          <Link
            href="mailto:info@wearelaugh.com"
            target="_blank"
            className="text-white text-16 uppercase"
          >
            email
          </Link>
          <Link
            href={"https://www.instagram.com/weare_laugh/"}
            target="_blank"
            className="text-white text-16 uppercase"
          >
            instagram
          </Link>
          <Link
            href={"https://www.youtube.com/@wearelaugh"}
            target="_blank"
            className="text-white text-16 uppercase"
          >
            youtube
          </Link>
          <Link
            href="https://www.linkedin.com/company/wearelaugh/?viewAsMember=true"
            target="_blank"
            className="text-white text-16 uppercase"
          >
            linkedin
          </Link>
        </div>
      </div>
    </>
  );
};
