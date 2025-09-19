"use client";
import { useCursorStore } from "@/store/cursorStore";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BackButton() {
  const params = useParams();
  const name = params?.name;
  const setHovered = useCursorStore((state) => state.setHovered);
  return (
    <Link
      href={`/#${name}`}
      className="fixed top-20 left-40 z-50 flex items-center justify-center w-12 h-12 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition cursor-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ChevronLeft size={24} />
    </Link>
  );
}
