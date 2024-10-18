import { fetchSpecificEntries } from "@/app/services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

async function Introduction() {
  const aboutMe = await fetchSpecificEntries({
    content_type: "description",
    title: "About me",
  });
  return (
    <div className="relative bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-sm p-5 space-y-24 pb-16">
        <section className="animate">
          <article>
            {documentToReactComponents(
              aboutMe[0].fields.description as Document
            )}
          </article>
        </section>
      </div>
    </div>
  );
}

export default Introduction;
