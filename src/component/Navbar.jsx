import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductContext from './../context/productCart';
import { useContext } from 'react';


import './Navbar.css';

const Navbar = () => {
    const productContext=useContext(ProductContext);
  return (
    <div>
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark  fixed-top shadow-sm " >
            <div className="container">
                <NavLink className="navbar-brand text-decoration-none " to='/'>Frenzy Shop</NavLink>
                <ul className="navbar-nav mx-auto  mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/products'>Product</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link " to='/about'>About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                    </li>
                    
                </ul>
                <div className="buttons d-flex  ">
                    <NavLink to='/login' className="btn btn-light ">
                        <i className="fa fa-sign-in me-1"></i>Login
                    </NavLink>    

                    <NavLink to="/sign" className="btn btn-light mx-3">
                        <i className="fa fa-user-plus me-1"></i>Register
                    </NavLink>   
                    <NavLink to="/cart" className="btn btn-light  " >
                        <i className="fa fa-shopping-cart me-1"></i>Cart{productContext.cartCount}
                    </NavLink>   
                        
                </div>
            </div>
        </nav>

    </div>
       
    
    
  );
}

export default Navbar