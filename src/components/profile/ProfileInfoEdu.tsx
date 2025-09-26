import { profile } from "@/data/profile";
import ProfileDetailHeader from "./ProfileDetailHeader";
import ProfileDetailItem from "./ProfileDetailItem";

export default function ProfileInfoEdu() {
  return (
    <div className="flex gap-5 md:gap-10 md:flex-row flex-col">
      <ProfileDetailHeader title="EDUCATION" />
      <div className="flex flex-col gap-2">
        {profile.educations.map((education, i) => (
          <ProfileDetailItem
            tag={education.tag}
            content={education.content}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
