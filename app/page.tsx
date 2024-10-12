"use client";

import { useEffect } from "react";
import Galaxy from "./components/background/galaxy/galaxy";
import Particles from "./components/background/particles/particles";
import Stars from "./components/background/stars/stars";
import Hero from "./components/hero/hero";
import Introduction from "./components/introduction/introduction";

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
    </main>
  );
}
