import TroubleImgBtn from "./TroubleImgBtn";
import TroubleLearnings from "./TroubleLearnings";
import TroubleResults from "./TroubleResults";
import TroubleSolutions from "./TroubleSolutions";
import TroubleTitle from "./TroubleTitle";

interface TroubleshootingItemProps {
  troubleshooting: {
    title: string;
    description: string;
    solution: string[];
    outcome: string[];
    learnings: string[];
  };
  color: string;
}

export default function TroubleshootingItem({
  troubleshooting,
  color,
}: TroubleshootingItemProps) {
  return (
    <div className="bg-[color:var(--color-bg-100)] rounded-3xl text-[color:var(--color-gray-400)] p-10 flex flex-col gap-10">
      <TroubleTitle
        title={troubleshooting.title}
        description={troubleshooting.description}
        color={color}
      />
      <TroubleSolutions solutions={troubleshooting.solution} />
      <TroubleResults results={troubleshooting.outcome} />
      <TroubleLearnings learnings={troubleshooting.learnings} />
      <TroubleImgBtn color={color} />
    </div>
  );
}
