import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../design-system/dropdown";

export const ContactDropdown = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          name="contact"
          className="text-12 uppercase text-white group-hover:opacity-50 hover:!opacity-100 transition-all duration-150"
        >
          contact
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={10}>
        <DropdownMenuItem>email</DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            // target blank
            router.push("https://www.instagram.com/weare_laugh/");
          }}
        >
          instagram
        </DropdownMenuItem>
        <DropdownMenuItem>youtube</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
