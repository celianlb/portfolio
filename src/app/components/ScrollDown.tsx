"use client";

import Link from "next/link";

interface ScrollDownProps {
  className?: string;
  href: string;
  target?: string;
}

export default function ScrollDown({ className, href , target}: ScrollDownProps) {
  return (
      <Link className={className} href={href} target={target}>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </Link>
  );
}
