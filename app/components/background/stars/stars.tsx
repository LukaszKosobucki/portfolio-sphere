import { getRandom } from "@/app/utils/random";

function Stars() {
  const generateStars = (n: number) => {
    let value = `${getRandom(2560)}px ${getRandom(2560)}px #fff`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2560)}px ${getRandom(2560)}px #fff`;
    }
    return value;
  };

  const starsSmall = generateStars(1000);
  const starsMedium = generateStars(500);
  const starsLarge = generateStars(250);

  return (
    <div className="absolute inset-0 bg-black hidden dark:block">
      <div
        id="stars1"
        className="fixed inset-0 rounded-[50%] w-[1px] h-[1px]"
        style={{ boxShadow: starsSmall }}
      ></div>
      <div
        id="stars2"
        className="fixed inset-0 rounded-[50%] w-[1.5px] h-[1.5px]"
        style={{ boxShadow: starsMedium }}
      ></div>
      <div
        id="stars3"
        className="fixed inset-0 rounded-[50%] w-[2px] h-[2px]"
        style={{ boxShadow: starsLarge }}
      ></div>
    </div>
  );
}

export default Stars;
