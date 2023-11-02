"use client";

import Hero from "@/components/Hero";
import { Projects, Social } from "../../typing";
import { sanityClient } from "./sanity";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Home() {
  const projects: Projects[] = await sanityClient.fetch(
    `*[_type == "projects"]`
  );
  const social: Social[] = await sanityClient.fetch(`*[_type == "social"]`);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProjectsSection projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}
