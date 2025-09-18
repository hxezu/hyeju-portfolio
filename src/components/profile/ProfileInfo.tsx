import Image from "next/image";
import profileImg from "@/assets/images/profile.jpg";
import ProfileInfoDetails from "./ProfileInfoDetails";
import PeerReivewModal from "./PeerReivewModal";

export default function ProfileInfo() {
  return (
    <div className="flex items-center justify-center w-[80%]">
      <div className="w-[50%] flex flex-col justify-center items-center text-white gap-10">
        <Image src={profileImg} alt="프로필 이미지" className="w-70 h-auto" />
        <PeerReivewModal />
      </div>

      <ProfileInfoDetails />
    </div>
  );
}
