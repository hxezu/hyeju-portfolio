"use client";
import { useCursorStore } from "@/store/cursorStore";
import { li } from "framer-motion/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "splitting/dist/splitting.css";

export default function Header() {
  const { setHovered } = useCursorStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    let prevScroll = 0;

    const handleScroll = () => {
      const nowScroll = window.scrollY;
      if (nowScroll > prevScroll) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
      prevScroll = nowScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`cursor-none fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform text-white font-light ${
        scrollDown ? "translate-y-[-100%]" : " translate-y-0"
      }`}
    >
      <Link
        href="/"
        className="cursor-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="font-cormorant">hyeju</span>Portfolio
      </Link>

      <nav className="gnb hidden md:block text-sm">
        <ul className="flex gap-8">
          {["About", "Projects", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`/#${item.toLowerCase()}`}
                className="cursor-none relative inline-block overflow-hidden"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {item.split("").map((char, i) => (
                  <span
                    key={i}
                    className="char relative inline-block"
                    style={{ "--char-index": i } as React.CSSProperties}
                    data-char={char}
                  >
                    {char}
                  </span>
                ))}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`cursor-none menuOpen md:hidden relative w-6 h-4 flex flex-col justify-between z-50`}
        onClick={() => setMenuOpen(!menuOpen)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className={`block h-[2px] w-full  transition-transform  ${
            menuOpen ? "rotate-45 translate-y-[7px] bg-black" : "bg-white"
          }`}
        />
        <span
          className={`block h-[2px] w-full  transition-transform ${
            menuOpen ? "-rotate-45 -translate-y-[7px] bg-black" : "bg-white"
          }`}
        />
      </button>

      <nav
        className={`fixed top-0 right-0 w-[60vw] h-screen bg-white text-black z-40 transition-all duration-500 overflow-hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10 text-4xl">
          {["About", "Projects", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`/#${item.toLowerCase()}`}
                className={`cursor-none ${
                  item !== "Projects" ? "font-cormorant text-5xl" : ""
                }`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
