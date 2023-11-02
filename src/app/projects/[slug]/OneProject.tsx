"use client";
import { urlFor } from "@/app/sanity";
import Image from "next/image";
import { Projects } from "../../../../typing";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiMenu } from "react-icons/fi";

interface ProjectClientProps {
  project: Projects;
}

export default async function OneProject({ project }: ProjectClientProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col text-secondary m-auto w-full gap-3 md:w-[500px]">
      <button
        className="flex flex-row items-center p-4 gap-3 mb-4 hover:bg-secondary w-fit hover:text-primary rounded-full transition duration-150" // Ajouter une position absolue pour le bouton avec un espacement de 24px depuis le haut
        onClick={() => router.back()}
      >
        <FiArrowLeft className="" />
        <p>back</p>
      </button>
      <Image
        src={project.image && urlFor(project.image).url()}
        width={1280}
        height={813}
        alt=""
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold">{project.title}</h3>
            <p className=" opacity-50">{project.category}</p>
          </div>
          <p>{project.type}</p>
        </div>
        <p>{project.description}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            {project.techno.map((techno) => (
              <div key={techno._id}>
                <Image
                  src={techno.image && urlFor(techno.image).url()}
                  width={32}
                  height={32}
                  alt={techno.name}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-3">
            <Link href={project.linkGitHub} target="_blank">
              <AiFillGithub className=" w-8 h-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
            </Link>
            <Link href={project.link} target="_blank">
              <BiLink className=" w-8 h-8 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}
