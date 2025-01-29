"use client"
import AButton from "@/components/ui/animated-b";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/Hero";

export default function Home() {
  const resources = [
    "Subject Nodes",
    "PYQ's",
    "DSA",
    "Web Dev",
    "App Dev",
    "Aptitude",
    "CS Fundamentals",
    "Miscellaneous",
  ];

  return (
    <>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-200 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mx-auto mb-6 mt-16 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border px-7 py-2 shadow-md backdrop-blur transition-all">
              <p className="text-sm font-semibold text-white">
                MaterialMate: Your Placement Companion!
              </p>
            </div>
            <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mt-4 leading-[3rem]">
              Padhlo चाहे Kahi se{" "}
              <Highlight className="text-black dark:text-white">
          Placement
          </Highlight>
              Hoga Yhi Se.
            </h1>

            <p className="mt-5 max-w-prose text-slate-00 sm:text-lg">
              Access notes, papers, and resources tailored for your university.
              Build your skills in development, DSA, aptitude, and core CS
              fundamentals to stand out!
            </p>
          </div>
         
        </motion.h1>
        <div className="mt-16">
          <div className="flex items-center justify-center text-3xl font-bold mb-8">
            What do you want to learn today?
          </div>
          <div className="items-center justify-center mx-40 grid grid-cols-4">
            {resources.map((resource, index) => {
              return (
                <AButton className="mx-4 my-2" key={index}>
                  {resource}
                </AButton>
              );
            })}
          </div>
        </div>
      </HeroHighlight>
    </>
  );
}
