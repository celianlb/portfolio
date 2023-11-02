'use client';

import { sanityClient, urlFor } from "@/app/sanity";
import { Projects } from "../../../typing";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default async function ProjectCard() {
    const router = useRouter();

  const projects: Projects[] = await sanityClient.fetch(
    `*[_type == "projects"]`
  );
    return (
        <div className=" flex flex-wrap gap-8 md:gap-12 justify-center lg:justify-between h-full">
          {projects.map((projects) => (
            <div key={projects._id} className="text-secondary flex flex-col gap-3">
              <Link href={`/projects/${projects.slug.current}`}>
                <Image
                  src={projects.image && urlFor(projects.image).url()}
                  alt={projects.title}
                  width={1280}
                  height={813}
                  className=" w-[330px] h-[220px] md:w-[400px] md:h-[254px] rounded-[17px] hover:shadow-3xl hover:shadow-black hover:scale-105 transition ease-in-out duration-300"
                />
              </Link>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-3">
                  <p key={projects._id} className="font-bold">
                    {projects.title}
                  </p>
                  <p className="text-sm">{projects.category}</p>
                </div>
                <p>{projects.type}</p>
              </div>
            </div>
          ))}
        </div>
    );
}