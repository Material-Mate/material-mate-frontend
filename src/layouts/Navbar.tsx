import React from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-slate-800 h-40 border-b flex py-5 px-16">
      <Image src="/logo.gif" alt="logo" width={300} height={300} />
      <div className="text-white">hello</div>
      <div></div>
    </div>
  );
};

export default Navbar;
