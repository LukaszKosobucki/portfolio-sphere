import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black w-full flex flex-row justify-center items-center h-[400px] ">
      <div className="flex flex-row justify-around items-start w-full ">
        <section className="flex gap-[30px]">
          <Link href="/experience" className="font-bold text-base">
            Experience
          </Link>
          <Link href="/projects" className="font-bold text-base">
            Project
          </Link>
          <Link href="/about" className="font-bold text-base">
            About
          </Link>
          <Link href="/contact" className="font-bold text-base">
            Contact
          </Link>
        </section>
        <section className="flex flex-col gap-[20px]">
          <span className="font-bold text-base">lukasz.kos98@gmail.com</span>
          <span className="font-bold text-base">+48 533 980 909</span>
        </section>
        <section>
          <span>LOGO</span>
        </section>
      </div>
    </div>
  );
}
