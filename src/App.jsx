import React from 'react'
import Nav2 from './assets/layouts/nav/Nav2';
import Homepage from './assets/components/Hompage/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'animate.css';
import './index.css'
import About from './assets/components/aboutpage/About';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Homepage />}/>
      <Route  path='/About' element={<About />}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App