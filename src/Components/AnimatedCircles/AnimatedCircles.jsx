import React from 'react'

function AnimatedCircles({circleid,positiony=0,positionx=0,size='6rem'}) {
  return (
    <>
     <div id={circleid} style={{top:positiony,left:positionx,width:size,height:size}} className='w-24 h-24 backdrop-blur-2xl rounded-full relative before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:w-full before:h-full before:blur-2xl before:bg-[#ED7D31]'></div>
    </>
  )
}

export default AnimatedCircles
