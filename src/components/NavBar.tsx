import Link from "next/link";
import { Memoji } from "../../typing";
import { sanityClient } from "@/app/sanity";
import MemojiCard from "./Memoji";

export default async function NavBar() {
  const memoji: Memoji[] = await sanityClient.fetch(`*[_type == "memoji"]`);
  return (
    <div className="pb-8 justify-center items-center text-secondary gap-10 hidden md:flex transition ease-in duration-200">
      <MemojiCard memoji={memoji} />
      <div className="flex flex-row bg-menu  rounded-full font-rnssanz font-bold">
        <Link
          href={"/"}
          className=" hover:bg-secondary hover:text-primary px-6 py-2 rounded-s-full transition hover:transition-all duration-300"
        >
          home
        </Link>
        <Link
          href={"/#about"}
          className=" hover:bg-secondary hover:text-primary px-6 py-2 transition hover:transition-all duration-300"
        >
          about
        </Link>
        <Link
          href={"/projects"}
          className=" hover:bg-secondary hover:text-primary px-6 py-2 transition hover:transition-all duration-300"
        >
          projects
        </Link>
        <Link
          href={"/#contact"}
          className=" hover:bg-secondary hover:text-primary px-6 py-2 rounded-tr-full rounded-br-full transition hover:transition-all duration-300"
        >
          contact
        </Link>
      </div>
    </div>
  );
}
