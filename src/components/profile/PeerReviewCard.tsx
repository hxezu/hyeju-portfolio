import { PeerReview } from "@/data/reviews";
import Image from "next/image";
import quoteImg from "@/assets/icons/quote_icon.png";

interface PeerReviewCard {
  review: PeerReview;
}

export default function PeerReviewCard({ review }: PeerReviewCard) {
  return (
    <div
      key={review.id}
      className="bg-white relative rounded-xl p-6 border border-black text-black space-y-2"
    >
      <Image
        alt="인용 아이콘"
        className="absolute -top-6 w-10 h-10"
        src={quoteImg}
      />
      <p className="font-medium text-sm">{review.comment}</p>
      <span className="text-xs mt-1 text-[color:#5F5F5F]">{review.name}</span>
    </div>
  );
}
