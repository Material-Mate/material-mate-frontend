import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { BookHeadphones, NotepadText, Zap } from "lucide-react"

export function CarouselOrientation() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const data = [
    {
      icon:<NotepadText/>,
      title:"Comprehensive Resources",
      discription:"Access a vast library of notes, guides, and presentations to support your learning and exam preparation."
    },
    {
      icon:<Zap/>,
      title:"Free & Fast Downloads",
      discription:"Get study materials instantly with one click. No sign-ups, no delays—just fast and free downloads!"
    },
    {
      icon:<BookHeadphones />,
      title:"Student-Friendly & Community-Driven",
      discription:"Built by students, for students. High-quality, curated resources to help you study smarter and succeed."
    },
    {
      icon:<NotepadText/>,
      title:"Comprehensive Resources",
      discription:"Access a vast library of notes, guides, and presentations to support your learning and exam preparation."
    },
    {
      icon:<Zap/>,
      title:"Free & Fast Downloads",
      discription:"Get study materials instantly with one click. No sign-ups, no delays—just fast and free downloads!"
    },
    {
      icon:<BookHeadphones />,
      title:"Student-Friendly & Community-Driven",
      discription:"Built by students, for students. High-quality, curated resources to help you study smarter and succeed."
    },
  ]
  return (
    <Carousel
    plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full px-10 h-full"
    >
      <CarouselContent className="-mt-1 h-[25rem]">
        {data.map((obj, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
               <div className="h-16 w-16 text-green-500 border-zinc-500 rounded-full border-2 flex justify-center items-center">
                  {obj.icon}
               </div>
               <div className="text-xl font-semibold my-2">{obj.title}</div>
                <p className="text-slate-400 my-1 border-b pb-6 border-zinc-500/25">{obj.discription}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
