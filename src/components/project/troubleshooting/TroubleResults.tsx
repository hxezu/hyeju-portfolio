import Image from "next/image";
import rocket from "@/assets/icons/rocket.svg";

export default function TroubleResults({ results }: { results: string[] }) {
  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-center">
        <Image sizes="16" className="w-6 h-6" src={rocket} alt="결과" />
        <h4 className="text-[color:var(--color-gray-400)] font-medium">결과</h4>
      </div>
      <div className="space-y-1">
        {results.map((result, i) => (
          <p key={i}>• {result}</p>
        ))}
      </div>
    </div>
  );
}
