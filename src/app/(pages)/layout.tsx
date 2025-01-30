import Navbar from '@/layouts/Navbar'
import React from 'react'
import Footer from '@/layouts/Footer'

const layout = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <>
       <Navbar/>
       {children}
       <Footer/>
    </>
  )
}

export default layout