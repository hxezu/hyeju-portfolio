import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  index: number;
  imgSrc: StaticImageData;
  prjName: string;
  description: string;
  font: string;
}
export default function ProjectCard({
  id,
  imgSrc,
  prjName,
  index,
  description,
  font,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="relative">
        <Image src={imgSrc} alt={`${prjName} 이미지`} />
        <div className="absolute top-6 left-10 text-[color:var(--color-white)] space-y-2">
          <p className="text-xs">0{index}</p>
          <h2 className={`text-xl font-${font}`}>{prjName}</h2>
          <p className="text-xs whitespace-pre-line font-light">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
