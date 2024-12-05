import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/about.png'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow.png'

function MyWork({setMenu}) {
  return (
    <div id='projects' onMouseEnter={() => setMenu("portfolio")}>
      <div className="mywork">
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index)=>{
                return  <img key={index} src={work.w_img}/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} />
        </div>
      </div>
    </div>
  )
}

export default MyWork
