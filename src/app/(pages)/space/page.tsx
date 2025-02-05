"use client";
import { fadeInCardAnimation } from '@/animations/FadeIn';
import SubjectCard from '@/components/shared/cards/SubjectCard';
import PreviousYearPaperDialogBox from '@/components/shared/dialogBoxes/PreviousYearPaperDialogBox';
import {UnitsDialogBox} from '@/components/shared/dialogBoxes/UnitsDialogBox';
import { MiniSignUpCmp } from '@/components/shared/MiniSignUpCmp';
import React from 'react'
import { SiBookstack } from "react-icons/si";
const Space = () => {
    const subjects = [
        {
            name:"Computer Based Optimizing Techiques",
            course:"MCA Integrated",
            semester:"7th",
        },
        {
            name:"Dot Net and C# Programming",
            course:"MCA Integrated",
            semester:"7th",
        },
        {
            name:"Enterprise Resource Planning",
            course:"MCA Integrated",
            semester:"7th",
        },
        {
            name:"Software Project Management",
            course:"MCA Integrated",
            semester:"7th",
        },
        {
            name:"Multimedia Systems",
            course:"MCA Integrated",
            semester:"7th",
        }
    ]
    const [dialogBoxOpen, setDialogBoxOpen] = React.useState<boolean>(false)
    const [previousYearDialogBoxOpen, setPreviousYearDialogBoxOpen] = React.useState<boolean>(false)
  return (
    <div className='py-10 px-20'>
       <h1 className='text-[2rem] text-slate-300 font-semibold'>Kudos 🎉🎉 to <span className='bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>@Gaurav Sharma</span>, You are doing <span className='bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>MCA</span></h1>
       <h2 className='text-[1.5rem] text-slate-200 font-semibold mt-5 flex gap-3 items-center'>Your Subjects Notes<SiBookstack/></h2>
       <div className="flex mt-8 items-center  flex-wrap gap-6">
              {subjects.map((subject,index) => (
                <SubjectCard 
                index={index}
                animation={fadeInCardAnimation}
                key={index} 
                subject={subject.name} 
                course = {subject.course+" "+subject.semester.toString()}
                onclick={setDialogBoxOpen}
                />
              ))} 
            <UnitsDialogBox 
            dialogBoxOpen={dialogBoxOpen} 
            setDialogBoxOpen={setDialogBoxOpen}
            />
       </div>
       <h2 className='text-[1.5rem] text-slate-200 font-semibold mt-10 flex gap-3 items-center'>Previous Year Paper to Ace Your Exam <SiBookstack/></h2>
       <div className="flex mt-8 items-center  flex-wrap gap-6">
              {subjects.map((subject,index) => (
                <SubjectCard 
                key={index} 
                subject={subject.name} 
                course = {subject.course+" "+subject.semester.toString()}
                onclick={setPreviousYearDialogBoxOpen}
                index={index}
                animation={fadeInCardAnimation}
                />
              ))} 
            <PreviousYearPaperDialogBox 
            previousYearDialogBoxOpen={previousYearDialogBoxOpen} 
            setPreviousYearDialogBoxOpen={setPreviousYearDialogBoxOpen}
            />
       </div>
       <MiniSignUpCmp/>
    </div>
  )
}

export default Space