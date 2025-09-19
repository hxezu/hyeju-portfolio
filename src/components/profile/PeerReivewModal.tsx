"use client";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { reviews } from "@/data/reviews";
import PeerReviewCard from "./PeerReviewCard";
import { useCursorStore } from "@/store/cursorStore";

export default function PeerReivewModal() {
  const { setHovered } = useCursorStore();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="cursor-none bg-[color:var(--color-black)] py-3 px-6 rounded-full text-xs flex gap-2 shadow-2xl transform transition-transform duration-200 ease-in-out hover:scale-105"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <p className="font-light">
            <span className="font-medium">Peer Review</span> 보기
          </p>
          <ArrowUpRight strokeWidth={1} size={16} />
        </button>
      </DialogTrigger>

      <DialogContent className="fixed left-1/2 top-1/2 w-[60vw] h-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-[#F9F9FB] overflow-hidden">
        {/* <div className="absolute inset-0 w-full h-full -left-120 -top-20">
          <HaileySvg className=" w-[2000px] h-[800px] -rotate-15 overflow-visible opacity-80" />
        </div> */}

        <div className="relative z-10 h-full overflow-y-auto p-10 scrollbar-hide">
          <DialogTitle></DialogTitle>
          <div className="space-y-8">
            {reviews.map((review) => (
              <PeerReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
