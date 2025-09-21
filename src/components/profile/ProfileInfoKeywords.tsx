import KeywordItem from "./KeywordItem";
import ProfileDetailHeader from "./ProfileDetailHeader";

const keywords = ["감각적인", "다재다능한", "책임감있는", "열정적인"];
export default function ProfileInfoKeywords() {
  return (
    <>
      <div className="flex gap-5 md:gap-10 md:flex-row flex-col">
        <ProfileDetailHeader title="KEYWORDS" />
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, i) => (
            <KeywordItem key={i} keyword={keyword} />
          ))}
        </div>
      </div>
    </>
  );
}
