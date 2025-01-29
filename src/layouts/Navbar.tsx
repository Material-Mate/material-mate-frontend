import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <div className=" h-20  bg-zinc-950 relative flex py-1 px-20 items-center shadow-[0_0_30px_5px_rgba(50,50,50,0.8)] justify-between">
     <Link href={"/"}> <Image src="/logo.gif" alt="logo" width={250} height={250} /></Link>
      <div className="text-white flex justify-center items-center gap-5">
      {
        routes.map((route,index)=>(
          <Link href={route.route} key={index} className="font-medium">{route.name}</Link>
        ))
      }
      </div>
      <Button className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 h-10 w-20 font-semibold text-md hover:bg-purple-500">Login</Button>
    </div>
  );
};

export default Navbar;
