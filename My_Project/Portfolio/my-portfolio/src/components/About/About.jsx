import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const about = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">  
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>i ll assig later</p>
                    <p>this one too</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>SKill html css</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React js</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>backend</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>python</p><hr style={{width:"50%"}}/></div>

                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievement">
                <h1>FUll Stack</h1>
                <p>Projects complete</p>
            </div>
        <hr />
        </div>
    </div>
  )
}

export default about 