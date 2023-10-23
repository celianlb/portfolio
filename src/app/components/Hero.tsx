import Section from "./Section";
import Image from "next/image";
import ScrollDown from "./ScrollDown";
import localFont from "next/font/local";
import { Social } from "../../../typing";
import Link from "next/link";
import { urlFor } from "../sanity";

const monumentextended = localFont({
  src: "../../../public/font/MonumentExtended-Ultrabold.otf",
});

export default function Hero({ social }: { social: Social[] }) {
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
          <div className="flex flex-row gap-4">
            {social.map((social) => (
              <Link href={social.link} target="_blank" className="">
                <Image
                  src={social.image && urlFor(social.image).url()}
                  alt={social.title}
                  width={32}
                  height={32}
                />
              </Link>
            ))}
          </div>
        </div>
        <ScrollDown target="" />
      </div>
    </Section>
  );
}
