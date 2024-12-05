import React from 'react'
import './Hero.css'
import profile_img from '../../assets/me.png'

const Hero = ({ setMenu }) => {
  return (
    <div id='home' className='hero' onMouseEnter={() => setMenu("home")}>
      <img src={profile_img} alt="" />
      <h1><span>I'm DILEEP PD,</span> software developer based in INDIA.</h1>
      <p>I am a software developer from kerala,  with 3 years of experience</p>
      <div className="hero-action">
      <a href="#contact"><div className="hero-connect" >Connect with me</div></a>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
