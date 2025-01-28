import React from 'react'

const SubjectCard = ({subject,course,setDialogBoxOpen}:{
    subject:string,
    course:string,
    setDialogBoxOpen:React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div id='shadow_for_card' className='bg-slate-900 hover:bg-slate-950 rounded-lg py-5 px-8 border border-slate-800 text-lg cursor-pointer relative'
    onClick={()=>setDialogBoxOpen(true)}
    >
        {subject}
    <div className='absolute top-0 right-0 px-2 bg-gradient-to-r text-xs rounded-t-lg rounded-bl-lg  from-indigo-500 to-purple-500'>{course}</div>
    </div>
  )
}

export default SubjectCard