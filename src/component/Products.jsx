
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const[data,setData]=useState([]);
    const[filter,setFilter]=useState(data);
    const[loading,setloading]=useState(false);
    let componentMounted=true;

    useEffect(()=>{
        const getProducts=async()=>{
            setloading(true);
            const response= await axios.get("https://fakestoreapi.com/products");
            console.log(response);
            if(componentMounted){
                setData(await response.data);
                setFilter(await response.data);
                setloading(false);
                console.log(filter);
                
            }
            return()=>{
                componentMounted=false;
            }
            

        }
        getProducts();
        
    },[]);
    
    const Loading=()=>{
        return(
            <>
            Loading...
            </>
        )
    }

    const ShowProducts=()=>{
        return(
            <>
              <div className='Buttons d-flex justify-content-center mb-5'>
                <button className='btn btn-outline-dark me-2'onclick={()=>setFilter(data)}>All</button>
                <button className='btn btn-outline-dark me-2'onclick={()=>filterProduct("men's clothing")}>Men</button>
                <button className='btn btn-outline-dark me-2'onclick={()=>filterProduct("women")}>Women</button>
                <button className='btn btn-outline-dark me-2'onclick={()=>filterProduct("Jewelery")}>Jewelery</button>
                <button className='btn btn-outline-dark me-2'onclick={()=>filterProduct("Electronic")}>Electronic</button>
              </div>
              {filter.map((product,index)=> {
                return (
                    <>
                      <div className='col-md-3 mb-2'>
                        <div class="card h-100 p-4 text-center key={product.id}">
                            <img src={product.image} class="card-img-top h-50" alt={product.title} />
                            <div class="card-body">
                                <h5 class="card-title">{product.title.substring(0,9)}</h5>
                                <p class="card-text">${product.price}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                      </div>
                      

                    </>
                     )
                    })
               }
            
             
            </>
        )
    }

  return (
    <div>
        <div className='container my-5 py-5'>
            <div className='row mt-6'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr/>
                </div>
            </div>
            <div className='row justify-content-center'>
                {loading ? <Loading/>: <ShowProducts/>}
            </div>
        </div>
    </div>
  )
}

export default Products