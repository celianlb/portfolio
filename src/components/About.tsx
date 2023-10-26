import Section from "./Section";
import AllEducation from "./Education";
import AllTechno from "./Techno";
import { Education, Techno } from "../../typing";
import { sanityClient } from "@/app/sanity";


export default async function About() {
  const techno: Techno[] = await sanityClient.fetch(`*[_type == "techno"]`);
  const education: Education[] = await sanityClient.fetch(`*[_type == "education"]`);
  return (
    <Section>
      <div
        data-aos="fade-right"
        className="text-secondary flex flex-col gap-16 pt-8"       
        id="about"
      >
        <div className="flex flex-col justify-between">
          <h2 className="font-montserrat font-semibold text-[32px] md:text-[48px] tracking-widest">
            about
          </h2>
          <p className="text-[16px] self-end font-rnssanz opacity-60 ">
            discover my education and skills
          </p>
        </div>
        <AllEducation education={education} />
        <AllTechno techno={techno}/>
      </div>
    </Section>
  );
}
