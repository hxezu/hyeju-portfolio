import Image from "next/image";
import solution from "@/assets/icons/solution.svg";

export default function TroubleSolutions({
  solutions,
}: {
  solutions: string[];
}) {
  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-center">
        <Image sizes="16" className="w-6 h-6" src={solution} alt="해결 과정" />
        <h4 className="text-[color:var(--color-gray-400)] font-medium">
          해결 과정
        </h4>
      </div>
      <div className="space-y-1">
        {solutions.map((solution, i) => (
          <p key={i}>• {solution}</p>
        ))}
      </div>
    </div>
  );
}
