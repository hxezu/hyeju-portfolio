import SectionTitle from "./SectionTitle";
import teamImg from "@/assets/icons/team.svg";

export default function ProjectType({ type }: { type: string }) {
  return (
    <div className="space-y-4">
      <SectionTitle title="프로젝트 유형" icon={teamImg} />
      <p className="text-[color:var(--color-gray-300)]">{type}</p>
    </div>
  );
}
