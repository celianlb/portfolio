'use client';

import BurgerMenu from "./BurgerMenu/BurgerMenu";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <nav className="">
      <NavBar />
      <BurgerMenu />
    </nav>
  );
}