"use client"
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FormEvent } from "react";
import AnimatedBtn from "@/components/ui/animatedBtn";
import { ThreeDCardDemo } from "@/components/shared/cards/3DCard";
import HappyStudent from "@/components/shared/HappyStudent";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Highlight } from "@/components/ui/Hero";


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
      <BackgroundLines className="bg-zinc-950 h-auto">
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
            <div className="mx-auto mb-1 xs:mb-2 sm:mb-6 mt-16 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border px-4 py-2 xs:px-7 xs:py-2 shadow-md backdrop-blur transition-all">
              <p className="text-xs xs:text-sm font-semibold text-white">
                MaterialMate: Your Placement Companion!
              </p>
            </div>
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl max-w-4xl font-bold mt-4 leading-[3rem] xs:leading-[3.5rem] sm:leading-[3.8rem]">
              <span>
              Padhlo चाहे Kahi se{" "}
              </span>
              <Highlight className="">
          Placement
          </Highlight>
             <span> Hoga Yhi Se.</span>
            </h1>

            <p className="xs:mt-5 max-w-prose text-zinc-400 text-[18px] px-3 sm:text-lg leading-[21px]">
              Access notes, papers, and resources tailored for your university.
              Build your skills in development, DSA, aptitude, and core CS
              fundamentals to stand out!
            </p>
          </div>
         
        </motion.h1>
        <div className="px-5 xs:px-10 sm:px-20 md:px-40 py-16">
          <div className="flex items-center justify-center text-3xl font-bold mb-8">
            What do you want to learn today?
          </div>
          <div className="items-center justify-center gap-5 flex flex-wrap">
            {resources.map((resource, index) => {
              return (
             
                  <AnimatedBtn className="w-full sm:w-48" key={index}>
                  {resource}
                </AnimatedBtn>
  
              );
            })}
          </div>
        </div>
      </BackgroundLines>

      {/* body */}
      <div className="px-5 sm:px-10 md:px-10 lg:px-28 py-10  md:py-20">
      <ThreeDCardDemo isSecondCard={false} title="Your Ultimate Learning Companion!" discription="Whether you're a beginner or an expert, MaterialMate provides the best resources to help you:"/>
      <ThreeDCardDemo isSecondCard={true} title="Your Ultimate Learning Companion!" discription="Whether you're a beginner or an expert, MaterialMate provides the best resources to help you:"/>
      </div>
      <HappyStudent/>
      <div className="px-5 xs:px-10 sm:px-20 md:px-40 relative overflow-hidden">
        <WavyBackground className="max-w-5xl mx-auto">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Welcome to the Community!
          </p>
          <p className="text-base leading-[1.2rem] md:text-lg md:leading-normal mt-4 text-white font-normal inter-var text-center">
          Join a supportive community of passionate coders, where learning, collaboration, and innovation come together. Embark on your coding journey with us.
          </p>
          <div className="flex items-center justify-center gap-5 xs:gap-10  md:gap-16 lg:gap-24 flex-wrap mt-8">
            {
              profiles.map((profile, index)=>{
                return <div key={index} className="flex flex-col items-center justify-center">
                  <img src={profile.img} alt="img" className="w-14 sm:w-20" ></img>
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
