
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link, NavLink, useParams } from 'react-router-dom';
import ProductContext from './../context/productCart';
import { useContext } from 'react';




const Product=()=> {
  const{id}=useParams();
  
  const[loading,setLoading]=useState(false);
  const productContext=useContext(ProductContext);
  

  
  useEffect(()=>{
    const getProduct=async()=>{
        setLoading(true);
        const response= await axios.get(`https://fakestoreapi.com/products/${id}`);
        setTimeout(async() => {
          productContext.setProduct(await response.data);
          setLoading( false);
          console.log(productContext.product);
        }, 3000);
       
    }
    getProduct();
  },[]);



  

  const Loading=()=>{
    return(
        <>
        <div className='col-md-6 mb-3'>
                    <Skeleton height={400}  />
                    
        </div>
        <div className='col-md-6 '>
            <Skeleton height={50} width={300}/>
             <Skeleton height={75} width={300}/> 
             <Skeleton height={25} width={100}/> 
             <Skeleton height={25} width={100}/>  
             <Skeleton height={50} width={100}/>  
        </div>

        </>
    )

  }
  const ShowProducts=()=>{
    
    return(
        <>
            <div className='col-md-6'>
                <img src={productContext.product.image} alt={productContext.product.tiile} height="400px" width="400px" />
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>
                    {productContext.product.category}
                </h4>
                <h1 className='display-5'>{productContext.product.title}</h1>
                <p className='lead fw-bolder'>Rating{productContext.product.rating && productContext.product.rating.rate}
                <i className='fa fa-star'></i></p>
                <h3 className='display-6 fw-bold my-4'>${productContext.product.price}</h3>
                <Link to="/cart" className='btn btn-dark  ' style={{marginRight:"10px"}} onClick={()=>{productContext.addCountCart(productContext.product);productContext.addToCart(productContext.product);}} >Add to Cart</Link>
                <NavLink to="/cart" className='btn  btn-outline-dark' onClick={()=>{productContext.addCountCart(productContext.product);productContext.addToCart(productContext.product);}}>Go To Cart</NavLink>
            </div>
         
        
    

        </>
    )
  }

  
  return (

    <div>
        <div className='container '>
            <div className='row 'style={{marginTop:'200px'}}>
            {loading ? <Loading/>: <ShowProducts/>}

            </div>
        </div>

    </div>
  )
}

export default Product