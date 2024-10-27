import { fetchSpecificEntries } from "@/app/services/contentful";
import ProjectItem from "./project-item/project-item";

async function ProjectList() {
  const projects = await fetchSpecificEntries({
    content_type: "project",
    multiple: true,
  });

  return (
    <section id="projects" className="animate scroll-mt-16">
      <div className="space-y-4">
        <p className="page-heading">Projects</p>

        <ul className="space-y-4">
          {projects.map((project) => (
            <ProjectItem key={project.fields.name?.toString()} entry={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectList;
