import ProductContext from "../context/productCart";
import React from "react";
import { useContext } from "react"
import { useEffect } from "react";
import "./cart.css";

const Cart = () => {
    const productContext=useContext(ProductContext);
    const totalPrice= productContext.cartItems.reduce((price,item)=>price+item.quantity*item.price,0)


  return (
   
    <div className="product" style={{marginTop:'80px'}}>
      <div className="row ">
         <div className="container">
            {productContext.cartItems.length === 0 &&(
              <div className="cart-item-empty container">No items</div>
            )}
            <div className="cart-container">
                    {productContext.cartItems.map((item)=>(
                      <div key={item.id} className="cart-items-list  ">
                            <div  className="container cart-item ">
                                <div className="imag-cart ">
                                <img className="cart-item-image "src={item.image}></img>
                                </div>
                                <div className="cart-item-listi">
                                
                                <div className="cart-item-function d-flex ">
                                  <div className="cart-item-name">ProductName : {item.title.substring(0,9)}</div>
                                  <button className=" cart-item-add btn btn-success" onClick={()=>{productContext.addCountCart(item);productContext.addToCart(item);}} >+</button>
                                  <div className="cart-quantiti">{item.quantity}</div>
                                  <button className="cart-item-add btn btn-danger" onClick={()=>{productContext.decCountCart(item);productContext.decProduct(item);}} >-</button>
                                  <div className="cart-item-price">{(item.quantity*item.price).toFixed(2)}</div>
                                  
                                </div>
                                

                                
                                </div>
                            
                        
                            </div>
                    

              
              
                      </div>  
          ))}
        </div>
 

         </div>
      </div>
      <div className="row ">
        <div className="container">
          <div className="cart-total container d-flex">Total:${totalPrice.toFixed(2)}</div>
        </div>
        
        
      </div>
      
          
    </div>
    
     
    
  )
}

export default Cart;