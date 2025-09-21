"use client";
import { useCursorStore } from "@/store/cursorStore";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectTumbnailProps {
  id: string;
  index: number;
  imgSrc: StaticImageData;
  prjName: string;
  bio: string;
  font: string;
  bg: StaticImageData;
}
export default function ProjectTumbnail({
  id,
  imgSrc,
  prjName,
  index,
  bio,
  font,
  bg,
}: ProjectTumbnailProps) {
  const setHovered = useCursorStore((state) => state.setHovered);

  return (
    <div className="relative flex h-screen w-full justify-center items-center overflow-hidden">
      <Image
        src={bg}
        alt="배경 이미지"
        fill
        className="object-cover"
        loading="lazy"
      />

      <div className="relative z-10 flex w-full h-full md:flex-row flex-col">
        <div className=" text-white flex-1 flex justify-center items-start flex-col pl-10 md:pl-20 gap-5 pt-20 md:pt-0 z-20 ">
          <p className="text-xs">PROJECT 0{index}</p>
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-${font}`}>
            {prjName}
          </h2>
          <p className="text-base whitespace-pre-line font-light">{bio}</p>
          <Link
            href={`/projects/${id}`}
            className="flex items-center text-xs gap-1 cursor-none hover:font-semibold text-shine nav-underline pb-1 px-1"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            자세히 보기
          </Link>
        </div>

        <Link
          href={`/projects/${id}`}
          className="cursor-none flex md:flex-1 md:py-0 py-10"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image src={imgSrc} alt={`${prjName} 이미지`} />
        </Link>
      </div>
    </div>
  );
}
