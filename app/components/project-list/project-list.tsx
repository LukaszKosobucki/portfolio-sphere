import ProjectItem from "./project-item/project-item";

function ProjectList() {
  const projects = [{ name: 1 }, { name: 2 }];
  return (
    <section className="animate">
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="font-semibold text-black dark:text-white">Projects</p>
        </div>
        <ul className="space-y-4">
          {projects.map((project) => (
            <ProjectItem key={project.name} entry={project} pill={false} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectList;
