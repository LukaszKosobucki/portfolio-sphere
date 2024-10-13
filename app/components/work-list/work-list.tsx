import { WORK } from "@/app/utils/consts";
import Container from "../navbar/container";
import WorkItem from "./work-item/work-item";

function WorkList() {
  const work = [{}, {}];

  return (
    <main>
      <div className="pt-5 pb-5">
        <Container size="md">
          <div className="animate page-heading">{WORK.TITLE}</div>
        </Container>
      </div>

      <div className="flex-1 py-5">
        <Container size="md">
          <ul>
            {work.map((entry) => (
              <WorkItem entry={entry} />
            ))}
          </ul>
        </Container>
      </div>
    </main>
  );
}

export default WorkList;
