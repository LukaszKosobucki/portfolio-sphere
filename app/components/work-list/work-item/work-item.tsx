import { formatDate } from "@/app/utils/format-date";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, INLINES } from "@contentful/rich-text-types";
import { Entry, EntrySkeletonType } from "contentful";

function WorkItem({
  entry,
}: {
  entry: Entry<EntrySkeletonType, undefined, string>;
}) {
  const renderOptions = {
    renderNode: {
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  return (
    <li className="animate border-b border-black/10 dark:border-white/25 mt-4 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none">
      <div className="text-sm uppercase mb-4">
        {formatDate(entry.fields.dateStart as string)} -{" "}
        {entry.fields.dateEnd ? formatDate(entry.fields.dateEnd as string) : "present"}
      </div>
      <div className="text-black dark:text-white font-semibold">{entry.fields.name as string}</div>
      <div className="text-sm font-semibold">{entry.fields.workTitle as string}</div>
      <article className="prose dark:prose-invert prose-p:text-justify">
        {documentToReactComponents(entry.fields.description as Document, renderOptions)}
      </article>
    </li>
  );
}

export default WorkItem;
