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
import Link from "next/link";
const CsFundatmentalDialogBox = ({
  activeSubject,
  isOpen,
  onChange,
}: {
  activeSubject:CSSubject
  isOpen: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="sm:max-w-[90%] h-[65%]  bg-zinc-950 flex">
        <Image
          src={
            activeSubject.thumbnail
          }
          height={550}
          width={550}
          alt=""
          className="rounded-xl"
        />
      <div className="w-1/2 h-full">
      <DialogHeader className="h-[10%]">
          <DialogTitle className="text-2xl">
            <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
             {activeSubject.name}
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 w-full h-[78%] overflow-y-auto px-2 py-6">
          {activeSubject.videos_links.map((link, index) => (
            <div
              key={index}
              className="w-full py-3 rounded-lg border border-slate-400 flex justify-between items-center px-5"
            >
              <p>Lecture {index+1}: {activeSubject.name}</p>
             
             <Link href={link} className="p-2 cursor-pointer hover:scale-95 hover:bg-purple-500 border rounded-full"
             >
             <Play size={15}/>
             </Link>
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
            className="flex gap-1 items-center bg-gradient-to-r mt-2 w-1/2 from-purple-400 to-purple-600"
          >
            <Link href={activeSubject.notes_link} className="flex gap-1 items-center">
            <Download/>
            Dowload Notes
            </Link>
           
          </Button>
        </DialogFooter>
      </div>
      </DialogContent>
    </Dialog>
  );
};

export default CsFundatmentalDialogBox;
