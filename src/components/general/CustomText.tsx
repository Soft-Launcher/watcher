import type { ReactNode } from "react";
import { cn } from "../../utilities/cn";

interface Props {
  variant?: "title" | "subtitle" | "body";
  children?: ReactNode;
  className?: string;
}
export const CustomText = ({ variant = "body", ...props }: Props) => {
  return (
    <div
      className={cn(
        {
          "font-titleLarge": variant === "title",
          "font-titleMedium": variant === "subtitle",
          "font-body": variant === "body",
        },
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
