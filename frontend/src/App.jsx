import React from 'react'
import Navbar from './componets/Navbar'
import Home from '../src/pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom'
import {Toaster} from "react-hot-toast";
import Footer from './componets/Footer';
import Login from './componets/Login';
import { useAppContext } from './context/AppContext';
import Allshops from './pages/Allshops';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAddress from './pages/AddAddress';

const App = () => {
  const isSellerPath=useLocation().pathname.includes('seller');
  const {showUserLogin}= useAppContext()

  return (
    <div>
      
     {isSellerPath ? null: <Navbar/>}
     {showUserLogin ? <Login/> : null}
    
    <Toaster/>
    <div className={'${isSellerPath ?"":"px-6 md-px-16 lg:px-24  xl:px-32"}'}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Allshops/>} />
       <Route path='/products/:category' element={<ProductCategory/>} />
       <Route path='/products/:category/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
         <Route path='/add-address' element={<AddAddress/>} />
      
    </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App