export default function Skill({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <div>
      <img src={image} alt="" />
      <span className="text-base text-black">{name}</span>
    </div>
  );
}
