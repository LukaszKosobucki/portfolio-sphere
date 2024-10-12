export default function Skill({ skill }: { skill: any }) {
  return (
    <div className="flex flex-row gap-[4px] items-center justify-start ">
      <img
        src={`https:${skill.image.fields.file.url}`}
        alt=""
        className="w-[16px] h-[16px]"
      />
      <span className="text-base text-black ">{skill.name}</span>
    </div>
  );
}
