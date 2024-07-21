export default function Skill({ skill }: { skill: any }) {
  return (
    <div className="flex flex-row gap-[4px] items-start h-[16px] mt-[20px]">
      <img src={`https:${skill.url}`} alt="" className="w-[16px] h-[16px]" />
      <span className="text-base text-black ">{skill.name}</span>
    </div>
  );
}
