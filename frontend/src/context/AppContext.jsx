import { Children, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext=createContext();
export const AppContextProvider =({children})=>{
    
    const currency=import.meta.VITE_CURRENCY;
    const navigate =useNavigate();
    const [user,setUser]=useState(true)
    const [isSeller,setIsSeller]=useState(false)
    const [showUserLogin,setShowUserLogin]=useState(false)
    const [products,setProducts]=useState([])
    const [cartItems,setCartItems]=useState([])

    //fetch All products
    const fetchProducts=async ()=>{
        setProducts(dummyProducts)  
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    //Add product to cart
    const addToCart=(itemId)=>{
        let cartData=structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId] += 1;    
        }else{
            cartData[itemId]= 1;
        }
        setCartItems(cartData);
        toast.success("Added to Cart")
    }
    //update cart item quantity
    const updateCartItem=(itemId,quantity)=>{
        let cartData=structuredClone(cartItems);
        cartData[itemId]=quantity;
        setCartItems(cartData)
        toast.success("Cart Updated")

    }
    //remove product from cart
    const removeFromCart=(itemId)=>{
          setCartItems(prevCartItems => {
        
        const newCartItems = { ...prevCartItems };
        
        if (newCartItems[itemId]) {
            newCartItems[itemId] -= 1;
            
            if (newCartItems[itemId] === 0) {
                delete newCartItems[itemId];
            }
        }
        
        toast.success("Removed from Cart");
        return newCartItems;
    });
    }
    
    

    const value ={navigate,user,setUser,setIsSeller,isSeller,showUserLogin,setShowUserLogin,products,currency,addToCart,updateCartItem,removeFromCart,cartItems}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext =()=>{
    return useContext(AppContext)
}