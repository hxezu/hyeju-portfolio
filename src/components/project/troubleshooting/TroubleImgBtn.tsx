import { useCursorStore } from "@/store/cursorStore";

interface TroubleImgBtnProps {
  color: string;
}
export default function TroubleImgBtn({ color }: TroubleImgBtnProps) {
  const { setHovered } = useCursorStore();
  return (
    <div className="w-full justify-center items-center flex">
      <button
        className="text-white px-4 py-2 rounded-lg text-sm cursor-none hover:scale-105 transform transition-transform duration-200 ease-in-out"
        style={{ backgroundColor: `var(--color-${color})` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        스크린샷 보기
      </button>
    </div>
  );
}
