import React from 'react'
import './About.css'
import About1 from '../../images/about-us/about-img1.png';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const About = () => {
  return (
    <div>
    <div className="about-container " id='About'>
      <h2>Who we are</h2>
      <h3>About us</h3>

      <div className="about-content xyz">
        <div className="rectangle-image animate__animated animate__bounceInLeft" >
          <img src={About1} alt="" />
        </div>
        <div className="text-content align-left animate__animated animate__bounceInRight">
            <h1 className='text-big-l'>Since 2022  <RocketLaunchIcon/></h1>
            <p className='text-small-2x'> <span className='text-big-m'>Space online</span> was first launched at year 2020 December 15, it was a project made solely for house owners, hotels and many more. The space online project allows users to make sales online at 0 to no risk. it is the nmber one online purchase system.</p>
            <p className='text-small-2x'> It is your own space, no expensive agent fee, maintainance covered, affordable spaces at your fibger tip, you're just a click away from getting your own space.<span>The wait is over!!</span></p>

            <div className="select-options">
              <button className='slect-btn'>Rent Space</button>
              <button className='slect-btn'> Lease Space</button>
              <button className='slect-btn'>Get a land</button>
              <button className='slect-btn'>Book a resault</button>
              <button className='slect-btn'>book a hotel</button>
              <button className='slect-btn'>get insurance</button>

              <button className='slect-btn'>Rent Space</button>
              <button className='slect-btn'> Lease Space</button>
              <button className='slect-btn'>Get a land</button>
              <button className='slect-btn'>Book a resault</button>
              <button className='slect-btn'>book a hotel</button>
              <button className='slect-btn'>get insurance</button>

             
             
            </div>
            <div className="about-button">
            <button className='btn btn-primary'>Get Started  <KeyboardDoubleArrowRightIcon className='view-btn'/></button>
            </div>
        </div>
      </div>
      <div className="circle one"></div>
      <div className="circle three"></div>
    </div>
  </div>
  )
}

export default About