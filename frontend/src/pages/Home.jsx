import React from 'react'
import Mainbanner from '../componets/Mainbanner'
import Categories from '../componets/Categories'
import BestSeller from '../componets/BestSeller'
import BottoBanner from '../componets/BottoBanner'

const Home = () => {
  return (
    <div className='mt-10'>
        <Mainbanner/>
        <Categories/>
       <BestSeller/>
       <BottoBanner/>
    </div>
  )
}

export default Home