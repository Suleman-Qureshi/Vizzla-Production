import React from 'react'
import AnimatedBox from '../../AnimatedCircles/AnimatedBox'
function HomeContent({image_src_2,image_src_3,image_src_4,box}) {
  return (
    <>
    <AnimatedBox/>
    <div className='flex justify-between items-center max-lg:justify-start relative w-screen h-screen px-20 max-xl:px-12 max-sm:px-1'>
    <div id='lines' className='max-lg:w-full box flex flex-col max-lg:items-center gap-4 mb-44 z-10 relative before:absolute before:w-[50rem] before:h-[30rem] before:-top-40 before:-left-32 before:overflow-x-hidden after:absolute after:w-16 after:left-24 after:opacity-0 after:z-20'>
       <h1 className='text-white text-9xl max-sm:text-7xl font-bold slide1 translate-x-[-200%]' style={{fontStyle:"italic"}}>VIZZLA</h1>
       <p className='text-[#ED7D31] text-6xl max-sm:text-4xl font-bold montserrat slide2 translate-x-[-200%]' style={{fontStyle:'italic'}}>PRODUCTION</p>
       <p className='text-2xl max-sm:text-lg font-semibold text-white quicksand slide3 translate-x-[-200%]'>Your Vision, Our Digital Craft</p>
    </div>
    <div className='relative top-10 right-10 max-lg:hidden'>
    <div className='-translate-y-[14rem] -translate-x-36'><img src={image_src_4} className=' h-[6rem] animate-spin'/></div>
    <div className='-translate-y-[15.5rem] -translate-x-10 '><img src={image_src_4} className=' h-14 animate-spin'/></div>
    <div className='absolute w-[26rem] h-[26rem] -top-44 right-0'>
    <img src={image_src_2} className=' w-full h-full'/>
    </div>
    <img src={image_src_3} className='absolute h-10 bottom-[16rem] right-[21.7rem] animate-spin-reverse'/>
    <img src={image_src_3} className='absolute h-10 bottom-[14.5rem] right-[19.7rem]  animate-spin'/>
    </div>
    </div>
    </>
  )
}

export default HomeContent
