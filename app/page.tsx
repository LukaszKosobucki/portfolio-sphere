import fetchContentful from "./components/hoc/fetchContentful";
import Card from "./components/shared/card";
import Description from "./components/shared/description";
import SectionHeader from "./components/shared/section-header";
import Skill from "./components/shared/skill";

export default async function Home() {
  const content = await fetchContentful();
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
        <SectionHeader title={content["aboutme"].title} />
        <Description content={content["aboutme"].description} />
      </section>
      <section className="w-[560px] pt-[60px]">
        <SectionHeader title={titleSkills} />
        <div>
          {listOfSkills.map((skill) => (
            <Skill name={skill.name} image={skill.image} key={skill.name} />
          ))}
        </div>
      </section>
      <section className="mt-24 flex flex-col items-center gap-[60px]">
        <div className="text-black max-w-[1200px] flex flex-row justify-center items-start gap-20 ">
          {content["experience"].map((exp: any) => (
            <Card card={exp} key={exp.name}></Card>
          ))}
        </div>

        <div>
          <button className="text-black"> -> Whole Experience</button>
        </div>
      </section>

      <section className="text-black max-w-[1200px] flex flex-row justify-center items-start gap-10">
        Projects section with cards
      </section>
    </div>
  );
}
