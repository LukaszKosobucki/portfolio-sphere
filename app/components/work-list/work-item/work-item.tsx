function WorkItem({ entry }: { entry: {} }) {
  function formatWorkDate(input: Date | string) {
    if (typeof input === "string") return input;

    const month = input.toLocaleDateString("en-US", {
      month: "short",
    });

    const year = new Date(input).getFullYear();
    return `${month} ${year}`;
  }
  return (
    <li className="animate border-b border-black/10 dark:border-white/25 mt-4 py-8 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none">
      <div className="text-sm uppercase mb-4">
        {/* {entry.data.dateStart} - {entry.data.dateEnd} */}
        01.12.2019 - 02.13.2023
      </div>
      <div className="text-black dark:text-white font-semibold">
        {/* {entry.data.company} */}
        YouGov
      </div>
      <div className="text-sm font-semibold">
        {/* {entry.data.role} */}
        Junior Software Engineer
      </div>
      <article className="prose dark:prose-invert">
        {/* <entry.Content /> */}
        Working in an international project team, I focused on creating a
        proof-of-concept app in the mobile service industry to acquire potential
        clients. I facilitated collaboration by establishing a monorepository
        and used module federation for flexible technology stack development,
        leveraging cutting-edge technologies like the latest Next.js within an
        Nx monorepo. Additionally, I set up CI/CD processes and developed a
        self-hosted library on GitLab.
      </article>
    </li>
  );
}

export default WorkItem;
