import React from 'react'

function Navbar({Logo}) {
  return (
    <div>
      <nav className='relative z-10 w-screen px-20 py-8 flex justify-between items-center border-b border-slate-500 backdrop-blur-2xl font-light text-sm'>
        <img src={Logo} className='h-8' />
        <div className='flex gap-20 text-[#F2F2F2] items-center montserrat'>
           <div className='flex gap-12'>
           <p>Home</p>
            <p>About Us</p>
            <p>Team</p>
            <p>Services</p>
            <p>Contact Us</p>
           </div>
           <div className='flex gap-6 '>
            <button className=' border border-[#F2F2F2] px-4 py-1 rounded-full'>LOGIN</button>
            <button className=' border border-[#F2F2F2] px-4 py-1 rounded-full'>SIGNUP</button>
           </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
