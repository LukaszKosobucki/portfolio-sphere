"use client";

import Hamburger from "@/app/components/hambuger/hamburger";
import Container from "@/app/shared/components/container/container";
import { Entry, EntrySkeletonType } from "contentful";
import { useEffect, useState } from "react";

function Navbar({
  socials,
  author,
  title,
}: {
  socials: Entry<EntrySkeletonType, undefined, string>[];
  author: string;
  title: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      data-testid="header"
      className={` ${scrolled ? "scrolled" : ""} fixed top-0 w-full h-16 z-50`}
    >
      <Container size="md">
        <div className="relative h-full w-full">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold">
            <a
              href="/"
              className="flex gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
            >
              <div>{author}</div>
            </a>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <nav className="hidden md:flex items-center justify-center text-sm gap-1">
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
          </div>

          <div className="buttons absolute right-0 top-1/2 -translate-y-1/2 flex gap-1">
            <Hamburger />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
