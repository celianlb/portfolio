import React, { useEffect, useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

  const menuVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <div className="relative pb-8 md:hidden">
        <div
          className="flex justify-center cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <motion.div whileTap={{ rotate: 180 }} onClick={toggleMenu}>
              <FiX
                size={50}
                className="bg-varprimary text-secondary rounded-lg p-2"
              />
            </motion.div>
          ) : (
            <motion.div whileTap={{ rotate: 180 }} onClick={toggleMenu}>
              <FiMenu
                size={50}
                className="text-secondary p-2 transition ease-in duration-300"
              />
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="bg-black-spec z-50 mt-24 fixed top-0 left-0 w-full h-fit flex justify-center items-center"
            >
              <motion.div
                className="w-fit h-fit bg-varprimary text-secondary font-montserrat rounded-lg font-bold text-lg"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex text-center gap-3 items-center flex-col p-6 lowercase">
                  <Link
                    href="/"
                    className="hover:opacity-20"
                    onClick={closeMenu}
                  >
                    <Image
                      src={"/img/memoji.png"}
                      width={32}
                      height={32}
                      alt="memoji home"
                    />
                  </Link>
                  <Link
                    href="/#about"
                    className="hover:opacity-20"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className="hover:opacity-20"
                    onClick={closeMenu}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/#contact"
                    className="hover:opacity-20"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default BurgerMenu;
