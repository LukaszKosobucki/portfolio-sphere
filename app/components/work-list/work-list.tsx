import { fetchSpecificEntries } from "@/app/services/contentful";
import { WORK } from "@/app/utils/consts";
import Container from "../navbar/container";
import WorkItem from "./work-item/work-item";

async function WorkList() {
  const works = await fetchSpecificEntries({
    content_type: "experience",
    multiple: true,
    order: "-fields.dateStart",
  });
  return (
    <main id="work" className="scroll-mt-16">
      <div className="pt-5 pb-5">
        <Container size="md">
          <div className="animate page-heading">{WORK.TITLE}</div>
        </Container>
      </div>

      <div className="flex-1 py-5">
        <Container size="md">
          <ul>
            {works.map((work) => (
              <WorkItem key={work.fields.name as string} entry={work} />
            ))}
          </ul>
        </Container>
      </div>
    </main>
  );
}

export default WorkList;
