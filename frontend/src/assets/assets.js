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
import bottombanner from "../assets/images/banner.png";
import logotwo from "../assets/images/waste2taste.png";
import { Links } from "react-router-dom";
import loginimage from "../assets/images/loginimage.png";
import deliveryman from "../assets/images/deliveryman.png";
import rice_res from "../assets/images/rice_res.jpeg";
import fruitres from "../assets/images/fruit_res.jpeg";
import pizzares from "../assets/images/pizza hut.jpeg";
import vvvv from "../assets/images/res.jpeg";
import china from "../assets/images/chineese_res.jpeg";
import cakeres from "../assets/images/cake_res.jpeg";
import bakery_res from "../assets/images/bakery_res.jpeg";

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
    brekfast,
    bottombanner,
    logotwo,
    loginimage,
    deliveryman,
    rice_res,
    pizzares,
    vvvv,
    china


};

export const categories =[
    {
        
        text:"Bakery",
        path:"bakery",
        image:"bakery",
        bgcolor:"#c8e6c9",
    },
     {
        text:"Burgures",
        path:"burgers",
        image:"burgers",
        bgcolor:"#c8e6c9",
    },
     {
        text:"Pizza",
        path:"pizza",
        image:"pizza",
        bgcolor:"#c8e6c9",
    },
     {
        text:"Sri lankan breakfast",
        path:"slbreakfast",
        image:"brekfast",
        bgcolor:"#c8e6c9",
    },
     {
        text:"Rice & curry",
        path:"rice&curry",
        image:"rice",
        bgcolor:"#c8e6c9",
    },
     {
        text:"Beverages",
        path:"baverages",
        image:"beverage",
        bgcolor:"#c8e6c9",
    },
     {
        text:"Vegetables & Fruits",
        path:"vegie&fruit",
        image:"vegifruit",
        bgcolor:"#c8e6c9",
    },
     {
        text:"Cakes",
        path:"cakes",
        image:"cake",
        bgcolor:"#c8e6c9",
    },  {
        
        text:"Donuts",
        path:"donuts",
        image:"bakery",
        bgcolor:"#c8e6c9",
    },
      {
        
        text:"Chineese",
        path:"chineese",
        image:"bakery",
        bgcolor:"#c8e6c9",
    },
]
export const dummyProducts =[
    {
        _id:"1",
        name:"Chineese Restuarant",
        category:"Chineese",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[china],
        description:[
            "",
            "",
            "",
        ],
        city:"madampe",
        collecttime:"",
        createdAt:"",
        updatedAt:"",
        inStock:true,
    },
     {
        _id:"12",
        name:"pizza restuarant",
        category:"pizza",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[pizzares],
        description:[
            "",
            "",
            "",
        ],
        city:"chilaw",
        collecttime:"",
        createdAt:"",
        updatedAt:"",
        inStock:true,
    },
     {
        _id:"123",
        name:"Palathuru kade",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[fruitres],
        description:[
            "",
            "",
            "",
        ],
        city:"wennappuwa",
        collecttime:"",
        createdAt:"",
        updatedAt:"",
        inStock:true,
    },
     {
        _id:"1233",
        name:"Little Hut Resturant",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[rice_res],
        description:[
            "",
            "",
            "",
        ],
        city:"kurunagala",
        collecttime:"",
        createdAt:"",
        updatedAt:"",
        inStock:true,
    },
     {
        _id:"1234",
        name:"caraven fresh",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[bakery_res],
        description:[
            "",
            "",
            "",
        ],
        city:"galle",
        collecttime:"",
        createdAt:"",
        updatedAt:"",
        inStock:true,
    },
     {
        _id:"12345",
        name:"cakey",
        category:"cakes",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[cakeres],
        description:[
            "",
            "",
            "",
        ],
        city:"marawila",
        collecttime:"",
        createdAt:"",
        updatedAt:"",
        inStock:true,
    },
     {
        _id:"123456",
        name:"caraven fresh",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[bakery_res],
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
        _id:"123457",
        name:"caraven fresh",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[bakery_res],
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
        _id:"123458",
        name:"caraven fresh",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[bakery_res],
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
        _id:"123459",
        name:"caraven fresh",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[bakery_res],
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
        _id:"123455",
        name:"caraven fresh",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[bakery_res],
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
        _id:"12349",
        name:"caraven fresh",
        category:"bakery",
        Quanty:"Suprise Bag",
        offerprice:"500",
        price:"1000",
        image:[bakery_res],
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

export const footerLinks=[
    {
        title:"Quick Links",
        Links:[
            {text:"Home",url:"#"},
            {text:"Best Sellers",url:"#"},
            {text:"Offers & Deals",url:"#"},
            {text:"Contact Us",url:"#"},
            {text:"FAQs",url:"#"},
        ],


    },
    {
        title:"Need help?",
        Links:[
            {text:"Delivery Information",url:"#"},
            {text:"Return & Refund Policy",url:"#"},
            {text:"HPayment Methodsome",url:"#"},
            {text:"Track your Order",url:"#"},
            {text:"Contact Us",url:"#"}
        ]

    },
    {
        title:"Follow us",
        Links:[
            {text:"instegram",url:"#"},
            {text:"twitter",url:"#"},
            {text:"facebook",url:"#"},
            {text:"youtube",url:"#"},
        ]
    }
]

export const dummyAddress=[
    {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Nathasha",
    lastName: "Perera",
    email: "user.nathashaperera@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",

    },
  
]
export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
