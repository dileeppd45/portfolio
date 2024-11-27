import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/about.png'
import mail_icon from '../../assets/mail_icon.webp'
import location_icon from '../../assets/location_icon.webp'
import call_icon from '../../assets/call_icon.png'
const Contact = () => {
  return (

<div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" style={{width:"20px;"}} /><p>dileeppd45@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" style={{width:"20px;"}} /><p>+91 790 741 0382</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" style={{width:"20px;"}} /><p>Kerala, India</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name:</label>
                <input type="text" placeholder='Enter your name' name='name' required />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'  required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
      
    </div>

    
  )
}

export default Contact
