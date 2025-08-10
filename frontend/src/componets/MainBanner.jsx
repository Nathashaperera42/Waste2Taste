import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Mainbanner = () => {
  return (
    <div className='relative flex justify-center'>
        <img src={assets.banner1}  style={{ height: '550px',width:'1300px',marginTop:'20px'}}alt='banner' className='w-full hidden md:block'/>
           <img src={assets.banner1} alt='banner' className='w-full md:hidden'/>
<div className="absolute inset-0 flex flex-col items-end justify-end md:justify-center pb-4 md:pb-0 px-4 md:pr-12 lg:pr-24 xl:pr-32">
  {/* Text Content - Responsive Right Alignment */}
  <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-right max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl leading-snug md:leading-tight lg:leading-normal'>
    <span className="text-[#1B4D3E] dark:text-olive-300">Play</span>{' '}
    <span className="text-white">Game</span>{' '}
    <span className="text-[#1B4D3E] dark:text-olive-300">Earn</span>{' '}
    <span className="text-white">Coins</span>
  </h1>

  {/* Button with Arrow - Responsive Layout */}
  <div className='flex items-center mt-4 sm:mt-6 md:mt-8 font-medium'>
    <Link 
      to="/tresurehunt"
      className='group flex items-center gap-2 px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2.5 md:py-3 bg-primary hover:bg-primary-dull transition-all duration-300 rounded-lg text-white cursor-pointer text-sm sm:text-base md:text-lg'
    >
      Play now
      <img 
        className='w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1' 
        src={assets.arrow} 
        alt='Arrow icon'
        loading='lazy'
      />
    </Link>
  </div>
</div>
</div>
      
   
  )
}

export default Mainbanner