import Section from "./Section";
import { Projects } from "../../../typing";
import Image from "next/image";
import { urlFor } from "../sanity";
import Button from "./Button";
import { FiChevronRight } from "react-icons/fi";

export default async function Projects({ projects }: { projects: Projects[] }) {
  const limitedProjects = projects.slice(0, 4);
  return (
    <Section>
      <div id="projects" className="text-secondary flex flex-col gap-16 pt-8">
        <div className="flex flex-col justify-between md:items-center md:flex-row">
          <h2
            
            className="font-montserrat font-semibold text-[32px] md:text-[48px] tracking-widest"
          >
            projects
          </h2>
          <p className="text-[16px] self-end font-rnssanz opacity-60 md:self-auto">
            project, from school, personnal and clients
          </p>
        </div>

        <div className=" flex flex-wrap gap-8 md:gap-12 justify-center xl:justify-between">
          
          {limitedProjects.map((projects) => (
            <div className="text-secondary flex flex-col gap-3">
              <Image
                src={projects.image && urlFor(projects.image).url()}
                alt={projects.title}
                width={500}
                height={350}
                className="w-[340px] h-[240px] md:w-[500px] md:h-[350px]"
              />
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
        <Button
          link="/projects"
          text="see more"
          className="flex flex-row float-right gap-2 items-center text-secondary hover:text-primary"
          target="_self"      
        >
          <FiChevronRight />
        </Button>
      </div>
    </Section>
  );
}
