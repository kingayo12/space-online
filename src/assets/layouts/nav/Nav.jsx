import React from 'react'
import './Nav.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Me from '../../images/profile-img/Snapchat-1577513548.jpg'

const Nav = () => {
  return (
<div className="container">
   <div className="nav_container">
    <div className="nav_logo">
        <h1 className="company-logo">Space Online</h1>
    </div>
    <div className="nav-content">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Progress</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    <div className="nav-profile">
        <div className="profile_container">
            <img src={Me} alt="" />
        </div>
        <div className="notification">
            <NotificationsIcon className='icon-dis'/>
        </div>
        <div className="settings">
            <SettingsIcon className='icon-dis'/>
        </div>
    </div>
   </div>
</div>
  )
}

export default Nav