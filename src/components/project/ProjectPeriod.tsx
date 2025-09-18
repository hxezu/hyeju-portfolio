import calendarImg from "@/assets/icons/calendar.svg";
import SectionTitle from "./SectionTitle";

export default function ProjectPeriod() {
  return (
    <div className="space-y-4">
      <SectionTitle title="작업 기간" icon={calendarImg} />
      <p className="text-[color:var(--color-gray-300)]">2025.06. - 2025.08.</p>
    </div>
  );
}
