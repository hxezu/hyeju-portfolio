"use client";
import { useCursorStore } from "@/store/cursorStore";
import SectionTitle from "./SectionTitle";
import linkImg from "@/assets/icons/link.svg";

interface ProjectLinksProps {
  links: {
    website?: string;
    github?: string;
  };
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  const setHovered = useCursorStore((state) => state.setHovered);
  return (
    <div className="space-y-4">
      <SectionTitle title="프로젝트 관련 링크" icon={linkImg} />
      <ul className="text-[color:var(--color-gray-300)] space-y-2">
        <li>
          •{" "}
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:font-medium cursor-none"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            배포 사이트
          </a>
        </li>
        <li>
          •{" "}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:font-medium cursor-none"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            깃허브 링크
          </a>
        </li>
      </ul>
    </div>
  );
}
