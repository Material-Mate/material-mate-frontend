import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ColourfulText } from '../ui/colorfulText'

const HappyStudent = () => {
  return (
    <div className='w-full my-8 px-5 xs:px-10 sm:px-20 md:px-10 flex justify-center flex-col md:flex-row items-center gap-5'>
        <div className='flex justify-center items-center '>
            <Image src={"https://img.freepik.com/premium-photo/group-students-with-books-isolated-background_488220-7421.jpg?w=740"} width={800} height={800} alt='happy student' className='rounded-lg shadow-[0_0_20px_10px_rgba(56,187,92,0.5)] w-full md:max-w-96 lg:max-w-[800px]'/>
        </div>
        <div className='w-full md:w-1/2 sm:px-5 py-5 sm:py-10'>
            <h1 className='text-[2.2rem] leading-[2.5rem]  sm:text-[3rem] sm:leading-[3.2rem]  md:text-[2.5rem] md:leading-[2.6rem] lg:text-[3.5rem] lg:leading-[3.6rem] font-semibold'>
            The 90% of our students <ColourfulText text='improve'/> their exam results.
            
            </h1>
            <Button
                className= "mt-10 rounded-3xl py-6 text-md px-6 bg-gradient-to-r from-purple-400 to-purple-600"
              >
                Let's Connect
              </Button>
        </div>
    </div>
  )
}

export default HappyStudent