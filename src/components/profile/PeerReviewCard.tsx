import { PeerReview } from "@/data/reviews";

interface PeerReviewCard {
  review: PeerReview;
}

export default function PeerReviewCard({ review }: PeerReviewCard) {
  return (
    <div
      key={review.id}
      className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow text-white"
    >
      <p className="font-medium">{review.comment}</p>
      <span className="text-xs mt-1">{review.name}</span>
    </div>
  );
}
