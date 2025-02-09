import { motion, Variants } from 'framer-motion'
import React from 'react'

const SubjectCard = ({subject,course,onclick,animation,index}:{
    subject:string,
    course:string,
    onclick:React.Dispatch<React.SetStateAction<boolean>>,
    animation:Variants,
    index:number
}) => {
  return (
    <motion.div 
    id='shadow_for_card' 
    className='bg-zinc-900 hover:bg-zinc-800 rounded-lg py-5 px-8 border border-slate-800 text-lg cursor-pointer relative'
    onClick={()=>onclick(true)}
    variants={animation}
    initial="initial"
    whileInView="animate"
    viewport={{once:true}}
    custom={index}
    >
        {subject}
    <div className='absolute top-0 right-0 px-2 bg-gradient-to-r text-xs rounded-t-lg rounded-bl-lg  from-indigo-500 to-purple-500'>{course}</div>
    </motion.div>
  )
}

export default SubjectCard