import React, { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }
  ,[isOpen]);

  return (
    <>
      <div className="relative pb-8">
        <div
          id="lines"
          className="flex justify-center cursor-pointer"
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
            <button className="text-primary py-10" onClick={toggleMenu}>
              <FiX size={38} />
            </button>
          </div>
          <div className="grid grid-rows-2 md:grid-cols-3 bg-secondary font-montserrat font-bold text-black text-[3rem] uppercase items-center h-screen md:grid-rows-none md:h-fit md:px-24 2xl:px">
            <div className="flex w-full  text-right flex-col md:col-span-2 items-center md:items-end">
              <Link href="#about" className="hover:bg-primary pr-6 hover:text-secondary w-screen hover:text-right" onClick={closeMenu}>
                About
              </Link>
              <Link href="#projects" className="hover:bg-primary pr-6 hover:text-secondary w-screen hover:text-right" onClick={closeMenu}>
                Projects
              </Link>
              <Link href="#contact" className="hover:bg-primary pr-6 hover:text-secondary w-screen hover:text-right" onClick={closeMenu}>
                Contact
              </Link>
            </div>
            <div className="flex flex-row md:flex-col bg-black justify-center h-full gap-6 p-6 md:p-2 md:pl-6 md:w-screen">
              <Link href="github.com" className="  ">
                <Image src="/img/social/Github_white.png" alt="GitHub" width={48} height={48} />                
              </Link>
              <Link href="behance.com" className="">
                <Image src="/img/social/Behance_white.png" alt="Behance" width={48} height={48} />
              </Link>
              <Link href="linkedin.fr" className="">
                <Image src="/img/social/LinkedIN_white.png" alt="Linkedin" width={48} height={48} />
              </Link>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default BurgerMenu;
