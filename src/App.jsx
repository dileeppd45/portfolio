import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Creations from './Components/Creations/Creations'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Foote/Footer'
import { useRef } from 'react'
import React, { useState } from 'react'
import './Navbar.css'
import Logo from './assets/logo.png'
import underline from './assets/arrow.png'
import openmenu from './assets/open-menu.webp'
import closemenu from './assets/close-menu.webp'

const App = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "750px";
    }
  };
  return (
    <div>
      <div id='navbar' className='navbar' >
      <img src={Logo} alt=""  />
      <div onClick={openMenu} className='nav-mob-open'>
      <img src={openmenu}  alt="" className='nav-mob-open'  />
      </div>
      <ul ref ={menuRef} className="nav-menu">
        <img src={closemenu} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><a className='anchor-link' offset ={50}  href='#home' ><p onClick={()=>setMenu("home")}>Home</p></a> {menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><a className='anchor-link' offset ={50}  href='#about' ><p onClick={()=>setMenu("about")}>About Me</p></a> {menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><a className='anchor-link' offset ={50}  href='#services' ><p onClick={()=>setMenu("services")}>Services</p></a> {menu==="services"?<img src={underline} alt=''/>:<></>}</li>
        <li><a className='anchor-link' offset ={50}  href='#portfolio' ><p onClick={()=>setMenu("portfolio")}>Latest Work</p></a> {menu==="portfolio"?<img src={underline} alt=''/>:<></>}</li>
        <li><a className='anchor-link' offset ={50}  href='#projects' ><p onClick={()=>setMenu("projects")}>Projects</p></a> {menu==="projects"?<img src={underline} alt=''/>:<></>}</li>
        <li><a className='anchor-link' offset ={50}  href='#contact' ><p onClick={()=>setMenu("contact")}>Contact</p></a> {menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><a  href='#contact'>Connect With Me</a></div>
    </div>
      <Hero  setMenu={setMenu} />
      <About setMenu={setMenu} />
      <Services setMenu={setMenu} />
      <MyWork setMenu={setMenu} />
      <Creations setMenu={setMenu} />
      <Contact setMenu={setMenu} />
      <Footer/>
    </div>
  )
}

export default App
