import React from 'react';
import './About.css';
import About1 from '../../images/about-us/about-img1.png';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


// const getYear = () =>{
//     const newDate = new Date();
//     return newDate.getFullYear();
// }
const About = () => {
  return (
    <div>
      <div className="about-container">
        <h1>Who we are</h1>
        <h3>About us</h3>

        <div className="about-content">
          <div className="rectangle-image">
            <img src={About1} alt="" />
          </div>
          <div className="text-content align-left">
              <h1 className=' text-big'>since 2022  <RocketLaunchIcon/></h1>
              <p className='text-small-2x'> <span className='text-big-m'>Space online</span> was first launched at year 2020 December 15, it was a project made solely for house owners, hotels and many more. The space online project allows users to make sales online at 0 to no risk. it is the nmber one online purchase system.</p> <br />
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
              <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About