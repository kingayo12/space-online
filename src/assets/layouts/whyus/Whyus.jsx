import React from 'react'
import './Whyus.css'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import SavingsSharpIcon from '@mui/icons-material/SavingsSharp';
import Img4 from '../../images/why-us/why-us.png'
import RocketSharpIcon from '@mui/icons-material/RocketSharp';

const Whyus = () => {
  return (
    <div className="whyus-container">
        <div className="whyus-content xyz">
            <div className="content">
                <h1 className='text-big-m line'>Why space online <RocketLaunchIcon/></h1>

                <div className="house-content">
                  <OtherHousesIcon className='icon-white icon-round'/>
                  <div className="house-text">
                    <h1>Property Insurance</h1>
                    <p>Your is is usually one of your lagest investment. make sure you are covered from the unexpected. secure your home now</p>
                  </div>
                </div>

                <div className="house-content">
                  <AttachMoneySharpIcon className='icon-white icon-round'/>
                  <div className="house-text">
                    <h1>Property Insurance</h1>
                    <p>Your is is usually one of your lagest investment. make sure you are covered from the unexpected. secure your home now</p>
                  </div>
                </div>

                <div className="house-content">
                  <SavingsSharpIcon className='icon-white icon-round'/>
                  <div className="house-text">
                    <h1>Property Insurance</h1>
                    <p>Your is is usually one of your lagest investment. make sure you are covered from the unexpected. secure your home now</p>
                  </div>
                </div>
            </div>
         <div className="whyus-img">
            <div className="spin-img">
              
              <img src={Img4} alt="" />
              {/* <img src={Img4} alt="" /> */}
            </div>
            {/* <RocketSharpIcon className='absolute moveX'/>
              <RocketSharpIcon className='absolute moveY'/> */}
         </div>
        </div>
    </div>
  )
}

export default Whyus