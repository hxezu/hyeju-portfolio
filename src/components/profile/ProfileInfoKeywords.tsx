import { profile } from "@/data/profile";
import KeywordItem from "./KeywordItem";
import ProfileDetailHeader from "./ProfileDetailHeader";

export default function ProfileInfoKeywords() {
  return (
    <>
      <div className="flex gap-5 md:gap-10 md:flex-row flex-col">
        <ProfileDetailHeader title="KEYWORDS" />
        <div className="flex flex-wrap gap-2">
          {profile.keywords.map((keyword, i) => (
            <KeywordItem key={i} keyword={keyword} />
          ))}
        </div>
      </div>
    </>
  );
}
