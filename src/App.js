import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Home from './component/home';
import Product from './component/Pruduct';
import Cart from './component/Cart';
import SignUp from './component/signup';
import Contact from './component/Contact';
import {Routes, Route ,useParams} from 'react-router-dom';
import ProductContext from './context/productCart';
import axios from 'axios';
import { useEffect, useState } from 'react';




function App() {
  const[cartItems,setCart]=useState([]);
  const[data,setData]=useState([]);
  const[filter,setFilter]=useState(data);
  const[loading,setLoading]=useState(false);
  const[cartCount,setCartCount]=useState(0);
  const[product,setProduct]=useState([]);

  
  
  useEffect(()=>{
    const getProducts=async()=>{
        setLoading(true);
        const response= await axios.get("https://fakestoreapi.com/products");
        
        const data= response.data;
    
        setTimeout(async() => {
        setData(await data);
        setFilter(await data);
        setLoading(false);
        
        
    
        
        },3000);
                
        
      
        

    }
    getProducts();
    
  },[]);

  
  const filterProduct=(cat)=>{
    const updateList = data.filter((x)=>x.category === cat);
    setFilter(updateList); 
  }

  const decProduct=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id===product.id);
    if(ProductExist.quantity===1){setCart(cartItems.filter((item)=>item.id !==product.id));
    }else{
      setCart(cartItems.map((item)=>item.id===product.id?{...ProductExist,quantity:ProductExist.quantity-1}:item));
      console.log(cartItems);
    }
    

  }

  const addProduct=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id===product.id);
    if(ProductExist){
      setCart(cartItems.map((item)=>item.id ===product.id ?{...ProductExist,quantity:ProductExist+1}:item));
      
    }else{
      setCart([...cartItems,{...product,quantity:1}]);

      console.log(cartItems);
    }

  }




  

  const addToCart=(product)=>{
      const ProductExist=cartItems.find((item)=>item.id===product.id);
      if(ProductExist){
        setCart(cartItems.map((item)=> item.id=== product.id?{...ProductExist,quantity:ProductExist.quantity+1}:item));
      }else{
        setCart([...cartItems,{...product,quantity:1}]);
        console.log(cartItems);
      }
  }



 const addCountCart=()=>{
  
    setCartCount(cartCount+1);

  }
  const decCountCart=()=>{
  
   setCartCount(cartCount-1);

   }
   return (
    <>
      <ProductContext.Provider
        value={{addToCart:addToCart,
          cartItems:cartItems,
          filterProduct:filterProduct,
          decCountCart:decCountCart,
          data:data,
          filter:filter,
          loading:loading,
          cartCount:cartCount,
          setCartCount:setCartCount,
          addCountCart:addCountCart,
          product:product,
          setProduct:setProduct,
          addProduct:addProduct,
          decProduct:decProduct
              
        }}>
        <Navbar/>
          <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route  exact path="/products" element={<Products/>}/>
                <Route  exact path="/cart" element={<Cart/>}/>
                <Route  exact path="/sign" element={<SignUp/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path="/products/:id" element={<Product/>}/>
          </Routes>
            
        
      </ProductContext.Provider> 
               
    </>
  );
}

export default App;
