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
  return (
    <div className="relative flex h-screen w-full justify-center items-center overflow-hidden">
      <Image
        src={bg}
        alt="배경 이미지"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 flex w-full h-full">
        <div className=" text-white flex-1 flex justify-center items-start flex-col pl-20 gap-5">
          <p className="text-xs">PROJECT 0{index}</p>
          <h2 className={`text-6xl font-${font}`}>{prjName}</h2>
          <p className="text-base whitespace-pre-line font-light">{bio}</p>
          <button className="flex items-center text-xs gap-1 hover-target cursor-none hover:font-semibold">
            자세히 보기 <ArrowRight strokeWidth={1.8} size={14} />
          </button>
        </div>

        <Link
          href={`/projects/${id}`}
          className="hover-target cursor-none flex flex-1"
        >
          <Image src={imgSrc} alt={`${prjName} 이미지`} />
        </Link>
      </div>
    </div>
  );
}
