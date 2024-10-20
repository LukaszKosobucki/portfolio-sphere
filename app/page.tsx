import Galaxy from "./components/background/galaxy/galaxy";
import Particles from "./components/background/particles/particles";
import Stars from "./components/background/stars/stars";
import Contact from "./components/contact/contact";
import Drawer from "./components/drawer/drawer";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Introduction from "./components/introduction/introduction";
import Navbar from "./components/navbar/navbar";
import ProjectList from "./components/project-list/project-list";
import WorkList from "./components/work-list/work-list";
import { fetchSpecificEntries } from "./services/contentful";

export default async function Home() {
  const socials = await fetchSpecificEntries({
    content_type: "socialInfo",
    multiple: true,
    order: "sys.createdAt",
  });

  const seoResponse = await fetchSpecificEntries({
    content_type: "seoConfig",
    title: "LK Portfolio",
  });

  const resume = await fetchSpecificEntries({
    content_type: "document",
    title: "resume",
  });

  return (
    <main>
      <Navbar
        socials={socials}
        author={`${seoResponse[0].fields.author}`}
        title={`${seoResponse[0].fields.seoTitle}`}
      />
      <Drawer socials={socials} title={`${seoResponse[0].fields.seoTitle}`} />
      <Particles />
      <Stars />
      <Galaxy />
      <Hero
        author={`${seoResponse[0].fields.author}`}
        introduction={`${seoResponse[0].fields.introduction}`}
      />
      <Introduction />
      <div className="relative bg-white dark:bg-black">
        <div className="mx-auto max-w-screen-sm space-y-24">
          <WorkList />
        </div>
      </div>
      <div className="relative bg-white dark:bg-black">
        <div className="mx-auto max-w-screen-sm space-y-24 pb-16 p-5">
          <ProjectList />
        </div>
      </div>
      <div className="relative bg-white dark:bg-black">
        <div className="mx-auto max-w-screen-sm space-y-24 pb-16 p-5">
          <Contact socials={socials} />
        </div>
      </div>
      <Footer socials={socials} title={`${seoResponse[0].fields.seoTitle}`} resume={resume} />
    </main>
  );
}
