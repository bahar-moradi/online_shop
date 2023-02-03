
import React, { useEffect, useState } from 'react';


import { Link, NavLink } from 'react-router-dom';
import ProductContext from './../context/productCart';
import { useContext } from 'react';
import ShowProducts from'../component/ShowProducts';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Products = ( ) => {
    const productContext=useContext(ProductContext);
    const[loading,setLoading]=useState(false);

    
  
    
    const Loading = () => {
        
            return Array(8).fill({}).map(()=>{
                return(
                    <div className='col-3 mb-3'>
                        <Skeleton height={350}  />
                        
                    </div>
                 )
            }
               
            )
        } 




    
  return (
    <div >
        <div className='container my-5 py-5'>
            <div className='row mt-6'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr/>
                </div>
            </div>
            <div className='row justify-content-center'>
                {productContext.loading ? <Loading/>: <ShowProducts/>}
            </div>
        </div>
    </div>
  )
}

export default Products