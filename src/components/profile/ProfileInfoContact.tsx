import { profile } from "@/data/profile";
import ProfileDetailHeader from "./ProfileDetailHeader";
import ProfileDetailItem from "./ProfileDetailItem";

export default function ProfileInfoContact() {
  return (
    <div className="flex gap-5 md:gap-10 md:flex-row flex-col">
      <ProfileDetailHeader title="CONTACTS" />
      <div className="flex flex-col gap-2">
        {profile.contacts.map((contact, i) => (
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
