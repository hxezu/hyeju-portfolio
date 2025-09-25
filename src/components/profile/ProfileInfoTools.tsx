import { profile } from "@/data/profile";
import ProfileDetailHeader from "./ProfileDetailHeader";
import Image from "next/image";

export default function ProfileInfoTools() {
  return (
    <div className="flex gap-5 md:gap-10 md:flex-row flex-col">
      <ProfileDetailHeader title="TOOLS" />
      <div className="flex gap-4">
        {profile.tools.map((tool, i) => (
          <div key={i} className="w-6 h-6 relative">
            <Image
              src={tool.src}
              alt={tool.alt}
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
