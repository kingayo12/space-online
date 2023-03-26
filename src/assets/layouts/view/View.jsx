import React from 'react'
import './View.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const View = () => {
  return (
   <>
   <div className="main_content-display">
    <div className="text_display animate__animated animate__bounceInLeft">
        <h1 className='text-big'>See it</h1>
        <h1 className='text-big'>book it</h1>
        <h1 className='text-big'>rent it</h1>
        <h1 className='text-big'>own it</h1>
        <button className='btn btn-primary'>Get Started  <KeyboardDoubleArrowRightIcon className='view-btn'/></button>
    </div>
   </div>
   </>
  )
}

export default View