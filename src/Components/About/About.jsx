import React from 'react'
import './About.css'
import about_heading from '../../assets/about.png'
import profile_img from '../../assets/me2.jpg'
const About = ({setMenu}) => {
  return (
    <div id='about' className='about' onMouseEnter={() => setMenu("about")}>
      <div className="about-title">
        <h1>About me</h1>
        <img src={about_heading} alt='' />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt=''/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Experienced Python developer with 3 years in Django and Flask frameworks. </p>
                <p>Proficient in designing and implementing scalable web applications. Strong problem-solving skills and a keen eye for optimization.</p>
                <p>Committed to delivering efficient and robust solutions that meet client needs.</p>
            </div>
            <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{width:"90%"}}></hr>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{width:"50%"}}></hr>
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{width:"90%"}}></hr>
            </div>
            <div className="about-skill">
              <p>Django</p>
              <hr style={{width:"100%"}}></hr>
            </div>
            <div className="about-skill">
              <p>Flask</p>
              <hr style={{width:"100%"}}></hr>
            </div>

            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr></hr>
        <div className="about-achievement">
          <h1>30+</h1>
          <p>Projects Completed</p>
        </div>
        <hr></hr>
        <div className="about-achievement">
          <h1>30+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  )
}

export default About




