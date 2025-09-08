import ProfileDetailHeader from "./ProfileDetailHeader";
import ProfileDetailItem from "./ProfileDetailItem";

const contacts = [
  { tag: "Email", content: "hailey_apple@icloud.com" },
  { tag: "Github", content: "https://github.com/hxezu" },
  { tag: "Velog", content: "https://velog.io/@hxezu" },
  { tag: "Phone", content: "+82 10-5058-1366" },
];

export default function ProfileInfoContact() {
  return (
    <div className="flex gap-10">
      <ProfileDetailHeader title="CONTACTS" />
      <div className="flex flex-col gap-2">
        {contacts.map((contact, i) => (
          <ProfileDetailItem
            tag={contact.tag}
            content={contact.content}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
