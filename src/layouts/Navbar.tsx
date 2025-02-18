import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBtn from "@/components/ui/animatedBtn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LogOut, VenetianMask } from "lucide-react";

const routes = [
  {
    route: "/notes",
    name: "Notes",
  },
  {
    route: "/paper",
    name: "Papers",
  },
  {
    route: "/development",
    name: "Development",
  },
  {
    route: "/cs-fundamentals",
    name: "CS Fundamentals",
  },
  {
    route: "/dsa",
    name: "DSA",
  },
  {
    route: "/aptitude",
    name: "Aptitude",
  },
];
const Navbar = () => {
  const isAuthenticated: boolean = true;

  return (
    <div className=" h-24 z-10 overflow-hidden bg-zinc-950 relative flex py-1 px-20 items-center justify-between">
      <Link href={"/"}>
        {" "}
        <Image src="/logo.gif" alt="logo" width={200} height={50} />
      </Link>
      <div className="text-white flex justify-center items-center gap-5">
        {routes.map((route: { route: string; name: string }, index) => (
          <Link href={route.route} key={index} className="font-normal">
            {route.name}
          </Link>
        ))}
      </div>

      {isAuthenticated ? (
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className=" w-52 bg-zinc-900 border-slate-500 text-white mr-5 mt-2">
             <h1 className="text-sm text-slate-300 border-b pb-1 border-slate-500/30 font-semibold">Actions</h1>
              <div className="flex gap-2 mt-3 flex-col">
                  <Link href={"/space"}  className="flex items-center border-b border-slate-500/30 pb-1 gap-1 w-full text-[15px] font-medium"><VenetianMask size={22} /> My Space</Link>
                  <Link href={"/space"}  className="flex items-center  gap-1 w-full text-[15px] font-medium"><LogOut size={22} />Logout</Link>
              </div>
          </PopoverContent>
        </Popover>
      ) : (
        <Link href={"/register"}>
          <AnimatedBtn className="w-20 h-auto">Login</AnimatedBtn>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
