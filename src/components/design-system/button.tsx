import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import Link from "next/link";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center border justify-center font-medium transition-colors focus:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-black !text-white md:hover:bg-gray-800 border-gray-800 md:hover:border-gray-800 focus:ring-1 focus:ring-black focus:ring-offset-2",
        destructive:
          "bg-red-500 border-red-500 text-white md:hover:bg-red-600 md:hover:border-red-600 focus:ring-1 focus:ring-red-600 focus:ring-offset-2",
        outline:
          "bg-transparent border-gray-400 md:hover:opacity-70 focus:ring-1 focus:ring-gray-400 focus:ring-offset-2",
        subtle:
          "bg-gray-100 text-gray-900 md:hover:border-gray-300 border-gray-200 focus:ring-1 focus:ring-gray-100 focus:ring-offset-2",
        ghost:
          "bg-transparent border-transparent md:hover:border-gray-100 md:hover:bg-gray-100 data-[state=open]:bg-transparent ",
        link: "bg-transparent border-transparent underline-offset-3 md:hover:text-gray-400 text-gray-900 md:hover:bg-transparent",
        selected:
          "bg-blue-100 border-blue-200 text-gray-900 md:hover:border-blue-300 focus:ring-1 focus:ring-gray-800 focus:ring-offset-2",
      },
      size: {
        default: "py-2 px-4 text-[14px] rounded-sm h-[35px]",
        xs: "py-[2px] px-2 text-[12px] rounded-full",
        sm: "py-[6px] text-13 px-3 rounded-sm h-[32px]",
        lg: "py-2 px-8 rounded-sm text-[14px] h-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
export interface ButtonLinkProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, href, variant, size, ...props }, ref) => {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { Button, buttonVariants, ButtonLink };
