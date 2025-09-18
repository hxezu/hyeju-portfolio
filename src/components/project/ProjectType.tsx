import SectionTitle from "./SectionTitle";
import teamImg from "@/assets/icons/team.svg";

export default function ProjectType() {
  return (
    <div className="space-y-4">
      <SectionTitle title="프로젝트 유형" icon={teamImg} />
      <p className="text-[color:var(--color-gray-300)]">
        팀프로젝트 (FrontEnd 5명, BackEnd 5명)
      </p>
    </div>
  );
}
