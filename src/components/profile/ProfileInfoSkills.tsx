import { profile } from "@/data/profile";
import ProfileDetailHeader from "./ProfileDetailHeader";
import Image from "next/image";

export default function ProfileInfoSkills() {
  return (
    <div className="flex gap-5 md:gap-10 md:flex-row flex-col">
      <ProfileDetailHeader title="SKILLS" />
      <div className="flex gap-4 flex-wrap">
        {profile.skills.map((skill, i) => (
          <div key={i} className="w-6 h-6 relative">
            <Image
              src={skill.src}
              alt={skill.alt}
              sizes="24"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
