import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
const CsFundamentalCards = ({onclick,animation,index}: {
  onclick: React.Dispatch<React.SetStateAction<boolean>>;
  animation: Variants;
  index: number;
}) => {
  return (
    <motion.div 
    className="shadow-xl bg-zinc-900 rounded-xl p-5 w-[350px] overflow-hidden"
    onClick={()=>onclick(true)}
    variants={animation}
    initial="initial"
    whileInView="animate"
    viewport={{once:true}}
    custom={index}
    >
      <Image
        src={
          "https://i.ytimg.com/vi/3obEP8eLsCw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvvuwt75TAv-edM24Ik5Ulmp7DRw"
        }
        height={500}
        width={350}
        alt=""
        className="rounded-xl"
      />
      <div className="py-2 px-1">
        <h3 className="text-xl font-semibold">Operating System</h3>
        <p className="text-sm text-zinc-400 py-2">
          Operating System is one of most crucial subject for placements. Asked
          by many big giants like FANG.
        </p>
        <Button
          variant={"secondary"}
          className=" w-full text-white mt-2 bg-gradient-to-r text-md from-purple-400 to-purple-600"
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

export default CsFundamentalCards;
