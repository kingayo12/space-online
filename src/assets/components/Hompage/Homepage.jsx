import React from 'react'
import './Homepage.css'
import Nav from '../../layouts/nav/Nav'
import img2 from '../../images/slider-img/img2.png'
import About from '../aboutpage/About'
import Whyus from '../../layouts/whyus/Whyus'
import Property from '../../reusables/property/Property'
import Clientreview from '../../layouts/clientsreview/Clientreview'

const Homepage = () => {
  return (
   <>
   <Nav/>
   <div className="main_content-display">
    <div className="text_display">
        <h1 className='uppercase'>See it</h1>
        <h1 className='uppercase'>book it</h1>
        <h1 className='uppercase'>rent it</h1>
        <h1 className='uppercase'>own it</h1>
        <button className='btn btn-primary'>Get Started</button>
    </div>
    <div className="img_container">
       <img src={img2} alt="" />
    </div>
   </div>
   <About/>
   <Whyus/>
   <div className="property-add">
   <Property/>
   <div className="btn-center">
    <button className="btn btn-primary">
      Explore More
    </button>
    </div>
   
   </div>
   <Clientreview/>
   </>
  )
}

export default Homepage