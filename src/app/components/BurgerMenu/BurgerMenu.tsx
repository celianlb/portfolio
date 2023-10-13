"use client";

import React, { useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import animation from "./animation";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative pb-8">
        <div
          id="lines"
          className="flex justify-center cursor-pointer animate-fade-down animate-once animate-duration-[3000ms]"
          onClick={toggleMenu}
        >
          <Image
            src="/img/hamburger-menu.svg"
            width={38}
            height={38}
            alt="burger menu icon"
          />
        </div>
        <Transition
          show={isOpen}
          enter="transition duration-500 ease-out"
          enterFrom="transform -translate-y-full"
          enterTo="transform translate-y-0"
          leave="transition duration-300 ease-in"
          leaveFrom="transform translate-x-0"
          leaveTo="transform -translate-y-full"
          className="fixed inset-0 bg-black-spec z-50"
        >
          <div className="flex justify-center  bg-secondary">
            <button className="text-primary" onClick={toggleMenu}>
              <FiX size={38} />
            </button>
          </div>
          <div className="bg-secondary text-primary gap-[56px] flex flex-col items-center justify-center h-full">
            <Link href="#about" onClick={closeMenu}>
              About
            </Link>
            <Link href="#projects" onClick={closeMenu}>
              Projects
            </Link>
            <Link href="#contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </Transition>
      </div>
      <script src="./animation.js"></script>
    </>
  );
};

export default BurgerMenu;
