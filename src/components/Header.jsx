import React from 'react'
import globe from "../imgs/globe.png"

export default function Header() {
  return (
    <div className='bg-[#F55A5A] h-15 flex items-center justify-center gap-2'>
    <img className='size-6 ' src={globe} alt="globe-icon" />
    <h1 className='text-white text-lg'>my travel journal.</h1>
    </div>
  )
}
