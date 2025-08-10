import logo from "../assets/images/iconweb.svg";
import profile from "../assets/images/profile.png";
import banner from "../assets/images/mainbanner2.png";
import arrow from '../assets/images/white_arrow.png';
import banner1 from "../assets/images/mainbanner1.png";
import bakery from "../assets/images/bakery.jpeg";
import star from "../assets/images/star.png";
import stardull from "../assets/images/stardull.png";
import cart from "../assets/images/shopping-cart.png";
import pizza from "../assets/images/pizza.jpeg";
import burgers from "../assets/images/burger.jpeg";
import vegifruit from "../assets/images/vegifruit.jpeg";
import beverage from "../assets/images/beverage.jpeg";
import rice from "../assets/images/rice.jpeg";
import cake from "../assets/images/cake.jpeg";
import brekfast from "../assets/images/srilankabrekfast.jpeg"

export const assets={
    logo,
    profile,
    banner,
    arrow,
    banner1,
    bakery,
    star,
    stardull,
    cart,
    pizza,
    burgers,
    vegifruit,
    rice,
    beverage,
    cake,
    brekfast


};

export const categories =[
    {
        
        text:"Bakery",
        path:"bakeryproducts",
        image:"bakery",
        bgcolor:"#FFF699",
    },
     {
        text:"Burgures",
        path:"",
        image:"burgers",
        bgcolor:"#FEC5E5",
    },
     {
        text:"Pizza",
        path:"",
        image:"pizza",
        bgcolor:"#f7f5ea",
    },
     {
        text:"Sri lankan breakfast",
        path:"",
        image:"brekfast",
        bgcolor:"#e5f2e1",
    },
     {
        text:"Rice & curry",
        path:"",
        image:"rice",
        bgcolor:"#f5e2c5",
    },
     {
        text:"Beverages",
        path:"",
        image:"beverage",
        bgcolor:"#d4c6ac",
    },
     {
        text:"Vegetables & Fruits",
        path:"",
        image:"vegifruit",
        bgcolor:"#dfbda1",
    },
     {
        text:"Cakes",
        path:"",
        image:"cake",
        bgcolor:"#c3b1e1",
    },  {
        
        text:"Bakery",
        path:"bakeryproducts",
        image:"bakery",
        bgcolor:"#89cff0",
    },
      {
        
        text:"Bakery",
        path:"bakeryproducts",
        image:"bakery",
        bgcolor:"#90EE90",
    },
]
export const dummyProducts =[
    {
        _id:"12345",
        name:"caraven fresh",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[bakery],
        description:[
            "",
            "",
            "",
        ],
        city:"",
        collecttime:"",
        createdAt:"",
        updatedAt:"",
        inStock:true,
    },
     {
        _id:"12345",
        name:"pizza",
        category:"pizza",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[pizza],
        description:[
            "",
            "",
            "",
        ],
        city:"",
        collecttime:"",
        createdAt:"",
        updatedAt:"",
        inStock:true,
    },
     {
        _id:"12345",
        name:"caraven fresh",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[burgers],
        description:[
            "",
            "",
            "",
        ],
        city:"",
        collecttime:"",
        createdAt:"",
        updatedAt:"",
        inStock:true,
    },
     {
        _id:"12345",
        name:"caraven fresh",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[rice],
        description:[
            "",
            "",
            "",
        ],
        city:"",
        collecttime:"",
        createdAt:"",
        updatedAt:"",
        inStock:true,
    },
]