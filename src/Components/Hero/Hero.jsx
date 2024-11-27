import React from 'react'
import './Hero.css'
import profile_img from '../../assets/me.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm DILEEP PD,</span> software developer based in INDIA.</h1>
      <p>I am a software developer from kerala,  with 3 years of experience</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
