"use client";

import Link from "next/link";

interface ScrollDownProps {
  target?: string;
}

export default function ScrollDown({ target }: ScrollDownProps) {
  return (
      <Link
        data-te-smooth-scroll-init
        className=""
        href="#about"
        target={target}
      >
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </Link>
  );
}
