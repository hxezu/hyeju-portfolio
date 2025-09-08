import ProfileInfoContact from "./ProfileInfoContact";
import ProfileInfoEdu from "./ProfileInfoEdu";
import ProfileInfoKeywords from "./ProfileInfoKeywords";
import ProfileInfoSkills from "./ProfileInfoSkills";
import ProfileInfoTools from "./ProfileInfoTools";

export default function ProfileInfoDetails() {
  return (
    <div className="w-[60%] flex-1 space-y-10">
      <ProfileInfoContact />
      <ProfileInfoEdu />
      <ProfileInfoKeywords />
      <ProfileInfoSkills />
      <ProfileInfoTools />
    </div>
  );
}
