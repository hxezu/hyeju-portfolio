import ProfileInfoContact from "./ProfileInfoContact";
import ProfileInfoEdu from "./ProfileInfoEdu";
import ProfileInfoKeywords from "./ProfileInfoKeywords";
import ProfileInfoSkills from "./ProfileInfoSkills";
import ProfileInfoTools from "./ProfileInfoTools";

export default function ProfileInfoDetails() {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center px-5 md:px-0">
      <div className="space-y-10">
        <ProfileInfoContact />
        <ProfileInfoEdu />
        <ProfileInfoKeywords />
        <ProfileInfoSkills />
        <ProfileInfoTools />
      </div>
    </div>
  );
}
