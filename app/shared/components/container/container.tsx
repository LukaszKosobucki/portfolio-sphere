import { cn } from "@/app/utils/cn";
import React from "react";

type Props = {
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  children: React.ReactNode;
};
const Container: React.FC<Props> = ({ size, children }) => {
  return (
    <div
      className={cn(
        "w-full h-full mx-auto px-5",
        size === "sm" && "max-w-screen-sm",
        size === "md" && "max-w-screen-md",
        size === "lg" && "max-w-screen-lg",
        size === "xl" && "max-w-screen-xl",
        size === "2xl" && "max-w-screen-2xl",
      )}
    >
      {children}
    </div>
  );
};

export default Container;