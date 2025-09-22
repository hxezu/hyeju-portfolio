"use client";
import { useCursorStore } from "@/store/cursorStore";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BackButton() {
  const params = useParams();
  const name = params?.name;
  const setHovered = useCursorStore((state) => state.setHovered);
  return (
    <Link
      href={`/#${name}`}
      className="fixed bottom-20 right-10 md:right-20 2xl:right-70 z-50 flex items-center justify-center  py-2 px-4 rounded-full bg-white/20 shadow-lg backdrop-blur-md text-[color:var(--color-gray-200)] hover:bg-white/30 transition cursor-none gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Back
      <Undo2 size={16} />
    </Link>
  );
}
