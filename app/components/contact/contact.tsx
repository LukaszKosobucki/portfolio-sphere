import { Entry, EntrySkeletonType } from "contentful";

function Contact({
  socials,
}: {
  socials: Entry<EntrySkeletonType, undefined, string>[];
}) {
  return (
    <section className="animate">
      <div>
        <p className="font-semibold text-black dark:text-white">Let&apos;s Connect</p>
        <p>Reach out to me via email or on social media.</p>
        <div className="grid grid-rows-3 gap-y-2 mt-4 auto-cols-min">
          {socials &&
            socials.map((social) => (
              <section key={`${social.fields.name}`} className="flex flex-row gap-2">
                <div className="col-span-1 flex items-center gap-1">
                  <span className="whitespace-nowrap truncate">{`${social.fields.name}`}</span>
                </div>
                <div className="col-span-3 truncate">
                  <a
                    href={`${social.fields.href}`}
                    target="_blank"
                    className="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"
                  >
                    <span className="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
                      {`${social.fields.text}`}
                    </span>
                  </a>
                </div>
              </section>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
