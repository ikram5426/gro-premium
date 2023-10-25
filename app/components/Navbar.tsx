import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='font-sofia h-[25vw] flex items-end justify-between px-6'>
      <div className=' h-[28px] w-[45px] flex items-end'>
        <Image src="/dropDownButton.svg" alt="Drop down menu" height={14} width={18} />
      </div>
      <div className=' h-[28px] w-[45px]'>
        <Image src="/goldlogo.png" alt="Drop down menu" height={26} width={41}  />
      </div>
      <div  className=' h-[28px] w-[45px]'></div>
    </div>
  )
}

export default Navbar