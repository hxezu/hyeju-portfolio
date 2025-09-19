"use client";
import { useCursorStore } from "@/store/cursorStore";
import { useCallback, useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const { hovered } = useCursorStore();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  const move = useCallback((e: MouseEvent) => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      rafRef.current = undefined;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [move]);

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
        willChange: "transform",
      }}
    />
  );
}
