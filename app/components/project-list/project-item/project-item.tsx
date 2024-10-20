import { formatDate } from "@/app/utils/format-date";
import { Entry, EntrySkeletonType } from "contentful";

function ProjectItem({
  entry,
}: {
  entry: Entry<EntrySkeletonType, undefined, string>;
}) {
  return (
    <li>
      <a
        target="_blank"
        href={entry.fields.url as string}
        className="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
      >
        <div className="w-full group-hover:text-black group-hover:dark:text-white blend">
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-sm uppercase">{formatDate(entry.fields.date as string)}</div>
          </div>
          <div className="font-semibold mt-3 text-black dark:text-white">
            {entry.fields.name as string}
          </div>

          <div className="text-sm line-clamp-2">{entry.fields.description as string}</div>
          <ul className="flex flex-wrap mt-2 gap-1">
            {entry.fields.tags &&
              (entry.fields.tags as Array<string>).map((tag: string) => (
                <li
                  key={tag}
                  className="text-xs uppercase py-0.5 px-1 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75"
                >
                  {tag}
                </li>
              ))}
          </ul>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"
        >
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            className="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
          />
          <polyline
            points="12 5 19 12 12 19"
            className="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
          />
        </svg>
      </a>
    </li>
  );
}

export default ProjectItem;
