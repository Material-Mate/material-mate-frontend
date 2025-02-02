"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import AnimatedBtn from "../ui/animatedBtn"

export function SubjectDrawer({open,onChange}:{
  open:boolean,
  onChange:React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer open={open} onOpenChange={onChange}>
      <DrawerContent className="bg-zinc-950 border-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="px-1">
            <DrawerTitle>All Subjects</DrawerTitle>
            <DrawerDescription>Click on any subject to get the notes.</DrawerDescription>
          </DrawerHeader>
         <div >
            {
                [1,2,3,4,5].map((n)=>{
                    return <AnimatedBtn key={n} className="mb-2">Subject {n}</AnimatedBtn>
                })
            }
         </div>
          <DrawerFooter className="px-0">
            <DrawerClose asChild>
              <Button className="w-full py-5 text-lg">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
