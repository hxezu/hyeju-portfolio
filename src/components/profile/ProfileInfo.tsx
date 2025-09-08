import Image from "next/image";
import profileImg from "@/assets/images/profile.jpg";
import ProfileInfoDetails from "./ProfileInfoDetails";
import { ArrowUpRight } from "lucide-react";

export default function ProfileInfo() {
  return (
    <div className="flex items-center justify-center w-[80%]">
      <div className="w-[50%] flex flex-col justify-center items-center text-[color:var(--color-white)] gap-10">
        <Image src={profileImg} alt="프로필 이미지" className="w-70 h-auto" />
        <button className="bg-[color:var(--color-black)] py-3 px-6 rounded-full text-xs flex gap-2">
          <p className="font-light">
            <span className="font-medium">Peer Review</span> 보기
          </p>
          <ArrowUpRight strokeWidth={1} size={16} />
        </button>
      </div>

      <ProfileInfoDetails />
    </div>
  );
}
