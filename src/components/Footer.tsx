import Link from "next/link";
import Image from "next/image";
import { sanityClient, urlFor } from "@/app/sanity";
import SocialComponents from "./Social";
import { Social } from "../../typing";

export default async function Footer() {
  const social: Social[] = await sanityClient.fetch(`*[_type == "social"]`);
  return (
    <div className="pt-8">
      <footer className="flex flex-col items-center md:flex-row md:justify-between">
          <SocialComponents width={48} height={48} social={social} />
          <p className=" text-secondary font-rnssanz">
            © 2023 Célian Lebacle. Tous droits réservés.
          </p>
      </footer>
    </div>
  );
}