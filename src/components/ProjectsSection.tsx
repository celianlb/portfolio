'use client';

import Section from "./Section";
import { Projects } from "../../typing";
import Button from "./Button";
import { FiChevronRight } from "react-icons/fi";
import ProjectsCard from "./ProjectsCard";

export default function Projects({ projects }: { projects: Projects[] }) {
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

        <ProjectsCard projects={projects} />
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
