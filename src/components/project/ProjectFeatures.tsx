import SectionTitle from "./SectionTitle";
import notebookImg from "@/assets/icons/notebook.svg";

export default function ProjectFeatures() {
  return (
    <div className="space-y-4">
      <SectionTitle title="구현한 기능" icon={notebookImg} />
      <p className="text-[color:var(--color-gray-300)]">
        담당 역할을 적어주세요.
      </p>
    </div>
  );
}
