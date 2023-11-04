import Image from "next/image";
import Rating from "@mui/material/Rating/Rating";
import { grey } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Techno } from "../../typing";
import { urlFor } from "@/app/sanity";
import Link from "next/link";

export default function AllTechno({ techno }: { techno: Techno[] }) {
  techno = techno.sort((a, b) => b.rating - a.rating);
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-6">
      {techno.map((techno) => (
        <div key={techno._id} className="flex flex-col text-secondary items-center gap-2">
          <div className="flex flex-col gap-2 items-center bg-secondary w-24 p-4 rounded-xl bg-opacity-10">
            <Link href={techno.link} target="_blank">
            <Image
              src={techno.image && urlFor(techno.image).url()}
              alt={techno.title}
              width={64}
              height={64}
              className="w-[50px] h-[50px] md:w-16 md:h-16"
            />
            </Link>
            <p>{techno.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
