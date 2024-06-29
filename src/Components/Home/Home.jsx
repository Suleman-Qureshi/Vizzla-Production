import React from 'react'
import AnimatedBox from '../AnimatedCircles/AnimatedBox'
import HomeContent from './HomeContent/HomeContent'
import image_1 from '../../assets/recources/Production.png'
import image_2 from '../../assets/recources/ilistration.png'
import image_3 from '../../assets/recources/gear_1.png'
import image_4 from '../../assets/recources/gear_2.png'
import Logo from '../../assets/recources/logo.png'
import lines from "../../assets/recources/lines.png"
import box from "../../assets/recources/box.png"
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div id='Home' className='w-screen h-screen bg-[#101010] overflow-hidden'>
      <Navbar  Logo={Logo}/>
      <HomeContent image_src_1={image_1} image_src_2={image_2} image_src_3={image_3} image_src_4={image_4} box={box}/>
    </div>
  )
}

export default Home
