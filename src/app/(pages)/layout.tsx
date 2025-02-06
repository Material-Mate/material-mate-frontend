import Navbar from '@/layouts/Navbar'
import React from 'react'
import Footer from '@/layouts/Footer'
import { MiniSignUpCmp } from '@/components/shared/MiniSignUpCmp'

const layout = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <>
       <Navbar/>
       {children}
       <MiniSignUpCmp/>
       <Footer/>
    </>
  )
}

export default layout