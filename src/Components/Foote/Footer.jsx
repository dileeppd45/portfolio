import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/mail_icon.webp'


const footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt=""  />
                <p>I am a Software web developer from, INDIA with 3 years of experience in a it company named Soften Technologies and have done so many freelance work based on academic projects and customer need.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr></hr>
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Dileep Pd. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer
