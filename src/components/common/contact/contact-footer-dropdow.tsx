import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../design-system/dropdown";

export const ContactFooterDropdown = ({}: {}) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          name="contact"
          className="text-12 sm:text-14 uppercase group-hover:opacity-50 hover:!opacity-100 transition-all duration-150 !text-black"
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
