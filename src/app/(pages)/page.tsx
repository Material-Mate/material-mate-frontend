"use client"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/Hero";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FormEvent } from "react";
import AnimatedBtn from "@/components/ui/animatedBtn";
import { ThreeDCardDemo } from "@/components/shared/cards/3DCard";
import HappyStudent from "@/components/shared/HappyStudent";


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

  const profiles=[{
    name: "Telegram",
    img: "https://i.ibb.co/cShJ0X7v/image-3.webp", 
    link: "",
  }, {
    name: "LinkedIn",
    img: "https://i.ibb.co/bj9HCdB4/image-1.webp", 
    link: "",
  },
  {
    name: "Discord",
    img: "https://i.ibb.co/cShJ0X7v/image-3.webp",
    link: "",
  },{
    name: "Instagram",
    img: "https://i.ibb.co/XrvfFxx1/pngwing-com-2.png", 
    link: "",
  },{
    name: "Youtube",
    img: "https://i.ibb.co/wZR3Z418/image.webp",
    link: ""
  }]

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

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
             
                  <AnimatedBtn className="mx-4 my-2 h-auto w-48" key={index}>
                  {resource}
                </AnimatedBtn>
  
              );
            })}
          </div>
        </div>
      </HeroHighlight>

      {/* body */}
      <div className="px-28 py-20">
      <ThreeDCardDemo isSecondCard={false} title="Your Ultimate Learning Companion!" discription="Whether you're a beginner or an expert, MaterialMate provides the best resources to help you:"/>
      <ThreeDCardDemo isSecondCard={true} title="Your Ultimate Learning Companion!" discription="Whether you're a beginner or an expert, MaterialMate provides the best resources to help you:"/>
      </div>
      <HappyStudent/>
      <div className="px-20 relative overflow-hidden">
        <WavyBackground className="max-w-5xl mx-auto">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Welcome to the Community!
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Join a supportive community of passionate coders, where learning, collaboration, and innovation come together. Embark on your coding journey with us.
          </p>
          <div className="flex items-center justify-center gap-24 mt-8">
            {
              profiles.map((profile, index)=>{
                return <div key={index} className="flex flex-col items-center justify-center">
                  <img src={profile.img} alt="img" className="w-20" ></img>
                  <p>{profile.name}</p>
                </div>
              })
            }
          </div>
        </WavyBackground>
      </div>

       
    </>
  );
}
