"use client";
import { useCursorStore } from "@/store/cursorStore";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const { hovered } = useCursorStore();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="cursor fixed w-[1vw] h-[1vw] rounded-full z-[9990] pointer-events-none mix-blend-difference transition-transform duration-100"
      style={{
        left: position.x,
        top: position.y,
        transform: hovered
          ? "translate(-50%, -50%) scale(1.8)"
          : "translate(-50%, -50%) scale(1)",
        backgroundColor: "white",
      }}
    />
  );
}
