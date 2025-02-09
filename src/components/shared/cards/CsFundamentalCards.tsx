import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
const CsFundamentalCards = ({onClick,animation,index,subject}: {
  subject:CSSubject
  onClick: (data: CSSubject) => void;
  animation: Variants;
  index: number;
}) => {
  return (
    <motion.div 
    id='shadow_for_card_2' 
    className="shadow-xl bg-zinc-900 rounded-xl p-5 w-[310px] overflow-hidden"
    variants={animation}
    initial="initial"
    whileInView="animate"
    viewport={{once:true}}
    custom={index}
    >
      <Image
        src={
        subject.thumbnail 
        }
        height={500}
        width={350}
        alt=""
        className="rounded-xl"
      />
      <div className="py-2 px-1">
        <h3 className="text-xl font-semibold">{subject.name}</h3>
        <p className="text-sm text-zinc-400 py-2">
         {subject.discription}
        </p>
        <Button
          variant={"secondary"}
          onClick={()=>onClick(subject)}
          className=" w-full text-white mt-2 bg-gradient-to-r text-md from-purple-400 to-purple-600"
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

export default CsFundamentalCards;
