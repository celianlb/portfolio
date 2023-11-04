"use client";

import { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import NavBar from "./NavBar";
import Image from "next/image";

export default function Header() {
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
    <nav className="flex flex-row items-center justify-center">
      <div
        className=" hidden md:flex mr-6 cursor-pointer  "
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
        }}
      >
        <Image
          src={"/img/memoji.png"}
          width={50}
          height={50}
          alt="memoji home"
          className="transition duration-300  transform bg-secondary shadow-3xl rounded-full mb-8 shadow-secondary"          
        />
      </div>
      <NavBar />
      <BurgerMenu />
    </nav>
  );
}
