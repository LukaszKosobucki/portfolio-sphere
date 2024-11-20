import { fetchSpecificEntries } from "@/app/services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

async function Introduction() {
  const aboutMe = await fetchSpecificEntries({
    content_type: "description",
    title: "About me",
  });
  return (
    <div className=" bg-white dark:bg-black h-screen sticky top-10">
      <div className="mx-auto max-w-screen-sm p-5 space-y-24 pt-[20%] ">
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
