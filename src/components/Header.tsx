"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    Splitting();
  }, []);

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
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform text-[color:var(--color-white)] font-light ${
        scrollDown ? "translate-y-[-100%]" : " translate-y-0"
      }`}
    >
      <Link href="/" className="text-2xl">
        <span className="font-cormorant">hxezu</span>Portfolio
      </Link>

      <nav className="gnb hidden md:block">
        <ul className="flex gap-8">
          {["About", "Projects", "Contact"].map((item, idx) => (
            <li key={idx}>
              <a href="#" className="relative inline-block overflow-hidden">
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
    </header>
  );
}
