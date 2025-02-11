"use client"
import React, { useState } from 'react'
import Tab from "../../../components/ui/Tab"
import CsFundamentalCards from '@/components/shared/cards/CsFundamentalCards'
import { fadeInCardAnimation } from '@/animations/FadeIn'
const csSubject:CSSubject = {
  name: "Data Structures and Algorithms",
  total_video_count: 10,
  discription: "This course covers fundamental data structures and algorithms with practical implementations.",
  videos_links: [
    {
      lecture_name: "Introduction to Data Structures",
      video_link: "https://example.com/intro-dsa"
    },
    {
      lecture_name: "Arrays and Linked Lists",
      video_link: "https://example.com/arrays-linkedlists"
    },
    {
      lecture_name: "Stacks and Queues",
      video_link: "https://example.com/stacks-queues"
    },
    {
      lecture_name: "Recursion and Backtracking",
      video_link: "https://example.com/recursion-backtracking"
    },
    {
      lecture_name: "Sorting Algorithms",
      video_link: "https://example.com/sorting-algorithms"
    },
    {
      lecture_name: "Binary Search and Divide & Conquer",
      video_link: "https://example.com/binary-search"
    },
    {
      lecture_name: "Dynamic Programming",
      video_link: "https://example.com/dynamic-programming"
    },
    {
      lecture_name: "Graph Algorithms",
      video_link: "https://example.com/graph-algorithms"
    },
    {
      lecture_name: "Tree Data Structure",
      video_link: "https://example.com/tree-ds"
    },
    {
      lecture_name: "Hashing and Hash Tables",
      video_link: "https://example.com/hashing"
    }
  ],
  thumbnail: "https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?w=740",
  notes_link: "https://example.com/dsa-notes.pdf"
};

const Development = () => {
  const [selectedTab,setSelectedTab] = useState("Web Development")
  return (
    <div className='px-28 py-10'>
      <Tab tab1={'Web Development'} tab2={'Android Development'} selectedTab={selectedTab} handleTabClick={setSelectedTab} />
       {
        selectedTab==="Web Development"?<div className='mt-10'>
          <h1 className='text-3xl font-semibold'>All you need in <span className='text-purple-500'>Frontend Development</span></h1>
           <div className='flex items-center justify-start gap-5 mt-10 flex-wrap'>
              {
                [1,2,3,5,6,7].map((_,i)=>(
                  <CsFundamentalCards key={i} subject={csSubject} onClick={()=>{}} index={i} animation={fadeInCardAnimation}/>
                ))
              }
           </div> 
          <h1 className='text-3xl font-semibold mt-16'>All you need in <span className='text-purple-500'>Backend Development</span></h1>
           <div className='flex items-center justify-start gap-5 mt-10 flex-wrap'>
              {
                [1,2,3,5,6,7].map((_,i)=>(
                  <CsFundamentalCards key={i} subject={csSubject} onClick={()=>{}} index={i} animation={fadeInCardAnimation}/>
                ))
              }
           </div> 
        </div>:<div></div>
       }
    </div>
  )
}

export default Development