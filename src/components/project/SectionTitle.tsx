import Image, { StaticImageData } from "next/image";

interface SectionTitleProps {
  title: string;
  icon: StaticImageData;
}

export default function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-1">
      <Image src={icon} alt={`${title}이미지`} className="size-6" />
      <span className="text-xl font-bold text-[color:var(--color-gray-500)]">
        {title}
      </span>
    </div>
  );
}
