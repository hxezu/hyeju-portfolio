import SectionTitle from "./SectionTitle";
import cometImg from "@/assets/icons/comet.svg";
import TroubleshootingItem from "./troubleshooting/TroubleshootingItem";

interface ProjectTroubleShootingsProps {
  troubleshootings: {
    title: string;
    description: string;
    solution: string[];
    outcome: string[];
    learnings: string[];
  }[];
  theme: string;
}

export default function ProjectTroubleShootings({
  troubleshootings,
  theme,
}: ProjectTroubleShootingsProps) {
  return (
    <div className="space-y-4">
      <SectionTitle title="트러블 슈팅" icon={cometImg} />
      <div className="flex flex-col gap-10">
        {troubleshootings.map((troubleshooting, i) => (
          <TroubleshootingItem
            key={i}
            troubleshooting={troubleshooting}
            color={theme}
          />
        ))}
      </div>
    </div>
  );
}
