import React, { useEffect, useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  }, [isOpen]);

  return (
    <>
      <div
        className="relative pb-8 md:hidden"
      >
        <motion.div
          className="flex justify-center cursor-pointer"
          onClick={toggleMenu}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isOpen ? (
            <FiX size={50} className="bg-varprimary text-secondary rounded-lg p-2" />
          ) : (
            <FiMenu size={50} className="text-secondary p-2 transition ease-in duration-300" />
          )}
        </motion.div>
        <div className="">
          <Transition
            show={isOpen}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="bg-black-spec z-50 mt-24 fixed top-0 left-0 w-full h-fit flex justify-center items-center"
          >
            <div className="w-fit h-fit bg-varprimary text-secondary font-montserrat rounded-lg font-bold text-lg">
              <div className="flex text-center items-center flex-col p-6 lowercase">
                <Link href="/#about" className="hover:opacity-20" onClick={closeMenu}>
                  About
                </Link>
                <Link href="/projects" className="hover:opacity-20" onClick={closeMenu}>
                  Projects
                </Link>
                <Link href="/#contact" className="hover:opacity-20" onClick={closeMenu}>
                  Contact
                </Link>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
