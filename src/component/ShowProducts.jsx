import React from 'react'
import ProductContext from './../context/productCart';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
const ShowProducts = () => {
    const productContext=useContext(ProductContext);
  return (
    <>
          <div className='Buttons d-flex justify-content-center mb-5'>
            <button className='btn btn-outline-dark me-2'onClick={()=>productContext.setFilter(productContext.data)}>All</button>
            <button className='btn btn-outline-dark me-2'onClick={()=>productContext.filterProduct("men's clothing")}>Men</button>
            <button className='btn btn-outline-dark me-2'onClick={()=>productContext.filterProduct("women's clothing")}>Women</button>
            <button className='btn btn-outline-dark me-2'onClick={()=>productContext.filterProduct("jewelery")}>Jewelery</button>
            <button className='btn btn-outline-dark me-2'onClick={()=>productContext.filterProduct("electronics")}>Electronic</button>
          </div>
          
          {productContext.filter.map((product,index)=> {
            return (
                <>
                  <div className='col-md-3 mb-2'>
                    <div className='card h-100 p-4 text-center key={product.id}'>
                        <img src={product.image} class="card-img-top h-50" alt={product.title} />
                        <div className="card-body">
                            <h5 className='card-title'>{product.title.substring(0,9)}</h5>
                            <p className='card-text'>${product.price}</p>
                            <NavLink to={`/products/${product.id}`} className='btn btn-primary'>buy</NavLink>
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

export default ShowProducts
