"use client"
import { fadeInCardAnimation } from '@/animations/FadeIn'
import CsFundamentalCards from '@/components/shared/cards/CsFundamentalCards'
import CsFundatmentalDialogBox from '@/components/shared/dialogBoxes/CsFundatmentalDialogBox'
import { web_development } from '@/data/dummy'
import React, { useState } from 'react'

const page = () => {
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const [activeSubject,setActiveData] = useState<CSSubject>();
  const handleOnClick = (data:CSSubject)=>{
    setActiveData(data)
    setIsOpen(true)
  }
  return (
    <div className='px-28 py-10'>
       <h1 className='text-[2.5rem] font-bold'>Complete <span className='text-purple-500 italic'>Development</span> Roadmap & Resources.</h1>
        <div className="flex mt-6 flex-wrap gap-5 justify-start">
          {
            web_development.map((subject,i)=>(
              <CsFundamentalCards key={i} subject={subject} animation={fadeInCardAnimation} onClick={handleOnClick} index={i}/>
            ))
          }
          {activeSubject && <CsFundatmentalDialogBox isOpen={isOpen} onChange={setIsOpen} activeSubject={activeSubject}/>}
        </div>
    </div>
  )
}

export default page