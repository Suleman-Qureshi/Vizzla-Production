import React from 'react'
import AnimatedCircles from './AnimatedCircles'

function AnimatedBox() {
  return (
    <div className='w-screen h-screen absolute top-0 overflow-hidden'>

        <AnimatedCircles circleid="Animated_Circle1"/>
         <AnimatedCircles circleid="Animated_Circle2" positionx='80rem' size='10rem'/>
         <AnimatedCircles circleid="Animated_Circle3" positiony='30rem'/>
    </div>
  )
}

export default AnimatedBox
