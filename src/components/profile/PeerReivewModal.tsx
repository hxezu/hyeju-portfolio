import { ArrowUpRight, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function PeerReivewModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[color:var(--color-black)] py-3 px-6 rounded-full text-xs flex gap-2 cursor-pointer">
          <p className="font-light">
            <span className="font-medium">Peer Review</span> 보기
          </p>
          <ArrowUpRight strokeWidth={1} size={16} />
        </button>
      </DialogTrigger>

      <DialogContent className="fixed left-1/2 top-1/2 w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
        <DialogClose asChild>
          <button className="absolute top-2 right-2 z-50 p-2 text-gray-500 rounded-lg hover:bg-[color:#f0f0f0] cursor-pointer">
            <X size={16} />
          </button>
        </DialogClose>

        <div className="p-4">
          <DialogTitle>Peer Review</DialogTitle>
        </div>
      </DialogContent>
    </Dialog>
  );
}
