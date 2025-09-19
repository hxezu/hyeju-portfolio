"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const hoverEls = document.querySelectorAll(".hover-target");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });
  }, []);

  return (
    <div
      className="cursor fixed w-[1vw] h-[1vw] rounded-full z-[9990] pointer-events-none mix-blend-difference transition-transform duration-100"
      style={{
        left: position.x,
        top: position.y,
        transform: hovered
          ? "translate(-50%, -50%) scale(1.5)"
          : "translate(-50%, -50%) scale(1)",
        backgroundColor: "white",
      }}
    />
  );
}
