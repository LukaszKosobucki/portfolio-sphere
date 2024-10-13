function ProjectItem({ entry, pill }: { entry: {}; pill: boolean }) {
  const tags = ["tag1", "tag2", "tag3"];
  return (
    <li>
      <a
        target="_blank"
        href={`https://www.google.com`}
        className="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
      >
        <div className="w-full group-hover:text-black group-hover:dark:text-white blend">
          <div className="flex flex-wrap items-center gap-2">
            {pill && (
              <div className="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">
                "project"
              </div>
            )}
            <div className="text-sm uppercase">{"01.02.2019"}</div>
          </div>
          <div className="font-semibold mt-3 text-black dark:text-white">
            {/* {entry.data.title} */}
            title
          </div>

          <div className="text-sm line-clamp-2">
            {/* {entry.data.summary} */}
            Lorem Ipsum dolor sit amet
          </div>
          <ul className="flex flex-wrap mt-2 gap-1">
            {tags.map(
              (
                tag: string // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
              ) => (
                <li
                  key={tag}
                  className="text-xs uppercase py-0.5 px-1 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75"
                >
                  {tag}
                </li>
              )
            )}
          </ul>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
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
