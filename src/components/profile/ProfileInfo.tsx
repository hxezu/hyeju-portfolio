import Image from "next/image";
import profileImg from "@/assets/images/profile.jpg";
import ProfileInfoDetails from "./ProfileInfoDetails";
import PeerReivewModal from "./PeerReivewModal";

export default function ProfileInfo() {
  return (
    <div className="flex items-center justify-center lg:px-20 flex-col md:flex-row gap-10 md:gap-0">
      <div className="px-10 lg:px-20 flex flex-col justify-center items-center text-white gap-10 lg:w-[40%]">
        <Image
          src={profileImg}
          alt="프로필 이미지"
          className="w-50 lg:w-60 xl:w-70 h-auto"
        />
        <PeerReivewModal />
      </div>

      <ProfileInfoDetails />
    </div>
  );
}
