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
import { FiDownload } from "react-icons/fi";

export function UnitsDialogBox({
  dialogBoxOpen,
  setDialogBoxOpen,
}: {
  dialogBoxOpen: boolean;
  setDialogBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const units = [1,2,3,4,5]
  return (
    <Dialog open={dialogBoxOpen} onOpenChange={setDialogBoxOpen}>
      <DialogContent className="sm:max-w-[425px] bg-black">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Units for{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Dot net with C#
            </span>
          </DialogTitle>
          <DialogDescription>
            Here are the units for the subject Dot net with C#
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 w-full">
          {
            units.map((unit,index)=>(
                <div key={index} className="w-full py-3 rounded-lg border flex justify-between items-center px-5">
                <p>Unit 1st: Download </p>
                <FiDownload className="text-xl" />
              </div>
            ))
          }
        </div>
        <DialogFooter className="w-full">
          <Button onClick={()=>setDialogBoxOpen(false)} className="w-full bg-gradient-to-r from-indigo-500 to-purple-500">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
