"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined } from "lucide-react";
import { CarouselOrientation } from "../carousels/Carousel";
import clsx from "clsx";

export function ThreeDCardDemo({
  title,
  isSecondCard,
  discription,
}: {
  title: string;
  isSecondCard: boolean;
  discription: string;
}) {
 
  return (
    <CardContainer
    className={clsx(
      "inter-var relative rounded-2xl w-full h-screen transition-all",
      {
        " hover:bg-red-600/10  hover:shadow-[0_0_20px_10px_rgba(239,68,68,0.5)]":
          isSecondCard,
        " hover:bg-green-600/10 hover:shadow-[0_0_20px_10px_rgba(34,197,94,0.5)]":
          !isSecondCard,
      }
    )}
  >
  
      <div
        className={clsx(
          "h-20 z-10 font-semibold text-xl w-20 absolute -top-10 -left-10 flex justify-center items-center rounded-full border",
          {
            "text-red-500 border-red-400 bg-red-500/25": isSecondCard,
            "text-green-500 border-green-400 bg-green-500/25": !isSecondCard,
          }
        )}
      >
        <ChartNoAxesCombined size={28} />
      </div>

      <CardBody className="bg-transparent w-full relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border-2">
        <CardItem className="w-full">
          <div className={`flex justify-center items-center w-full ${isSecondCard?"flex-row-reverse px-10":""}`}>
            <div className="w-1/2">
              <CarouselOrientation isSecondCard={isSecondCard} />
            </div>
            <div className="w-1/2">
              <p className={clsx("font-normal text-lg mb-4", {
                "text-red-400": isSecondCard,
                "text-green-400": !isSecondCard,
              })}>
                Find. Download. Learn
              </p>
              <p className="font-semibold text-[3rem] leading-[3rem] mb-3">{title}</p>
              <p className="text-slate-300">{discription}</p>
              <Button
                className={clsx(
                  "mt-14 rounded-3xl py-6 text-md px-6 bg-gradient-to-r",
                  {
                    "from-red-400 to-red-600": isSecondCard,
                    "from-green-400 to-green-600": !isSecondCard,
                  }
                )}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
