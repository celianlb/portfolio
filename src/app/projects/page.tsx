import Section from "@/components/Section";
import ProjectCard from "./ProjectCard";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Discover all my projects, there is some app, landing page, website, etc... Projects can from school or personal",
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
