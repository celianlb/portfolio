'use client';

import Section from "./Section";
import { Projects } from "../../typing";
import Image from "next/image";
import Button from "./Button";
import { FiChevronRight } from "react-icons/fi";
import { urlFor } from "@/app/sanity";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default async function Projects({ projects }: { projects: Projects[] }) {
  const router = useRouter();
  return (
    <Section>
      <div id="projects" className="text-secondary flex flex-col gap-16 pt-8">
        <div className="flex flex-col justify-between ">
          <h2 className="font-montserrat font-semibold text-[32px] md:text-[48px] tracking-widest">
            projects
          </h2>
          <p className="text-[16px] self-end font-rnssanz opacity-60 ">
            project, from school, personnal and clients
          </p>
        </div>

        <div className=" flex flex-wrap gap-8 md:gap-12 justify-center">
          {projects.map((projects) => (
            <div key={projects._id} className="text-secondary flex flex-col gap-3">
              <Link href={`/projects/${projects.slug.current}`}>
                <Image
                  src={projects.image && urlFor(projects.image).url()}
                  alt={projects.title}
                  width={1280}
                  height={813}
                  className="w-[342px] h-[217px] lg:w-[400px] lg:h-[254px] rounded-[17px] hover:shadow-3xl hover:shadow-black hover:scale-105 transition ease-in-out duration-300"
                />
              </Link>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-3">
                  <p key={projects._id} className="font-bold">
                    {projects.title}
                  </p>
                  <p className="text-sm">{projects.category}</p>
                </div>
                <p className=" opacity-50">{projects.type}</p>
              </div>
            </div>
          ))}
        </div>
        <Button
          link="/projects"
          text="see more"
          className="flex flex-row float-right gap-2 items-center"
          target="_self"
        >
          <FiChevronRight />
        </Button>
      </div>
    </Section>
  );
}
