import { getRandom } from "@/app/utils/random";

function Particles() {
  const generateParticles = (n: number) => {
    let value = `${getRandom(2560)}px ${getRandom(2560)}px #000`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2560)}px ${getRandom(2560)}px #000`;
    }
    return value;
  };

  const particlesSmall = generateParticles(1000);
  const particlesMedium = generateParticles(500);
  const particlesLarge = generateParticles(250);

  return (
    <div className="absolute inset-0 block dark:hidden">
      <div
        id="particles1"
        className="fixed inset-0 rounded-[50%] w-[1px] h-[1px]"
        style={{
          boxShadow: particlesSmall,
          animation: "animateParticle 50s linear infinite",
        }}
      ></div>
      <div
        id="particles2"
        className="fixed inset-0 rounded-[50%] w-[1px] h-[1px]"
        style={{
          boxShadow: particlesMedium,
          animation: "animateParticle 100s linear infinite",
        }}
      ></div>
      <div
        id="particles3"
        className="fixed inset-0 rounded-[50%] w-[1px] h-[1px]"
        style={{
          boxShadow: particlesLarge,
          animation: "animateParticle 150s linear infinite",
        }}
      ></div>
    </div>
  );
}

export default Particles;
