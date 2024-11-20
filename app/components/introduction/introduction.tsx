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
      <div className="mx-auto max-w-screen-sm p-5 py-24">
        <section className="animate">
          <article className="text-justify">
            {documentToReactComponents(aboutMe[0].fields.description as Document)}
          </article>
        </section>
      </div>
    </div>
  );
}

export default Introduction;
