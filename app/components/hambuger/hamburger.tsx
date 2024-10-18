"use client";

import { useGlobalContext } from "@/app/context/global-context";
import { cn } from "../../utils/cn";
import ThemeSwitcher from "../theme-switcher/theme-switcher";

function Hamburger() {
  const { isDrawerOpen, setIsDrawerOpen } = useGlobalContext();

  return (
    <>
      <ThemeSwitcher />
      <button
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        id="header-theme-button"
        aria-label={`Toggle light and dark theme`}
        className={cn(
          "flex md:hidden",
          "size-9 rounded-full p-2 items-center justify-center",
          "bg-transparent hover:bg-black/5 dark:hover:bg-white/20",
          "stroke-current hover:stroke-black hover:dark:stroke-white",
          "border border-black/10 dark:border-white/25",
          "transition-colors duration-300 ease-in-out"
        )}
      >
        {isDrawerOpen ? (
          <svg
            id="x"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            width={24}
            height={24}
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          <svg
            id="menu"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            width={24}
            height={24}
          >
            <path d="M3 12h18" />
            <path d="M3 6h18" />
            <path d="M3 18h18" />
          </svg>
        )}
      </button>
    </>
  );
}

export default Hamburger;
