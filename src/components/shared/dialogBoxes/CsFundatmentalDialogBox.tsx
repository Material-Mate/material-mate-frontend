import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, Play } from "lucide-react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
const CsFundatmentalDialogBox = ({
  isOpen,
  onChange,
}: {
  isOpen: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="sm:max-w-[90%] h-[65%]  bg-zinc-950 flex">
        <Image
          src={
            "https://i.ytimg.com/vi/3obEP8eLsCw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvvuwt75TAv-edM24Ik5Ulmp7DRw"
          }
          height={550}
          width={550}
          alt=""
          className="rounded-xl"
        />
      <div className="w-1/2 h-full">
      <DialogHeader className="h-[10%]">
          <DialogTitle className="text-2xl">
            Operating{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
             System
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 w-full h-[78%] overflow-y-auto px-2 py-6">
          {[1, 4, 5,6,3,2,4].map((paper, index) => (
            <div
              key={index}
              className="w-full py-3 rounded-lg border border-slate-400 flex justify-between items-center px-5"
            >
              <p>Lecture 1: Operating System</p>
             
             <div className="p-2 cursor-pointer hover:scale-95 hover:bg-purple-500 border rounded-full">
             <Play size={15}/>
             </div>
            </div>
          ))}
        </div>
        <DialogFooter className="w-full flex h-[12%]">
          <Button
            onClick={() => onChange(false)}
            className="bg-gradient-to-r mt-2 w-1/2"
          >
            Close
          </Button>
          <Button
            onClick={() => onChange(false)}
            className="flex gap-1 items-center bg-gradient-to-r mt-2 w-1/2 from-purple-400 to-purple-600"
          >
            <Download/>
            Dowload Notes
          </Button>
        </DialogFooter>
      </div>
      </DialogContent>
    </Dialog>
  );
};

export default CsFundatmentalDialogBox;
