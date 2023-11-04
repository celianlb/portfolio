"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/app/sanity";
import { Memoji } from "../../typing";

export default function MemojiCard({ memoji }: { memoji: Memoji[] }) {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    const xOffset = (x / width - 0.5) * 10;
    const yOffset = (y / height - 0.5) * 10;
    setOffsetX(xOffset);
    setOffsetY(yOffset);
  };

  const handleMouseLeave = () => {
    setOffsetX(0);
    setOffsetY(0);
  };

  return (
    <div
      className="hidden md:flex cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      }}
    >
      {memoji.map((memoji) => (
        <Image
          key={memoji._id}
          src={memoji.image && urlFor(memoji.image).url()}
          width={50}
          height={50}
          alt="memoji home"
          className="transition duration-300  transform bg-secondary shadow-3xl rounded-full shadow-secondary"
        />
      ))}
    </div>
  );
}
