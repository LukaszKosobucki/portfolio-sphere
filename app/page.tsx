import fetchContentful from "./components/hoc/fetchContentful";
import Card from "./components/shared/card";
import Description from "./components/shared/description";
import SectionHeader from "./components/shared/section-header";
import Skill from "./components/shared/skill";

export default async function Home() {
  const {aboutme, experience, projects, skills} = await fetchContentful();
  const titleSkills = "My skills";
  const listOfSkills = [
    { name: "skill 1", image: "placeholder" },
    { name: "skill 2", image: "placeholder" },
    { name: "skill 3", image: "placeholder" },
    { name: "skill 4", image: "placeholder" },
    { name: "skill 5", image: "placeholder" },
    { name: "skill 6", image: "placeholder" },
  ];

  return (
    <div className="bg-white flex flex-col justify-start items-center w-full ">
      <section className="w-[560px] pt-[60px]">
        <SectionHeader title={aboutme.title} />
        <Description content={aboutme.description} />
      </section>
      <section className="w-[560px] pt-[60px]">
        <SectionHeader title={titleSkills} />
        <div>
          {skills.map((skill) => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </div>
      </section>
      <section className="mt-[80px] flex flex-col items-center gap-[60px]">
        <div className="text-black max-w-[1200px] flex flex-row justify-center items-start gap-20 ">
          {experience.slice(0,3).map((exp: any) => (
            <Card card={exp} key={exp.name}></Card>
          ))}
        </div>

        <div>
          <button className="text-black bg-[#D9D9D9] w-[240px] h-[60px] flex justify-center items-center"> -> Whole Experience</button>
        </div>
      </section>

      <section className="mt-[80px] flex flex-col items-center gap-[80px] mb-[100px]">
         <div className="text-black max-w-[1200px] flex flex-row justify-center items-start gap-20 ">
          {projects.map((exp: any) => (
            <Card card={exp} key={exp.name}></Card>
          ))}
        </div>
        <div className="flex flex-row gap-[50px]">
          <button className="text-black bg-[#D9D9D9] w-[240px] h-[60px] flex justify-center items-center"> -> Whole Experience</button>
          <button className="text-black bg-[#D9D9D9] w-[240px] h-[60px] flex justify-center items-center"> -> Contact me</button>
        </div>
    </section>
    </div>
  );
}
