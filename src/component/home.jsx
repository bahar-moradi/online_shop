import React from 'react'
import Banner from '../assets/baner.jpg'
const Home = () => {
  return (
    <div className='hero 'style={{marginTop:'4.3rem'}}>
        <div className="card text-bg-dark text-white border-0 "style={{height:"100vh"}}>
            <img src={Banner} className="card-img"  />
            <div className="card-img-overlay">
                <div className='container'>
                <h5 className="card-title display-3 text-center fw-bolder"> New Season Arrival</h5>
                <p className="card-text"></p>
                <p className="card-text"><small></small></p>                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home