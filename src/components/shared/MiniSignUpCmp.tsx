"use client";

import { TypewriterEffectSmooth } from "./typewriter-effect";

export function MiniSignUpCmp() {
  const words = [
    {
      text: "Build",
       className:"text-white "
    },
    {
      text: "awesome",
       className:"text-white "
    },
    {
      text: "apps",
       className:"text-white "
    },
    {
      text: "with",
      className:"text-white "
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 text-purple-500 ",
    },
  ];
  return (
    <div className="flex flex-col items-center pb-6 justify-center h-[25rem]  ">
      <p className="text-neutral-200 text-sm sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} cursorClassName="lg:h-10"/>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-44 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 border border-white border-transparent text-white text-xl">
           Signup Now
        </button>
      </div>
    </div>
  );
}
