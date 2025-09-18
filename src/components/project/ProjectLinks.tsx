import SectionTitle from "./SectionTitle";
import linkImg from "@/assets/icons/link.svg";

export default function ProjectLinks() {
  return (
    <div className="space-y-4">
      <SectionTitle title="프로젝트 관련 링크" icon={linkImg} />
      <ul className="text-[color:var(--color-gray-300)] space-y-2">
        <li>
          •{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:font-medium"
          >
            배포 사이트
          </a>
        </li>
        <li>
          •{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:font-medium"
          >
            깃허브 링크
          </a>
        </li>
      </ul>
    </div>
  );
}
