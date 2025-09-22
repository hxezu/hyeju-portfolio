import Image from "next/image";
import sprout from "@/assets/icons/sprout.svg";

export default function TroubleLearnings({
  learnings,
}: {
  learnings: string[];
}) {
  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-center">
        <Image sizes="16" className="w-6 h-6" src={sprout} alt="배운 점" />
        <h4 className="text-[color:var(--color-gray-400)] font-medium">
          배운 점
        </h4>
      </div>

      <div className="space-y-1">
        {learnings.map((learning, i) => (
          <p key={i}>• {learning}</p>
        ))}
      </div>
    </div>
  );
}
