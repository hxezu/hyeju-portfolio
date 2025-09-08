import KeywordItem from "./KeywordItem";
import ProfileDetailHeader from "./ProfileDetailHeader";

const keywords = ["감각적인", "다재다능한", "책임감있는"];
export default function ProfileInfoKeywords() {
  return (
    <>
      <div className="flex gap-10">
        <ProfileDetailHeader title="KEYWORDS" />
        <div className="flex gap-2">
          {keywords.map((keyword, i) => (
            <KeywordItem key={i} keyword={keyword} />
          ))}
        </div>
      </div>
    </>
  );
}
