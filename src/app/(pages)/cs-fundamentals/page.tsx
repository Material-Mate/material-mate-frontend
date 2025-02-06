"use client"
import { fadeInCardAnimation } from '@/animations/FadeIn'
import CsFundamentalCards from '@/components/shared/cards/CsFundamentalCards'
import React from 'react'

const page = () => {
  return (
    <div className='px-28 py-10'>
       <h1 className='text-[2.5rem] font-bold'>Your <span className='text-purple-500 italic'>Placement</span> ready subjects</h1>
        <div className="flex mt-6 flex-wrap gap-5 justify-start">
          {
            Array(5).fill(0).map((_,i)=>(
              <CsFundamentalCards key={i} animation={fadeInCardAnimation} index={i} onclick={()=>{}}/>
            ))
          }
        </div>
    </div>
  )
}

export default page