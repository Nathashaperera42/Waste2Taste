import React from 'react'
import Mainbanner from '../componets/Mainbanner'
import Categories from '../componets/Categories'
import BestSeller from '../componets/BestSeller'

const Home = () => {
  return (
    <div className='mt-10'>
        <Mainbanner/>
        <Categories/>
       <BestSeller/>
    </div>
  )
}

export default Home