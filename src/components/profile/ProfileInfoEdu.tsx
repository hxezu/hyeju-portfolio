import ProfileDetailHeader from "./ProfileDetailHeader";
import ProfileDetailItem from "./ProfileDetailItem";

const educations = [
  { tag: "2020.02", content: "삼성여자고등학교 졸업" },
  { tag: "2020.03", content: "건국대학교 컴퓨터공학부 입학" },
  { tag: "2023.09", content: "Czech Technical University in Prague 교환학생" },
  { tag: "2025.02", content: "Programmers Devcourse Front-End 4th" },
];

export default function ProfileInfoEdu() {
  return (
    <div className="flex gap-5 md:gap-10 md:flex-row flex-col">
      <ProfileDetailHeader title="EDUCATION" />
      <div className="flex flex-col gap-2">
        {educations.map((education, i) => (
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
