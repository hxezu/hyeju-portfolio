import Image from "next/image";
import profileImg from "@/assets/images/profile.jpg";
import ProfileInfoDetails from "./ProfileInfoDetails";

export default function ProfileInfo() {
  return (
    <div className="flex items-center justify-center w-[80%]">
      <div className="w-[50%] flex justify-center items-center">
        <Image src={profileImg} alt="프로필 이미지" className="w-80 h-auto" />
      </div>

      <ProfileInfoDetails />
    </div>
  );
}
