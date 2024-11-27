import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
