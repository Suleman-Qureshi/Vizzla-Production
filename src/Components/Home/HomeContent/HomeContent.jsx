import React from 'react'
import AnimatedBox from '../../AnimatedCircles/AnimatedBox'

function HomeContent({lines,image_src_2,image_src_3,image_src_4,box}) {
  return (
    <>
    <div className='flex justify-between items-center relative w-screen h-screen px-20'>
    <img src={box} className='absolute top-20 w-32 left-24 dropAnimation' />
    <div className='flex flex-col gap-4 mb-44 z-10'>
    <img src={lines} className='absolute -top-10 h-[30rem] -left-10 w-[50rem] slide4  z-0 ' />
       <h1 className='text-white text-9xl font-bold slide1 translate-x-[-200%]' style={{fontStyle:"italic"}}>VIZZLA</h1>
       <p className='text-[#ED7D31] text-6xl font-bold montserrat slide2 translate-x-[-200%]' style={{fontStyle:'italic'}}>PRODUCTION</p>
       <p className='text-2xl font-semibold text-white quicksand slide3 translate-x-[-200%]'>Your Vision, Our Digital Craft</p>
    </div>
    <div className='relative top-10'>
    <div className='-translate-y-[14rem] -translate-x-36'><img src={image_src_4} className=' h-[6rem] animate-spin'/></div>
    <div className='-translate-y-[15.5rem] -translate-x-10 '><img src={image_src_4} className=' h-14 animate-spin'/></div>
    <div className='absolute w-[25rem] h-[25rem] -top-44 right-0'>
    <img src={image_src_2} className=' w-full h-full'/>
    </div>
    <img src={image_src_3} className='absolute h-10 bottom-[16rem] right-[21.2rem] animate-spin-reverse'/>
    <img src={image_src_3} className='absolute h-10 bottom-[14.5rem] right-[19.2rem]  animate-spin'/>
    </div>
    </div>
    </>
  )
}

export default HomeContent
