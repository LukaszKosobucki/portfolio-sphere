"use client";

import { useGlobalContext } from "@/app/context/global-context";
import { Entry, EntrySkeletonType } from "contentful";
import ThemeSwitcher from "../theme-switcher/theme-switcher";

function Drawer({
  socials,
  title,
}: {
  socials: Entry<EntrySkeletonType, undefined, string>[];
  title: string;
}) {
  const { isDrawerOpen } = useGlobalContext();

  return (
    <div
      id="drawer"
      className={`${isDrawerOpen ? "h-full" : ""} fixed inset-0 h-0 z-40 overflow-hidden flex flex-col items-center justify-center md:hidden bg-neutral-100 dark:bg-neutral-900 transition-[height] duration-300 ease-in-out`}
    >
      <nav className="flex flex-col items-center space-y-2">
        {socials &&
          socials.map((social) => (
            <a
              data-testid={social.fields.name}
              key={`${social.fields.name}`}
              href={`${social.fields.href}`}
              target="_blank"
              aria-label={`${title} on ${social.fields.name}`}
              className="group size-10 rounded-full p-2 items-center justify-center hover:bg-black/5 dark:hover:bg-white/20  blend"
            >
              <svg className="size-full fill-current group-hover:fill-black group-hover:dark:fill-white blend">
                <use href={`/social.svg#${social.fields.icon}`} />
              </svg>
            </a>
          ))}
      </nav>
      <div className="flex gap-1 mt-5">
        <ThemeSwitcher allowMobile={true} />
      </div>
    </div>
  );
}

export default Drawer;
