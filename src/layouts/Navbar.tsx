import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CgNotes } from "react-icons/cg";
import Link from "next/link";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

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
  return (
    <div className="bg-slate-950 h-20 z-10 flex py-1 px-5 md:px-16 lg:px-20 items-center drop-shadow-[0_4px_10px_rgba(180,0,255,0.3)] shadow-xl justify-between">
      <Link href={"/"}>
        {" "}
        <Image src="/logo.gif" alt="logo" width={250} height={250} />
      </Link>
      <div className="text-white flex justify-center items-center gap-5">
        {routes.map((route, index) => (
          <Link href={route.route} key={index} className="font-medium">
            {route.name}
          </Link>
        ))}
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="cursor-pointer"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="bg-slate-950 border-slate-700 border rounded-lg p-4 shadow-lg h-auto w-40 mt-5">
          <div className="flex gap-2 items-center">
            <CgNotes />
            <Link href={"/user/space"} className="text-sm font-medium">Your Space</Link>
          </div>
        </PopoverContent>
      </Popover>

      {/* <Button className="rounded-2xl bg-purple-600 h-10 w-20 font-semibold text-md hover:bg-purple-500">Login</Button> */}
    </div>
  );
};

export default Navbar;
