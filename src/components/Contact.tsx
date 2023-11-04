import Button from "./Button";
import Section from "./Section";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

export default function Contact() {
  return (
    <Section>
      <div
        data-aos="fade-right"
        className="text-secondary flex flex-col gap-16 pt-8"
        id="contact"
      >
        <div className="flex flex-col justify-between">
          <h2 className="font-montserrat font-semibold text-[32px] md:text-[48px] tracking-widest">
            contact
          </h2>
          <p className="text-[16px] self-end font-rnssanz opacity-60">
            get in touch !
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-16 self-center">
          <div className="flex flex-col gap-6 w-72 items-center justify-between">
            <p className=" text-xl font-rnssanz">
              if you have any questions or if you want to work with me, feel
              free to contact me !
            </p>
            <Button
              className="w-56 h-28"
              link="mailto:celianlebacle06@gmail.com"
            >
              <AiOutlineMail size={50} style={{ margin: "auto" }} />
            </Button>
          </div>
          <a
            href="https://app.daily.dev/clebacle"
            className="w-56 m-auto md:m-0"
          >
            <Image
              src="https://api.daily.dev/devcards/3d9fe02d8dbe416d8e153825bf9c1352.png?r=l06"
              width={400}
              height={400}
              alt="Célian Lebacle's Dev Card"
            />
          </a>
        </div>
      </div>
    </Section>
  );
}
