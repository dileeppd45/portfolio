import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/about.png'
import arrow_icon from '../../assets/arrow.png'
import Services_Data from '../../assets/services-data'



const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} />
           
        </div>
        <div className="service-container">
            {Services_Data.map((service,index)=>{
              return <div key={index} className='services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-reademore">
                          <p>Read More</p>
                          <img src={arrow_icon} alt="" />
                        </div>
                     </div> })}
        </div>
      </div>
    </div>
  )
}

export default Services
