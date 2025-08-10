import React from 'react'
import { assets } from '../assets/assets'

const BottoBanner = () => {
  return (
    <div className='relative mt-24'>
    <img src={assets.bottombanner} alt='banner' className='w-full hidden md:block'/>
    <img src={assets.bottombanner_sm} alt='banner' className='w-full hidden md:hidden'/>
    </div>
  )
}

export default BottoBanner