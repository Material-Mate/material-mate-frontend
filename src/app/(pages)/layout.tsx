"use client"
import Navbar from "@/layouts/Navbar";
import React from "react";
import Footer from "@/layouts/Footer";
import { MiniSignUpCmp } from "@/components/shared/MiniSignUpCmp";
import NextTopLoader from 'nextjs-toploader';
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextTopLoader color="purple"/>
      <Navbar />
      {children}
      {/* <MiniSignUpCmp /> */}
      {/* <Footer /> */}
    </>
  );
};

export default layout;
