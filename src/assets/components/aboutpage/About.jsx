import React from 'react';
import './About.css';
import About1 from '../../layouts/about-us-l/About';
import Nav2 from '../../layouts/nav/Nav2';


// const getYear = () =>{
//     const newDate = new Date();
//     return newDate.getFullYear();
// }
const About = () => {
  return (
    <>
     <div className="about-pics">
      <h2>About</h2>
      <small>
        Home/About
      </small>
     </div>
      <div className="about-container xyz">
        <Nav2/>
        <About1/>
      </div>
    </>
  )
}

export default About