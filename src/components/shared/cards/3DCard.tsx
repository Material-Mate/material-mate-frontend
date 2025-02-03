"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined } from "lucide-react";
import { CarouselOrientation } from "../carousels/Carousel";

export function ThreeDCardDemo() {
  return (
<CardContainer 
className="inter-var relative rounded-2xl w-full h-screen hover:bg-green-500/10 shadow-[0_0_15px_5px_rgba(34,197,94,0.5)]  hover:shadow-[0_0_20px_10px_rgba(34,197,94,0.5)]"
>

 <div className="h-20 z-10 text-green-500 font-semibold text-xl w-20 absolute -top-10 -left-10 flex justify-center items-center rounded-full  border-green-400 border bg-green-500/25">
 <ChartNoAxesCombined size={28} />
 </div>
      <CardBody className="bg-tranparent w-full  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border-2 kkkn">
         <CardItem className="w-full kkkn" >
             <div className="flex justify-center items-center w-full ">
              <div className="w-1/2"> 
                <CarouselOrientation/>
              </div>
              <div className="w-1/2 ">
               <p className="text-green-400 font-normal text-lg mb-4">Find. Download. Learn</p>
               <p className="font-semibold text-[3rem] leading-[3rem] mb-3">Your Ultimate Learning Companion!</p>
               <p className="text-slate-300 ">Whether you're a beginner or an expert, MaterialMate provides the best resources to help you:</p>
               <Button className="mt-14 rounded-3xl py-6 text-md px-6 bg-gradient-to-r from-green-400 to-green-600">Let's Connect</Button>
              </div>
             </div>
         </CardItem>
      </CardBody>
    </CardContainer>
  );
}
