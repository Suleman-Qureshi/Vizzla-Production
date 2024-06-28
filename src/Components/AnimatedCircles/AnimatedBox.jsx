import React from 'react'
import AnimatedCircles from './AnimatedCircles'

function AnimatedBox({circleid,positiony,positionx,box}) {
  return (
    <div className='w-screen h-screen absolute top-0 overflow-hidden'>
    <img src={box} className='relative top-20 w-32 left-24 dropAnimation' />
        <AnimatedCircles circleid="Animated_Circle1"/>
         <AnimatedCircles circleid="Animated_Circle2" positionx='80rem' size='10rem'/>
         <AnimatedCircles circleid="Animated_Circle3" positiony='30rem'/>
    </div>
  )
}

export default AnimatedBox
