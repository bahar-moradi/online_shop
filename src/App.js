import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Home from './component/home';
//import {Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Products/>

       
      
    </>
  );
}

export default App;
