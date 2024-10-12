"use client";

import { cn } from "@/app/utils/cn";
import { useTheme } from "next-themes";

export default function ThemeSwitcher({
  allowMobile = false,
}: {
  allowMobile?: boolean;
}) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() =>
        resolvedTheme === "light" ? setTheme("dark") : setTheme("light")
      }
      id="header-theme-button"
      aria-label={`Toggle light and dark theme`}
      className={cn(
        allowMobile ? "flex" : "hidden md:flex",
        "size-9 rounded-full p-2 items-center justify-center",
        "bg-transparent hover:bg-black/5 dark:hover:bg-white/20",
        "stroke-current hover:stroke-black hover:dark:stroke-white",
        "border border-black/10 dark:border-white/25",
        "transition-colors duration-300 ease-in-out"
      )}
    >
      {resolvedTheme === "light" ? (
        <svg
          id="sun"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          width={24}
          height={24}
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2" />
          <path d="M12 21v2" />
          <path d="M4.22 4.22l1.42 1.42" />
          <path d="M18.36 18.36l1.42 1.42" />
          <path d="M1 12h2" />
          <path d="M21 12h2" />
          <path d="M4.22 19.78l1.42-1.42" />
          <path d="M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg
          id="moon"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          width={24}
          height={24}
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}
