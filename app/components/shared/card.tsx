export default function Card({ card }: { card: any }) {
  return (
    <a className={`max-w-[360px] max-h-[460px] relative cursor-pointer`}>
      <img
        src={"https:" + card.url}
        alt=""
        className="w-[360px] h-[460px] grayscale hover:grayscale-0 duration-400 transition-all ease-in-out group"
      />
      <div className="absolute top-10 left-10 group-hover:grayscale-0 w-[280px]">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl font-bold text-white">{card.name}</h2>{" "}
          <span className="text-white top-10 right-10">
            {card.date.from}-{card.date.to}
          </span>
        </div>
        <h2 className="text-xl font-regular text-white">{card.workTitle}</h2>
        <div>
          {card.skills.map((skill: string) => (
            <span key={skill} className="text-white font-regular text-base">
              {skill},{" "}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
