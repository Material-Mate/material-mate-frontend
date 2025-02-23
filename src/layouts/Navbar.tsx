import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedBtn from "@/components/ui/animatedBtn";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Ellipsis, LogOut, VenetianMask } from "lucide-react";
import { NavLink } from "@/animations/NavLink";
import NavarToggleBtn from "@/components/ui/NavarToggleBtn";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarAnimation = {
    animate: {
      opacity: 1,
      x: isOpen ? 0 : "100%",
      transition: {
        type: "spring",
      },
    },
  };
  return (
    <div className=" h-24 z-10 bg-zinc-950 relative flex py-1 px-5 sm:px-10 md:px-20 items-center justify-between">
      <Link href={"/"}>
        {" "}
        <Image src="/logo.gif" alt="logo" width={200} height={50} />
      </Link>
      <div className="text-white hidden lg:flex justify-center items-center gap-5">
        {routes.map((route: { route: string; name: string }, index) => (
          <Link href={route.route} key={index} className="font-normal">
            {route.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-5 items-center">
        {isAuthenticated ? (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className=" w-52 bg-zinc-900 border-slate-500 text-white mr-5 mt-2">
              <h1 className="text-sm text-slate-300 border-b pb-1 border-slate-500/30 font-semibold">
                Actions
              </h1>
              <div className="flex gap-2 mt-3 flex-col">
                <Link
                  href={"/space"}
                  className="flex items-center border-b border-slate-500/30 pb-1 gap-1 w-full text-[15px] font-medium"
                >
                  <VenetianMask size={22} /> My Space
                </Link>
                <Link
                  href={"/space"}
                  className="flex items-center  gap-1 w-full text-[15px] font-medium"
                >
                  <LogOut size={22} />
                  Logout
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <Link href={"/register"}>
            <AnimatedBtn className="w-20 h-auto">Login</AnimatedBtn>
          </Link>
        )}
        <NavarToggleBtn menuOpen={isOpen} setMenuOpen={setIsOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="h-screen overflow-hidden lg:hidden w-1/2 md:w-[4 0%] backdrop-blur-2xl origin-top-right absolute top-24  z-50 right-0 flex justify-center items-start"
          >
            <div className="w-auto  h-auto flex flex-col mt-10 font-semibold items-start text-xl gap-5">
              {routes.map((route: { route: string; name: string }, index) => (
                <motion.div
                  variants={NavLink}
                  key={index}
                  initial="initial"
                  whileInView="animate"
                  // viewport={{ once: true }}
                  custom={index}
                >
                  <Link href={route.route} className="font-normal">
                    {route.name}
                  </Link>
                </motion.div>
              ))}
              <Button className="mt-5 rounded-xl py-6 text-sm px-6 bg-gradient-to-r from-purple-400 to-purple-600">
                Let's Connect
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
