"use client";

import { fetchAllTechno } from "../utils/fetchTechno";
import Section from "./Section";
import { Techno } from "../../../typing";
import { GetServerSideProps } from "next";
import AllTechno from "./Techno";
import Education from "./Education";

type Props = {
  techno: Techno[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const techno: Techno[] = await fetchAllTechno();

  return {
    props: {
      techno,
    },
  };
};

export default function About({ techno }: Props) {
  return (
    <Section>
      <div
        id="about"
        data-aos="fade-right"
        className="text-secondary flex flex-col gap-4"
      >
        <h2 className="font-montserrat text-[32px] tracking-widest">about</h2>
        <p className="text-[16px] opacity-60 w-1/2 self-end md:w-auto">
          discover my education and skills
        </p>
        <div className="py-3 px-8 flex flex-col gap-10">
          <Education year="2025" text="Master Tech Lead - Digital Campus" />
          <Education year="2023" text="Bachelor ESD - Digital Campus" />
          <Education year="2022" text="BTS SIO SLAM - IPSSI" />
        </div>
      </div>
      <div>
        {techno.map((techno) => (
          <AllTechno
            key={techno._id}
            title={techno.title}
            id={techno._id}
            imageSrc={techno.image}
            imageAlt={techno.name}
          />
        ))}
      </div>
    </Section>
  );
}
