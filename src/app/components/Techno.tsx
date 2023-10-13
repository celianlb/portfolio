'use client';

import { urlFor } from "../sanity";
import Image from "next/image";

interface InputProps {
  id: string;
  title: string;
  imageSrc?: ImageBitmap;
  imageAlt: string;
}

export default function AllTechno({
  id,
  title,
  imageSrc,
  imageAlt,
}: InputProps) {
  if (!imageSrc) {
    return <div key={id} />;
  }

  return (
    <div key={id}>
      <Image
        src={imageSrc && urlFor(imageSrc).url()}
        alt={imageAlt}
        width={64}
        height={64}
      />
      <p>{title}</p>
    </div>
  );
}