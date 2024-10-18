"use client";

import { Entry, EntrySkeletonType } from "contentful";
import Container from "../navbar/container";

function Footer({
  socials,
  title,
  resume,
}: {
  socials: Entry<EntrySkeletonType, undefined, string>[];
  title: string;
  resume: Entry<EntrySkeletonType, undefined, string>[];
}) {
  const goBackToTop = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="relative bg-white dark:bg-black">
      <div className="animate">
        <section className="py-5">
          <Container size="md">
            <div className="flex items-center justify-center sm:justify-end">
              <button
                onClick={(event) => goBackToTop(event)}
                id="back-to-top"
                aria-label="Back to top of page"
                className="group flex w-fit p-1.5 gap-1.5 text-sm items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-90"
                >
                  <line
                    x1="19"
                    y1="12"
                    x2="5"
                    y2="12"
                    className="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
                  />
                  <polyline
                    points="12 19 5 12 12 5"
                    className="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
                  />
                </svg>
                <div className="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
                  Back to top
                </div>
              </button>
            </div>
          </Container>
        </section>

        <section className=" py-5 overflow-hidden whitespace-nowrap border-t border-black/10 dark:border-white/25">
          <Container size="md">
            <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="order-2 sm:order-1 flex flex-col items-center justify-center sm:items-start">
                <div className="text-sm mt-2">
                  <a
                    href={`${(resume[0].fields.file as EntrySkeletonType)?.fields.file.url}`}
                    target="_blank"
                    className="group flex gap-1 w-fit font-semibold text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-current group-hover:stroke-black group-hover:dark:stroke-white -rotate-90"
                    >
                      <line
                        x1="22"
                        y1="12"
                        x2="8"
                        y2="12"
                        className="scale-x-70 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
                      />
                      <polyline
                        points="15 19 8 12 15 5"
                        className="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
                      />
                      <line x1="7" y1="5" x2="7" y2="19" />
                    </svg>
                    {`${resume[0].fields.text}`}
                  </a>
                </div>
              </div>

              <div className="order-1 sm:order-2 flex justify-center sm:justify-end">
                <div className="flex flex-wrap gap-1 items-center justify-center">
                  {socials &&
                    socials.map((social) => (
                      <a
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
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
