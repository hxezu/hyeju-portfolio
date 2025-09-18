import Image, { StaticImageData } from "next/image";

interface ProjectBannerProps {
  name: string;
  bio: string;
  banner: StaticImageData;
  font: string;
  gradient: string;
}

export default function ProjectBanner({
  name,
  bio,
  banner,
  font,
  gradient,
}: ProjectBannerProps) {
  return (
    <div className={`relative h-130 w-full bg-gradient-to-b ${gradient} pt-15`}>
      <div className="w-full flex flex-col items-center text-white gap-3 mt-10">
        <span className={`font-${font} text-5xl`}>{name}</span>
        <span className="text-[color:var(--color-bg-200)]">{bio}</span>
      </div>
      <Image
        src={banner}
        alt={`${name} 목업`}
        className={`absolute left-1/2 -translate-x-1/2   h-auto z-20 ${
          name === "PORTFOLIO"
            ? "w-[640px] translate-y-20"
            : "w-[500px] translate-y-5"
        }`}
      />
    </div>
  );
}
