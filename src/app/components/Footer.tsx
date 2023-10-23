import Link from "next/link";
import { Social } from "../../../typing";
import { urlFor } from "../sanity";
import Image from "next/image";

export default function Footer({ social }: { social: Social[] }) {
  return (
    <div className="pt-8">
      <footer className=" flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-row gap-4">
          {social.map((social) => (
            <div className="">
              <Link href={social.link} target="_blank" className="">
                <Image
                  src={social.image && urlFor(social.image).url()}
                  alt={social.title}
                  width={48}
                  height={48}
                />
              </Link>
            </div>
          ))}
        </div>
        <p className=" text-secondary">
          © 2023 Célian Lebacle. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
