import React from 'react'
import Cv from '../CV/Cv'
import img from '../Images/img1 (3).png'
import './Header.css'
import SocialLinks from '../Social Links/SocialLinks.jsx'



const Header = () => {
  return (
    <div className='header'>
    <header className='header_container'>
      <h5>Hello I'm</h5>
      <h1>Hassn Nadeem</h1>
      <h5>Mern Stack Developer</h5>
      <Cv/>
      <SocialLinks/>
      <a href='#Contact' className='scroll_down'>Scroll Down</a>

      <div>
        <img src={img} alt='' className='img'></img>
      </div>

      </header>








    </div>
  )
}

export default Header
