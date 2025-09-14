import { ArrowUpRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function PeerReivewModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover-target cursor-none bg-[color:var(--color-black)] py-3 px-6 rounded-full text-xs flex gap-2 ">
          <p className="font-light">
            <span className="font-medium">Peer Review</span> 보기
          </p>
          <ArrowUpRight strokeWidth={1} size={16} />
        </button>
      </DialogTrigger>

      <DialogContent className="fixed left-1/2 top-1/2 w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
        <div className="p-4">
          <DialogTitle>Peer Review</DialogTitle>
        </div>
      </DialogContent>
    </Dialog>
  );
}
