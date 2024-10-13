"use client";

import { useEffect } from "react";
import Galaxy from "./components/background/galaxy/galaxy";
import Particles from "./components/background/particles/particles";
import Stars from "./components/background/stars/stars";
import Contact from "./components/contact/contact";
import Hero from "./components/hero/hero";
import Introduction from "./components/introduction/introduction";
import ProjectList from "./components/project-list/project-list";
import WorkList from "./components/work-list/work-list";

export default async function Home() {
  // const { aboutme, experience, projects, skills } = await fetchContentful();
  // const titleSkills = "My skills";

  useEffect(() => {
    const animateElements = document.querySelectorAll(".animate");
    animateElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("show");
      }, index * 150);
    });
  }, []);

  return (
    <main>
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
    </main>
  );
}
