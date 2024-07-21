import fetchContentful from "./components/hoc/fetchContentful";
import Description from "./components/shared/description";
import SectionHeader from "./components/shared/section-header";
import Skill from "./components/shared/skill";

export default async function Home() {
  const { title, description } = await fetchContentful();
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
      <section className="w-[560px]">
        <SectionHeader title={title} />
        <Description content={description} />
      </section>
      <section className="w-[560px]">
        <SectionHeader title={titleSkills} />
        <div>
          {listOfSkills.map((skill) => (
            <Skill name={skill.name} image={skill.image} key={skill.name} />
          ))}
        </div>
      </section>

      <section className="text-black max-w-[1200px]">
        Experience section with cards
      </section>
      <section className="text-black max-w-[1200px]">
        Projects section with cards
      </section>
    </div>
  );
}
