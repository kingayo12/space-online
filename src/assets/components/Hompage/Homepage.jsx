import React from 'react'
import './Homepage.css'
import Nav from '../../layouts/nav/Nav2'
import View from '../../layouts/view/View'
import About from '../../layouts/about-us-l/About'
import Whyus from '../../layouts/whyus/Whyus'
import Property from '../../layouts/property/Property'
import Scrolltop from '../../reusables/scrolltop/Scrolltop'
import Blog from '../../layouts/blog/Blog'
import Clientreview from '../../layouts/clientsreview/Clientreview'

const Homepage = () => {
  return (
   <>
    <Nav/>
    <View/>
    <About/>
    <Whyus/>
    <Property/>
    <Blog/>
    <Clientreview/>
   <Scrolltop/>
   </>
  )
}

export default Homepage