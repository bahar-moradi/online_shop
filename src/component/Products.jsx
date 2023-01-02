
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Products = ( ) => {
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
                setTimeout(()=>{
                    setData(response.data);
                    setFilter(response.data);
                    setloading(false);
                    console.log(filter);

                },3000)
               
                
            }
            return()=>{
                componentMounted=false;
            }
            

        }
        getProducts();
        
    },[]);
    
    const Loading=()=>{
        return Array(8).fill({}).map(()=>{
            return(
                <div className='col-3 mb-3'>
                    <Skeleton height={350}  />
                    
                </div>
             )
        }
           
        )
    }

    const filterProduct=(cat)=>{
        const updateList = data.filter((x)=>x.category === cat);
        setFilter(updateList); 

    }

    const ShowProducts=()=>{
        return(
            <>
              <div className='Buttons d-flex justify-content-center mb-5'>
                <button className='btn btn-outline-dark me-2'onClick={()=>setFilter(data)}>All</button>
                <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("men's clothing")}>Men</button>
                <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("women's clothing")}>Women</button>
                <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("electronics")}>Electronic</button>
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
                                <a href="#" class="btn btn-primary">buy</a>
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
    <div >
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