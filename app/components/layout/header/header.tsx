import Menu from "../menu/menu";
import { League_Gothic } from "next/font/google";
const leagueGothic = League_Gothic({ subsets: ["latin"] });

export default function Header(props: any) {
  const { header } = props;
  return (
    <main className="bg-black min-w-full h-[100vh] justify-center items-center flex-col flex">
      <header className="absolute top-[60px] w-full flex flex-row justify-end px-[120px]">
        <Menu />
      </header>
      <div className="flex flex-col justify-center items-center">
        <h1
          className={`text-white text-[96px] uppercase font-bold ${leagueGothic.className}`}
        >
          Łukasz Kosobucki
        </h1>
        <h2 className="text-white text-[32px] font-medium tracking-[15px] uppercase">
          {header}
        </h2>
      </div>
    </main>
  );
}
