import Section from "./Section";
import Image from "next/image";
import ScrollDown from "./ScrollDown";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-20">
        <h1 className="animate-fade-up animate-duration-[3000ms]">
          <Image
            src={"/img/hero-logo.png"}
            width={2000}
            height={1000}
            alt="logo hero"
            className="w-[100%]"
          />
        </h1>
        <div className="grid grid-cols-[1fr,auto,1fr] font-rnssanz text-secondary gap-5 animate-fade-up animate-duration-[3000ms]">
          <p className="text-right">Hello,</p>
          <ScrollDown className="" href="#about" target="" />
          <p>I am Célian Lebacle and i'm a full-stack developper</p>
        </div>
      </div>
    </Section>
  );
}
