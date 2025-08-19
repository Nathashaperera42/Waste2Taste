import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const {user,setUser,setShowUserLogin,navigate,setSearchQuery,searchQuery,getCartAmount,getCartCount} =  useAppContext();

    const logout=async ()=>{
        setUser(null);
        navigate('/')
    }
    useEffect(()=>{
      if(searchQuery.length>0){
        navigate('/shops')
      }
    },[searchQuery])
  return (
    
               <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-[#1B4D3E] text-white relative transition-all shadow-lg">
            {/* Logo with neon green text */}
            <NavLink to="/" onClick={()=>setOpen(false)} className="flex items-center gap-3">
                <img className="h-11" src={assets.logo} alt="Company Logo" />
                <span className="text-[#39FF14] text-2xl font-bold font-mono tracking-tighter">Waste2Taste</span>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to="/" className="hover:text-[#39FF14] transition-colors duration-200">Home</NavLink>
                <NavLink to="/products" className="hover:text-[#39FF14] transition-colors duration-200">All shops</NavLink>
                <NavLink to="#" className="hover:text-[#39FF14] transition-colors duration-200">Treasure hunt</NavLink>
                
                {/* Search Bar */}
                <div className="hidden lg:flex items-center text-sm gap-2 bg-white px-3 rounded-full hover:ring-2 hover:ring-[#39FF14] transition-all duration-300">
                    <input 
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-gray-800" 
                        type="text" 
                        placeholder="Search products" 
                    />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M10.836 10.615 15 14.695" 
                            stroke="#1B4D3E" 
                            strokeWidth="1.2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                        <path 
                            clipRule="evenodd" 
                            d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" 
                            stroke="#1B4D3E" 
                            strokeWidth="1.2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                    </svg>
                </div>

                {/* Cart */}
                <NavLink to='/cart' className="relative cursor-pointer group">
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 14 14" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:stroke-[#39FF14] transition-colors duration-300"
                    >
                        <path 
                            d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" 
                            stroke="white" 
                            strokeWidth="1.2"
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-[#39FF14] w-5 h-5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#1B4D3E] transition-colors duration-300">
                        {getCartCount()}
                    </button>
             </NavLink>

                {/* Login Button */}
                {! user ? (<button onClick={()=>setShowUserLogin(true)} className="
                    bg-[#39FF14]
                    text-[#1B4D3E] font-bold 
                    py-2 px-6 rounded-full
                    shadow-lg hover:shadow-xl
                    transform hover:scale-105
                    transition-all duration-300
                    hover:bg-white
                    focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:ring-opacity-50
                    border-2 border-transparent hover:border-[#39FF14]
                ">
                    Login
                </button>) : (<div className='relative group'>
  <img 
    src={assets.profile} 
    className='w-10 h-10 rounded-full object-cover border-2 border-green-500 group-hover:border-green-600 transition-colors cursor-pointer' 
    alt='Profile'
  />
  <div className='absolute top-full right-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-400 delay-500'>
    <ul className='bg-white shadow-lg border border-green-200 py-2 w-40 rounded-md text-sm z-50'>
      <li 
        onClick={() => navigate('my-orders')} 
        className='px-3 py-2 hover:bg-green-50 text-gray-700 hover:text-green-600 cursor-pointer transition-colors flex items-center gap-2'
      >
        <svg className='w-4 h-4 text-green-500' fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        My orders
      </li>
     
      <li 
        onClick={logout} 
        className='px-3 py-2 hover:bg-green-50 text-gray-700 hover:text-green-600 cursor-pointer transition-colors flex items-center gap-2 border-t border-green-100'
      >
        <svg className='w-4 h-4 text-green-500' fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </li>
    </ul>
  </div>
</div>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className='flex items-center gap-6 sm:hidden'>
                     <NavLink to='/cart' className="relative cursor-pointer group">
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 14 14" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:stroke-[#39FF14] transition-colors duration-300"
                    >
                        <path 
                            d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" 
                            stroke="white" 
                            strokeWidth="1.2"
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-[#39FF14] w-5 h-5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#1B4D3E] transition-colors duration-300 sm:hidden">
                        {getCartCount()}
                    </button>
             </NavLink> 
            <button 
                onClick={() => open ? setOpen(false) : setOpen(true)} 
                aria-label="Menu" 
                className="sm:hidden text-white hover:text-[#39FF14] transition-colors"
            >
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="currentColor" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="currentColor" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="currentColor" />
                </svg>
            </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-full left-0 w-full bg-[#1B4D3E] shadow-xl py-4 flex-col items-start gap-4 px-5 text-sm md:hidden z-50 border-t border-[#39FF14]`}>
                <NavLink to="#" onclick={()=> setOpen(false)} className="block w-full py-2 hover:text-[#39FF14] transition-colors">Home</NavLink>
                <NavLink to="#" onclick={()=> setOpen(false)} className="block w-full py-2 hover:text-[#39FF14] transition-colors">All shops</NavLink>
                <NavLink to="#" onclick={()=> setOpen(false)} className="block w-full py-2 hover:text-[#39FF14] transition-colors">Treasure hunt</NavLink>
                {user &&
                 <NavLink to="#" onclick={()=> setOpen(false)} className="block w-full py-2 hover:text-[#39FF14] transition-colors">My Orders</NavLink>  }
                 {user && 
                 <NavLink to="#" onclick={()=> setOpen(false)} className="block w-full py-2 hover:text-[#39FF14] transition-colors">Profile</NavLink>}
               
                 {!user ? (<button 
                onClick={()=>{setOpen(false);
                setShowUserLogin(true);
                 }}className="w-full mt-2 cursor-pointer px-6 py-3 bg-[#39FF14] hover:bg-white text-[#1B4D3E] font-bold transition-all rounded-full">
                    Login
                </button>
                ):( 
                <button 
                onClick={logout}
                className="w-full mt-2 cursor-pointer px-6 py-3 bg-[#39FF14] hover:bg-white text-[#1B4D3E] font-bold transition-all rounded-full">
                    Logout
                </button>)}
               
            </div>)}
        </nav>
    
  )
}

export default Navbar