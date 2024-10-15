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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Drawer />
      <Particles />
      <Stars />
      <Galaxy />
      <Hero />
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
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
