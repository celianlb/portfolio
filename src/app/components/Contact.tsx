import Button from "./Button";
import Section from "./Section";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <Section>
      <div
        data-aos="fade-right"
        className="text-secondary flex flex-col gap-16 pt-8"
        id="contact"
      >
        <div className="flex flex-col justify-between md:items-center md:flex-row">
          <h2 className="font-montserrat font-semibold text-[32px] md:text-[48px] tracking-widest">
            contact
          </h2>
          <p className="text-[16px] self-end font-rnssanz opacity-60 md:self-auto">
            get in touch !
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex flex-col gap-6 md:w-1/2 items-center justify-around">
            <p className="text-[16px] font-rnssanz">
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
          <a href="https://app.daily.dev/clebacle" className="w-56 m-auto"><img src="https://api.daily.dev/devcards/3d9fe02d8dbe416d8e153825bf9c1352.png?r=l06" width="400" alt="Célian Lebacle's Dev Card"/></a>
        </div>
      </div>
    </Section>
  );
}
