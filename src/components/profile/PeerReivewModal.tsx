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
import { motion, Variants, easeOut } from "framer-motion";

export default function PeerReivewModal() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };
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

      <DialogContent className="fixed left-1/2 top-1/2 w-[90vw] xl:w-[60vw] h-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white overflow-hidden">
        {/* <div className="absolute inset-0 w-full h-full -left-120 -top-20">
          <HaileySvg className=" w-[2000px] h-[800px] -rotate-15 overflow-visible opacity-80" />
        </div> */}

        <div className="relative z-10 h-full overflow-y-auto p-10 scrollbar-hide">
          <DialogTitle></DialogTitle>
          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <PeerReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
