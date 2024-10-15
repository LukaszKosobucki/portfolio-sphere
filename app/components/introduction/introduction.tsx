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
            {aboutMe[0].fields.title?.toString()}
            {documentToReactComponents(
              aboutMe[0].fields.description as Document
            )}
            <p>
              I am a
              <b>
                <i>software engineer</i>
              </b>
              <b>
                <i>ui/ux designer</i>
              </b>
              <b>
                <i>product planner</i>
              </b>
              <b>
                <i>mentor</i>
              </b>
              <b>
                <i>student</i>
              </b>
              <b>
                <i>minimalist</i>
              </b>
              <b>
                <i>eternal optimist</i>
              </b>
              <b>
                <i>crypto enthusiast</i>
              </b>
              and
              <b>
                <i>sarcasm connoisseur</i>
              </b>
              .
            </p>
            <p>
              I love to both build and break things. I am motivated by
              challenging projects with self-guided research and dynamic problem
              solving. My true passion is crafting creative front end designs
              with unique takes on color, typography and motion.
            </p>
            <p>During my career</p>
            <p>
              I have built products ranging from marketing and ecommerce
              websites to complex enterprise apps with focus on delivering fast,
              elegant code along with delightful user interfaces.
            </p>
            <p>Now</p>
            <p>
              I currently work as a software engineer at StreamlineFS, where I
              do product planning, design and development.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Introduction;
