import fireImg from "@/assets/icons/fire.svg";
import SectionTitle from "./SectionTitle";

export default function ProjectDescription() {
  return (
    <div className="w-full bg-[color:var(--color-bg-100)] flex h-50 items-start p-10 rounded-3xl">
      <div className="space-y-4">
        <SectionTitle icon={fireImg} title="간단 소개" />

        <p className="text-[color:var(--color-gray-300)]">
          소개 내용을 작성해주세요.
        </p>
      </div>
    </div>
  );
}
