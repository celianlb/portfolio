import Section from "@/components/Section";
import ProjectCard from "./ProjectCard";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "All projects",
};

export default function ProjectsPage() {
  
  return (
    <main>
      <Header />
      <Section>        
        <ProjectCard />
      </Section>
    </main>
  );
}
