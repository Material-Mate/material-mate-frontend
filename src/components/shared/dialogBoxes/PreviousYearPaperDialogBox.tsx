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

const PreviousYearPaperDialogBox = ({
    previousYearDialogBoxOpen,
    setPreviousYearDialogBoxOpen,
  }: {
    previousYearDialogBoxOpen: boolean;
    setPreviousYearDialogBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    const papers = [1,2,3,4,5]
  return (
    <Dialog open={previousYearDialogBoxOpen} onOpenChange={setPreviousYearDialogBoxOpen}>
      <DialogContent className="sm:max-w-[425px] bg-black">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Previous Year Papers for{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Dot net with C#
            </span>
          </DialogTitle>
          <DialogDescription>
            Here are the previous year papers for subject Dot net with C#
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 w-full">
          {
            papers.map((paper,index)=>(
                <div key={index} className="w-full py-3 rounded-lg border flex justify-between items-center px-5">
                <p>2022-2023: Download </p>
                <FiDownload className="text-xl" />
              </div>
            ))
          }
        </div>
        <DialogFooter className="w-full">
          <Button onClick={()=>setPreviousYearDialogBoxOpen(false)} className="w-full bg-gradient-to-r from-indigo-500 to-purple-500">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PreviousYearPaperDialogBox