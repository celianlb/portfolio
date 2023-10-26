'use client';

import Section from "./Section";
import Image from "next/image";
import ScrollDown from "./ScrollDown";
import localFont from "next/font/local";
import Link from "next/link";
import { sanityClient, urlFor } from "@/app/sanity";
import { Social } from "../../typing";
import SocialComponents from "./Social";
import { motion } from "framer-motion";

const monumentextended = localFont({
  src: "../../public/font/MonumentExtended-Ultrabold.otf",
});

export default async function Hero() {
  const social: Social[] = await sanityClient.fetch(`*[_type == "social"]`);
  return (
    <Section>
      <div className="flex flex-col items-center text-secondary gap-8">
        <h1
          className={`${monumentextended.className} uppercase font-monumentextended text-[3rem] md:text-[8rem] `}
        >
          Célian <br />
          Lebacle
        </h1>
        <div className="flex flex-row font-rnssanz text-base gap-5 items-center justify-around md:justify-between">
          <p className="w-1/2">
            Hello, Im a junior developper who want to specialize in front-end
            developpement
          </p>
          <SocialComponents width={32} height={32} social={social} />
        </div>
        <ScrollDown target="" />
      </div>
    </Section>
  );
}
