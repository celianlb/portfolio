import Link from "next/link"; 
import Image from "next/image";
import { Social } from "../../typing";
import { sanityClient, urlFor } from "@/app/sanity";

type SocialProps = {
    width?: number;
    height?: number;
  };

  export default async function SocialComponents({ width, height }: SocialProps){
    const social: Social[] = await sanityClient.fetch(`*[_type == "social"]`);
    return(
        <div className="flex flex-row gap-4">
          {social.map((social) => (
            <div key={social._id} className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <Link href={social.link} target="_blank" className="">
                <Image
                  src={social.image && urlFor(social.image).url()}
                  alt={social.title}
                  width={width}
                  height={height}
                />
              </Link>
            </div>
          ))}
        </div>
    );
}