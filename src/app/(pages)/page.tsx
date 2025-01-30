"use client"
import AButton from "@/components/ui/animated-b";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/Hero";
import { Compare } from "@/components/ui/compare";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import BottomGradient from "@/components/ui/bottom-gradient";
import LabelInputContainer from "@/components/ui/input-label-container";
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";
import { FormEvent } from "react";

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
                <AButton className="mx-4 my-2" key={index}>
                  {resource}
                </AButton>
              );
            })}
          </div>
        </div>
      </HeroHighlight>

      {/* body */}
      <div className="mt-28 px-20">
        <div className="flex p-4 gap-10 border rounded-3xl dark:bg-neutral-900 bg-black  border-neutral-200 dark:border-neutral-800 px-4">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[700px]"
            slideMode="hover"
          />
          <div >
            <div className="text-6xl pt-10 font-extrabold">&quot;Empower Your Learning. <br/>  {"   "} Elevate Your Career.&quot;</div>
            <div className="text-2xl mt-10 mb-10">
              Your One-Stop Hub for Notes & Code, Ace DSA, Web, and College Exams with the Best Resources!
            </div>

            <Button className="text-xl p-3 font-medium text-purple-500">Let&apos;s Start Learning</Button>
          </div>
        </div>
      </div>

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

      <div className="mb-14">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Get In Touch
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Send us a Message, We are always ready to Help!
        </p>
    
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <textarea id="message" placeholder="Write Something..." />
          </LabelInputContainer>
    
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message&rarr;
            <BottomGradient />
          </button>
        </form>
        </div>
      </div>
    </>
  );
}
