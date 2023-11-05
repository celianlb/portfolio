import Link from "next/link";
import { Projects } from "../../typing";
import { urlFor } from "@/app/sanity";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

export default function ProjectsCard({ projects }: { projects: Projects[] }) {
  return (
    <div className=" flex flex-wrap gap-8 md:gap-12 justify-center lg:justify-between">
      {projects.map((projects) => (
        <div
          key={projects._id}
          className="text-secondary rounded-3xl bg-varprimary  flex flex-col gap-3"
        >
          <Link href={`/projects/${projects.slug.current}`}>
            <Image
              src={projects.image && urlFor(projects.image).url()}
              alt={projects.title}
              width={1280}
              height={813}
              className="w-[342px] h-[217px] lg:w-[400px] lg:h-[254px] rounded-[17px] hover:shadow-3xl hover:shadow-black hover:scale-105 transition ease-in-out duration-300"
            />
          </Link>
          <div className="flex px-4 pb-3 flex-row justify-between">
            <div className="flex flex-col gap-3">
              <p key={projects._id} className="font-bold">
                {projects.title}
              </p>
              <p className="text-sm">{projects.category}</p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <p className=" opacity-50">{projects.type}</p>
              <div className="flex flex-row gap-3 items-center">
                <Link href={projects.linkGitHub} target="_blank">
                  <AiFillGithub className=" w-6 h-6  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
                </Link>
                <Link href={projects.link} target="_blank">
                  <BiLink className=" w-6 h-6 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
