function Hero({
  author,
  introduction,
}: {
  author: string;
  introduction: string;
}) {
  return (
    <section className="relative h-screen w-full">
      <div id="planetcont" className="animate absolute inset-0 top-1/4 overflow-hidden">
        <div
          id="crescent"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[250vw] min-h-[100vh] aspect-square rounded-full p-[1px] bg-gradient-to-b from-black/25 dark:from-white/75 from-0% to-transparent to-5%"
        >
          <div
            id="planet"
            className="w-full h-full bg-white dark:bg-black rounded-full p-[1px] overflow-hidden flex justify-center"
          >
            <div
              id="blur"
              className="w-full h-20 rounded-full bg-neutral-900/25 dark:bg-white/25 blur-3xl"
            />
          </div>
        </div>
      </div>
      <div className="animate absolute h-full w-full flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="p-5 text-center">
            <p className="animated text-lg md:text-xl lg:text-2xl font-semibold opacity-75">
              Hello, I am ...
            </p>
            <p className="animated text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black dark:text-white">
              {author}
            </p>
            <p className="animated text-sm md:text-base lg:text-lg opacity-75">{introduction}</p>
            <div id="ctaButtons" className="animated flex flex-wrap gap-4 justify-center mt-5">
              <a
                href="#projects"
                className="py-2 px-4 rounded truncate text-xs md:text-sm lg:text-base bg-black dark:bg-white text-white dark:text-black hover:opacity-75 blend"
              >
                View my projects
              </a>
              <a
                href="#work"
                className="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"
              >
                View my work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
