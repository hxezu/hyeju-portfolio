import SectionTitle from "./SectionTitle";
import toolImg from "@/assets/icons/tool.svg";
import StackTag from "./StackTag";
const skills = ["Next.js", "Typescript"];

export default function ProjectStacks() {
  return (
    <div className="space-y-4">
      <SectionTitle title="기술 스택" icon={toolImg} />
      <div className="flex gap-4">
        {skills.map((skill, i) => (
          <StackTag stack={skill} key={i} />
        ))}
      </div>
    </div>
  );
}
