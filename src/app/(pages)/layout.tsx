import Navbar from '@/layouts/Navbar'
import React from 'react'
import Team from "@/layouts/Team";
import Footer from '@/layouts/Footer'


const layout = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <>
       <Navbar/>
       {children}
       <Team/>
       <Footer/>
    </>
  )
}

export default layout