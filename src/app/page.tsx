import Hero from "./components/Hero";
import About from "./components/About";
import { Projects, Social } from "../../typing";
import { sanityClient } from "./sanity";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default async function Home() {
  const projects: Projects[] = await sanityClient.fetch(`*[_type == "projects"]`);
  const social: Social[] = await sanityClient.fetch(`*[_type == "social"]`);

  return (
    <>
      <Hero social={social}/>
      <About />
      <ProjectsSection projects={projects}/>
      <Contact />      
    </>
  );
}
