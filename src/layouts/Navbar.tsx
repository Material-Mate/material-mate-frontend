import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedBtn from "@/components/ui/animatedBtn";

const routes = [
  {
    route:"/notes",
    name:"Notes"
  },
  {
    route:"/paper",
    name:"Papers"
  },
  {
    route:"/development",
    name:"Development"
  },
  {
    route:"/cs-fundamentals",
    name:"CS Fundamentals"
  },
  {
    route:"/dsa",
    name:"DSA"
  },
  {
    route:"/aptitude",
    name:"Aptitude"
  },
  {
    route:"/space",
    name:"My Space"
  }
]
const Navbar = () => {

  return (
    <div className=" h-20 z-10 overflow-hidden bg-zinc-950 relative flex py-1 px-20 items-center justify-between">
     <Link href={"/"}> <Image src="/logo.gif" alt="logo" width={250} height={250} /></Link>
      <div className="text-white flex justify-center items-center gap-5">
      {
        routes.map((route,index)=>(
          <Link href={route.route} key={index} className="font-normal">{route.name}</Link>
        ))
      }
      </div>
      <Link href={"/register"} ><AnimatedBtn className="w-20 h-auto">Login</AnimatedBtn></Link>
    </div>
  );
};

export default Navbar;
