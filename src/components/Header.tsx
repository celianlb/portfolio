"use client";

import BurgerMenu from "./BurgerMenu/BurgerMenu";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <nav className="flex flex-row items-center justify-center">
      <NavBar />
      <BurgerMenu />
    </nav>
  );
}
