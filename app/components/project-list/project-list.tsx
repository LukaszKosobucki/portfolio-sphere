import ProjectItem from "./project-item/project-item";

function ProjectList() {
  const projects = [{}, {}];
  return (
    <section className="animate">
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="font-semibold text-black dark:text-white">Projects</p>
        </div>
        <ul className="space-y-4">
          {projects.map((project) => (
            <ProjectItem entry={project} pill={false} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectList;
