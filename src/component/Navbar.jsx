import React from 'react'

import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark py-5 fixed-top shadow-sm " >
            <div className="container">
                <a className="navbar-brand text-decoration-none " href=''>Frenzy Shop</a>
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href='#'>Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href=''>Product</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " href=''>About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href=''>Contact</a>
                    </li>
                    
                </ul>
                <div className="buttons d-flex  ">
                    <a href='' class="btn btn-light ">
                        <i className="fa fa-sign-in me-1"></i>Login
                    </a>    

                    <a href='' class="btn btn-light mx-3">
                        <i className="fa fa-user-plus me-1"></i>Register
                    </a>   
                    <a href='' class="btn btn-light  ">
                        <i className="fa fa-shopping-cart me-1"></i>Cart
                    </a>   
                        
                </div>
            </div>
        </nav>
    
    </div>
  );
}

export default Navbar