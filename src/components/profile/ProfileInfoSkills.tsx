import ProfileDetailHeader from "./ProfileDetailHeader";
import cssImg from "@/assets/icons/css.png";
import htmlImg from "@/assets/icons/html.png";
import tsImg from "@/assets/icons/typescript.png";
import jsImg from "@/assets/icons/javascript.png";
import reactImg from "@/assets/icons/react.png";
import nextImg from "@/assets/icons/nextjs.png";
import tailwindImg from "@/assets/icons/tailwindcss.png";
import tanstackImg from "@/assets/icons/react-query.png";
import zustandImg from "@/assets/icons/zustand.png";
import Image from "next/image";

const skills = [
  { src: cssImg, alt: "CSS" },
  { src: htmlImg, alt: "HTML" },
  { src: tsImg, alt: "Typescript" },
  { src: jsImg, alt: "Javascript" },
  { src: reactImg, alt: "React" },
  { src: nextImg, alt: "Nextjs" },
  { src: tailwindImg, alt: "TailwindCss" },
  { src: tanstackImg, alt: "Tanstack" },
  { src: zustandImg, alt: "Zustand" },
];

export default function ProfileInfoSkills() {
  return (
    <div className="flex gap-10">
      <ProfileDetailHeader title="SKILLS" />
      <div className="flex gap-4">
        {skills.map((skill, i) => (
          <div key={i} className="w-6 h-6 relative">
            <Image
              src={skill.src}
              alt={skill.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
