import SectionTitle from "./SectionTitle";
import toolImg from "@/assets/icons/tool.svg";
import StackTag from "./StackTag";

export default function ProjectStacks({ stacks }: { stacks: string[] }) {
  return (
    <div className="space-y-4">
      <SectionTitle title="기술 스택" icon={toolImg} />
      <div className="flex gap-4 flex-wrap">
        {stacks.map((skill, i) => (
          <StackTag stack={skill} key={i} />
        ))}
      </div>
    </div>
  );
}
