import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../design-system/dropdown";

export const ContactDropdown = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          name="contact"
          className="text-12 uppercase group-hover:opacity-50 hover:!opacity-100"
        >
          contact
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={10}>
        <DropdownMenuItem
          onSelect={() => {
            // target blank
            router.push("mailto:info@wearelaugh.com");
          }}
        >
          email
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            // target blank
            router.push("https://www.instagram.com/weare_laugh/");
          }}
        >
          instagram
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            // target blank
            router.push("https://www.youtube.com/@wearelaugh");
          }}
        >
          youtube
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
