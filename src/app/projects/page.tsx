import Section from "@/components/Section";
import Header from "@/components/Header";
import { Metadata } from "next";
import ProjectCard from "@/components/ProjectsCard";
import { sanityClient } from "../sanity";
import { Projects } from "../../../typing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover all my projects, there is some app, landing page, website, etc... Projects can from school or personal",
};

export default async function ProjectsPage() {
  const projects: Projects[] = await sanityClient.fetch(
    `*[_type == "projects"]`
  );

  return (
    <main>
      <Header />
      <Section>
        <ProjectCard projects={projects} />
      </Section>
      <Footer />
    </main>
  );
}
